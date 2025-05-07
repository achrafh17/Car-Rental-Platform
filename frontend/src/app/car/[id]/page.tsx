"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
export default function Voiture({ params }: { params: { id: string } }) {
  const [cardata, setcardata] = useState({});
  const [validstart, setvalidstart] = useState(true);
  const [validend, setvalidend] = useState(true);
  const [haserror, sethaserror] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  // Refs initialisés correctement
  const prenomref = useRef<HTMLInputElement>(null);
  const nomref = useRef<HTMLInputElement>(null);
  const cinref = useRef<HTMLInputElement>(null);
  const permisref = useRef<HTMLInputElement>(null);
  const startdateref = useRef<HTMLInputElement>(null);
  const enddateref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch(`http://localhost:3001/car:${params.id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setcardata(data);
      });
  }, []);
  const handleinformation = () => {
    sethaserror(false);
    setvalidstart(true);
    setvalidend(true);

    if (
      !nomref.current?.value ||
      !prenomref.current?.value ||
      !cinref.current?.value ||
      !permisref.current?.value ||
      !startdateref.current?.value ||
      !enddateref.current?.value
    ) {
      sethaserror(true);
      return;
    }

    // Validation des dates
    const startDate = new Date(startdateref.current.value);
    const endDate = new Date(enddateref.current.value);
    const now = new Date();

    const startValid = startDate > now;
    const endValid = endDate > startDate;

    if (!startValid || !endValid) {
      setvalidstart(startValid);
      setvalidend(endValid);
      return;
    }

    // Envoi des données
    fetch("http://localhost:3001/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom: nomref.current.value,
        prenom: prenomref.current.value,
        cin: cinref.current.value,
        permis: permisref.current.value,
        dateDebut: startdateref.current.value,
        dateFin: enddateref.current.value,
        carId: params.id,
        marque: cardata.marque,
        model: cardata.model,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur de réservation");
        return res.json();
      })
      .then(() => alert("Réservation réussie !"))
      .catch((error) => {
        console.error(error);
        sethaserror(true);
      });
  };

  return (
    <div className="car-details-container">
      <div className="car-card">
        {cardata.imageUrl && (
          <div className="car-image">
            <img src={cardata.imageUrl} alt={cardata.marque} />
          </div>
        )}

        <div className="car-info">
          <h1 className="car-brand">{cardata.marque}</h1>
          <h2 className="car-category">{cardata.category}</h2>

          {cardata.model && (
            <p className="car-model">Modèle : {cardata.model}</p>
          )}
          {cardata.year && <p className="car-year">Année : {cardata.year}</p>}
          {cardata.prix_location && (
            <p className="car-price">
              Prix : {cardata.prix_location.toLocaleString()}DH/jour
            </p>
          )}

          {cardata.description && (
            <div className="car-description">
              <h3>Description</h3>
              <p>{cardata.description}</p>
            </div>
          )}

          <div className="reservation-form">
            <h3 className="form-title">Réservation</h3>

            {haserror && (
              <div className="error-message">
                Veuillez remplir tous les champs obligatoires
              </div>
            )}

            <div className="form-row">
              <input
                type="date"
                className={validstart ? "" : "invalid-input"}
                ref={startdateref}
                min={today}
              />
              <input
                type="date"
                className={validend ? "" : "invalid-input"}
                ref={enddateref}
                min={today}
              />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Nom" ref={nomref} />
              <input type="text" placeholder="Prénom" ref={prenomref} />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Numéro CIN" ref={cinref} />
              <input
                type="text"
                placeholder="Numéro de permis"
                ref={permisref}
              />
            </div>

            <Link href="/panier">
              <button className="contact-button" onClick={handleinformation}>
                Reserver
              </button>
            </Link>

            {(!validstart || !validend) && (
              <div className="date-error">
                {!validstart && "Date de début invalide"}
                {!validstart && !validend && " - "}
                {!validend && "Date de fin invalide"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
