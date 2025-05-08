"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function cars() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const today = new Date().toISOString().split("T")[0];
  const [option, setOption] = useState("");
  const [carArray, setCarArray] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [validStart, setValidStart] = useState(false);
  const [validEnd, setValidEnd] = useState(false);
  const startRef = useRef();
  const endRef = useRef();

  const handleSearch = async () => {
    const startDate = startRef.current?.value;
    const endDate = endRef.current?.value;

    // Date validation remains the same
    const startValid = new Date(startDate).getTime() > Date.now();
    const endValid =
      new Date(endDate).getTime() > Date.now() &&
      new Date(endDate).getTime() > new Date(startDate).getTime();

    setValidStart(startValid);
    setValidEnd(endValid);
    setHasError(!(startValid && endValid));

    if (startValid && endValid) {
      try {
        const res = await fetch(`${URL}car`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            startDate,
            endDate,
            category: option === "Tous" ? null : option,
          }),
        });
        const data = await res.json();

        const filtered =
          option && option !== "Tous"
            ? data.filter((c) => c.category === option)
            : data;

        const filtredDisponible = filtered.filter(
          (c) =>
            !(
              new Date(c.date_Location) <= new Date(endDate) &&
              new Date(c.date_retour) >= new Date(startDate)
            )
        );

        setCarArray(filtredDisponible);
        setHasError(false);
      } catch (e) {
        console.error("Erreur:", e);
      }
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="main-title">Location de Voitures Premium</h1>
        <p className="tagline">
          Découvrez notre sélection de véhicules haut de gamme
        </p>
      </header>

      <div className="filter-section">
        <input
          type="date"
          min={today}
          ref={startRef}
          id={validStart ? "" : "unvalidinput"}
        />
        <input
          type="date"
          min={today}
          ref={endRef}
          id={validEnd ? "" : "unvalidinput"}
        />
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value="">----</option>
          <option value="Tous">Tous</option>
          <option value="Coupe">Coupe</option>
          <option value="Sport">Sport</option>
          <option value="Sedan">Sedan</option>
          <option value="Hatchback">Hatchback</option>
        </select>
      </div>

      <div className="search-section">
        <button className="search-button" onClick={handleSearch}>
          <span className="button-icon">🚗</span>
          <span className="button-text">Afficher les véhicules</span>
        </button>
      </div>

      {hasError && (
        <div className="results-info error">
          <img
            src="/warning_24dp_BB271A_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Warning"
          />
          <p id="error">Les dates ne sont pas valides.</p>
          <div>
            <p id="error">Les dates ne sont pas valides.</p>
            <p className="error-details">
              {!validStart && "La date de début doit être dans le futur."}
              {!validStart && !validEnd && " "}
              {!validEnd && "La date de fin doit être après la date de début."}
            </p>
          </div>
        </div>
      )}

      {!hasError && carArray.length > 0 && (
        <div className="results-info">
          <p>{carArray.length} véhicules disponibles</p>
        </div>
      )}

      <div className="car-grid">
        {!hasError &&
          carArray.map((item) => (
            <div className="car-card" key={item._id}>
              {item.imageUrl && (
                <div className="car-image-container">
                  <img
                    src={item.imageUrl}
                    alt={`${item.marque} ${item.model}`}
                    className="car-image"
                  />
                </div>
              )}
              <div className="car-details">
                <h2 className="car-title">
                  {item.marque} {item.model}
                </h2>
                {item.price && (
                  <p className="car-price">
                    {item.price}€ <span className="price-period">/ jour</span>
                  </p>
                )}
                {item.description && (
                  <p className="car-description">{item.description}</p>
                )}
                {item.category && (
                  <span className="car-category">{item.category}</span>
                )}
                {item.anne && (
                  <p className="car-year">Année: {item.anne.slice(0, 4)}</p>
                )}
                <Link href={`/car/${item._id}`} className="reserve-button">
                  Réserver maintenant
                </Link>
              </div>
            </div>
          ))}
      </div>

      {!hasError && carArray.length === 0 && (
        <div className="empty-state">
          <p>Cliquez sur le bouton pour afficher nos véhicules disponibles</p>
        </div>
      )}
    </div>
  );
}
