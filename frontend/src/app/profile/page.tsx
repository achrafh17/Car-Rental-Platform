"use client";
import { useEffect, useState } from "react";
export default function Profile() {
  const [userCar, setUserCar] = useState([]);
  const URL = process.env.NEXT_PUBLIC_URL;
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  useEffect(() => {
    fetch(`${URL}car`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setUserCar(data));
  }, []);
  useEffect(() => {
    fetch(`${URL}profile`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("here is the data",data);
        // setname(data.name);
        // setemail(data.email);
      });
  }, []);
  return (
    <div className="user-profile-container">
      <div className="user-profile-header">
        <div className="user-profile-avatar">
          <img src="/api/placeholder/80/80" alt="Photo de profil" />
        </div>
        <div className="user-profile-info">
          <h1 className="user-profile-name">Achraf {name}</h1>
          <p className="user-profile-email">{email}</p>
        </div>
        <button className="user-profile-edit-btn">Modifier le profil</button>
      </div>

      <div className="user-profile-tabs">
        <button className="user-profile-tab-btn user-profile-tab-active">
          Mes réservations
        </button>
        <button className="user-profile-tab-btn">Mes documents</button>
        <button className="user-profile-tab-btn">Mes préférences</button>
        <button className="user-profile-tab-btn">Facturation</button>
      </div>
      <h2 className="user-profile-section-title">Réservations actives</h2>
      <div className="user-profile-content">
        <div className="user-profile-section">
          {userCar.map((item) => (
            <div className="user-profile-reservation" key={item._id}>
              <div className="user-profile-reservation-image">
                <img src={item.imageUrl} />
              </div>
              <div className="user-profile-reservation-info">
                <h3 className="user-profile-reservation-title">
                  {item.marque}-{item.model}
                </h3>
                <div className="user-profile-reservation-details">
                  <span className="user-profile-reservation-dates">
                    15/05/2025 - 20/05/2025
                  </span>
                </div>
                <div className="user-profile-reservation-status user-profile-status-confirmed">
                  Confirmée
                </div>
              </div>
              <div className="user-profile-reservation-actions">
                <button className="user-profile-btn user-profile-btn-primary">
                  Détails
                </button>
                <button className="user-profile-btn user-profile-btn-secondary">
                  Modifier
                </button>
              </div>
            </div>
          ))}

          {/* <div className="user-profile-reservation">
            <div className="user-profile-reservation-image">
              <img src="/api/placeholder/120/80" alt="Peugeot 3008" />
            </div>
            <div className="user-profile-reservation-info">
              <h3 className="user-profile-reservation-title">Peugeot 3008</h3>
              <div className="user-profile-reservation-details">
                <span className="user-profile-reservation-dates">
                  10/06/2025 - 20/06/2025
                </span>
                <span className="user-profile-reservation-location">Lyon</span>
              </div>
              <div className="user-profile-reservation-status user-profile-status-pending">
                En attente
              </div>
            </div>
            <div className="user-profile-reservation-actions">
              <button className="user-profile-btn user-profile-btn-primary">
                Détails
              </button>
              <button className="user-profile-btn user-profile-btn-secondary">
                Annuler
              </button>
            </div>
          </div> */}
        </div>
      </div>

      <div className="user-profile-footer">
        <button className="user-profile-btn user-profile-btn-secondary">
          Déconnexion
        </button>
        <button className="user-profile-btn user-profile-btn-danger">
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
}
