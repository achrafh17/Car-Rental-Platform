"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
export default function panier() {
  const [panier, setpanier] = useState([]);
  const handlepanier = () => {
    fetch("http://localhost:3001/car", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data panier", data);
        setpanier(data);
      })
      .catch((err) => console.log("eroor by me", err));
  };
  const removeItem = (indextoremove) => {
    const removedItem = panier.filter((_, index) => indextoremove !== index);
    setpanier(removedItem);
  };
  return (
    <div className="panier-wrapper">
      <h2 className="panier-title">Votre Panier</h2>

      {panier.length === 0 ? (
        <div className="panier-empty">
          <p className="empty-message">Le panier est vide</p>
          <button className="continue-shopping-btn" onClick={handlepanier}>
            Continuer vos achats
          </button>
        </div>
      ) : (
        <div className="panier-content">
          <div className="panier-header">
            <div className="header-item header-image">Image</div>
            <div className="header-item header-details">Véhicule</div>
            <div className="header-item header-price">Prix</div>
            <div className="header-item header-quantity">Journees</div>
            <div className="header-item header-total">Total</div>
            <div className="header-item header-actions">Actions</div>
          </div>
          {panier.map((item, index) => (
            <div className="panier-item" key={item._id}>
              <div className="item-image">
                <img src={item.imageUrl} alt={`${item.marque} ${item.model}`} />
              </div>
              <div className="item-details">
                <h3 className="item-brand">{item.marque}</h3>
                <p className="item-model">{item.model}</p>
              </div>
              <div className="item-price">{item.prix_location} DH</div>
              <div>
                {(new Date(item.date_retour) - new Date(item.date_Location)) /
                  (3600 * 24 * 1000)}
              </div>
              <div>
                {((new Date(item.date_retour) - new Date(item.date_Location)) /
                  (3600 * 24 * 1000)) *
                  item.prix_location}
                DH
              </div>
              <div className="remove-btn">
                <img
                  src="/shopping_cart_off_24dp_1D3557_FILL0_wght400_GRAD0_opsz24.svg"
                  alt=""
                  onClick={() => removeItem(index)}
                />
              </div>
            </div>
          ))}

          <div className="panier-summary">
            <div className="summary-row">
              <span className="summary-label">Sous-total:</span>
              <span className="summary-value"> DH</span>
            </div>

            <div className="summary-row total">
              <span className="summary-label">Total:</span>
              <span className="summary-value"> DH</span>
            </div>
            <Link href="/middle">
              <button className="checkout-btn">Procéder au paiement</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
