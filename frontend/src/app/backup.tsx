/* Global CSS for Car Rental Application */

/* Import Montserrat font */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

/* Reset and base styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#showcode {
  all: unset;
}
#unvalidinput {
  border: 1px solid red;
}
#error-password {
  all: unset;
  color: red;
}
#error {
  color: red;
}
body {
  font-family: "Montserrat", sans-serif;
  background-color: #f7f9fc;
  color: #333;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

a {
  color: #1d3557;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #e63946;
}

/* Container for page layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Header styles */
.header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
}

.main-title {
  color: #1d3557;
  font-size: 32px;
  margin-bottom: 8px;
}

.tagline {
  color: #666;
  font-size: 16px;
  font-weight: 300;
}

/* Form elements */
input,
select,
button {
  font-family: "Montserrat", sans-serif;
}

input[type="date"],
select {
  padding: 10px 15px;
  margin: 0 10px 20px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
}

input[type="date"]:focus,
select:focus {
  outline: none;
  border-color: #457b9d;
  box-shadow: 0 0 0 2px rgba(69, 123, 157, 0.2);
}

select {
  cursor: pointer;
  background-color: white;
  min-width: 150px;
}

/* Search section */
.search-section {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.search-button {
  background-color: #e63946;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.search-button:hover {
  background-color: #d62839;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.search-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.button-icon {
  font-size: 20px;
}

/* Results information */
.results-info {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
  color: #457b9d;
}

/* Car grid for homepage */
.car-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.car-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.car-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.car-image-container {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.car-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.car-card:hover .car-image {
  transform: scale(1.05);
}

.car-details {
  padding: 20px;
}

.car-title {
  font-size: 20px;
  font-weight: 600;
  color: #1d3557;
  margin-top: 0;
  margin-bottom: 10px;
}

.car-price {
  font-size: 22px;
  font-weight: 700;
  color: #e63946;
  margin: 10px 0;
}

.price-period {
  font-size: 14px;
  font-weight: 400;
  color: #666;
}

.car-description {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
}

.car-category {
  display: inline-block;
  background-color: #f1faee;
  color: #457b9d;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  margin-right: 8px;
}

.car-year {
  font-size: 14px;
  color: #555;
  margin: 10px 0;
}

.reserve-button {
  background-color: #1d3557;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  margin-top: 15px;
}

.reserve-button:hover {
  background-color: #2a4a73;
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 8px;
  color: #6c757d;
}

/* Car Details page specific styles */
.car-details-container {
  font-family: "Montserrat", sans-serif;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.car-details-container .car-card {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .car-details-container .car-card {
    flex-direction: row;
  }
}

.car-details-container .car-image {
  flex: 1;
  min-height: 300px;
  overflow: hidden;
}

.car-details-container .car-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.car-details-container .car-info {
  flex: 1;
  padding: 2rem;
}

.car-details-container .car-brand {
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: #1d3557;
}

.car-details-container .car-category {
  font-size: 1.2rem;
  margin: 0 0 1.5rem 0;
  color: #457b9d;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
  display: block;
  background-color: transparent;
}

.car-details-container .car-model,
.car-details-container .car-year,
.car-details-container .car-price {
  margin: 0.75rem 0;
  font-size: 1rem;
  color: #555;
}

.car-details-container .car-model span,
.car-details-container .car-year span,
.car-details-container .car-price span {
  font-weight: bold;
  color: #333;
}

.car-details-container .car-price span {
  color: #e63946;
}

.car-details-container .car-description {
  margin: 1.5rem 0;
}

.car-details-container .car-description h3,
.car-details-container .car-features h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #1d3557;
}

.car-details-container .car-description p {
  line-height: 1.6;
  color: #666;
}

.car-details-container .car-features ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.car-details-container .car-features li {
  padding: 0.4rem 0;
  color: #666;
}

.car-details-container .car-features li:before {
  content: "✓";
  color: #457b9d;
  margin-right: 8px;
}

.car-details-container .contact-button {
  margin-top: 1.5rem;
  background-color: #e63946;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.car-details-container .contact-button:hover {
  background-color: #d62839;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Input fields styling for car reservation form */
.car-info input[type="date"],
.car-info input[type="text"] {
  display: block;
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #333;
  transition: all 0.3s ease;
}

.car-info input[type="date"]:focus,
.car-info input[type="text"]:focus {
  outline: none;
  border-color: #457b9d;
  box-shadow: 0 0 0 2px rgba(69, 123, 157, 0.2);
}

.car-info input::placeholder {
  color: #aaa;
}

/* Form section styling */
.car-info .reservation-form {
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.car-info .form-title {
  font-size: 1.2rem;
  color: #1d3557;
  margin-bottom: 15px;
}

.car-info .form-row {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.car-info .form-row input {
  flex: 1;
  margin-bottom: 0;
}

/* ===== STYLES POUR LE COMPOSANT D'AUTHENTIFICATION ===== */

/* Section d'authentification */
.section-authentification {
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f7f9fc;
}

.section-authentification-main {
  width: 100%;
  max-width: 400px;
}

/* Container d'authentification */
.container-authentification {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;
}

.container-authentification:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

/* Titre d'authentification */
#container-authentification-title {
  color: #1d3557;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
}

/* Style du formulaire */
.container-authentification form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Style des labels */
.container-authentification label {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #1d3557;
  margin-bottom: 8px;
  display: block;
}
.container-authentification-error {
  color: #d62839;
  font-weight: 500;
  margin: 0;
  font-size: 18px;
  line-height: 1.4;
  animation: fadeInShake 1s;

}
.container-authentification-validation {
  color: #04e3a4;
  font-weight: 500;
  margin: 0;
  font-size: 18px;
  line-height: 1.4;
  animation: fadeInShake 1s;
}

/* Style des champs de saisie */
.container-authentification input[type="text"],
.container-authentification input[type="password"] {
  font-family: "Montserrat", sans-serif;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  width: 100%;
  transition: all 0.3s ease;
}

.container-authentification input[type="text"]:focus {
  outline: none;
  border-color: #457b9d;
  box-shadow: 0 0 0 2px rgba(69, 123, 157, 0.2);
}

/* Style du séparateur "or" */
.section-authentification-main span {
  display: block;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #666;
  margin: 15px 0;
  position: relative;
}

/* Lignes décoratives autour du "or" */
.section-authentification-main span::before,
.section-authentification-main span::after {
  content: "";
  position: absolute;
  top: 50%;
  width: calc(50% - 25px);
  height: 1px;
  background-color: #ddd;
}

.section-authentification-main span::before {
  left: 0;
}

.section-authentification-main span::after {
  right: 0;
}

/* Style du bouton "continuer en tant qu'invité" */
#button-continue-link {
  all: unset;
}
.section-authentification-button-invite {
  background-color: #1d3557;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
}

.section-authentification-button-continue:hover {
  background-color: #03c290;
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(4, 227, 164, 0.4);
}

.section-authentification-button-continue:active {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(4, 227, 164, 0.35);
}

.section-authentification div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

/* Continue Button styling */
.section-authentification-button-continue {
  background: linear-gradient(135deg, #04e3a4 0%, #00c4a8 100%);
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 14px 32px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(4, 227, 164, 0.25);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: relative;
  overflow: hidden;
  margin: 30px auto;
  width: auto;
  min-width: 200px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  animation: bounceIn 0.8s ease-out 0.5s both;
}

.section-authentification-button-continue:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(4, 227, 164, 0.35);
  background: linear-gradient(135deg, #04e3a4 0%, #02b394 100%);
}

/* Button link styling */
#button-continue-link {
  all: unset;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Add a right arrow icon after the text */

/* Window component container styling - to be used with your Window component */
.window-component-container {
  width: 100%;
  max-width: 500px;
  border: none;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;
  margin: 30px auto 20px;
}

/* Pour ajouter une icône si besoin */
.section-authentification-button-continuesvg,
.section-authentification-button-continue img {
  width: 18px;
  height: 18px;
}

/* Animation d'apparition */
.section-authentification-button-continue.fade-in {
  animation: fadeInUp 0.5s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-authentification-main button:hover {
  background-color: #2a4a73;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.section-authentification-main button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.password-oublie-button {
  font-family: "Montserrat", sans-serif;
  text-align: right;
  cursor: pointer;
  text-decoration: underline;
}
.password-oublie-button:hover {
  color: #04e3a4;
}
#recover {
  all: unset;
}
/* Style pour le conteneur du champ de mot de passe */
/* Style amélioré pour le conteneur du champ de mot de passe */
.password-input-container {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}

.password-input-container input {
  width: 100%;
  padding-right: 40px !important; /* Plus d'espace pour le bouton */
  height: 45px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.password-toggle-button {
  all: unset;
  position: absolute;
  right: 10px; /* Position plus à droite */
  top: 36%; /* Centré verticalement */
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  z-index: 2; /* S'assurer que le bouton est au-dessus de l'input */
}

.password-toggle-button img {
  width: 15px;
  height: 20px;
  object-fit: contain;
  filter: brightness(0.6); /* Rendre l'icône un peu plus visible */
  transition: filter 0.2s ease;
}

/* Effet hover sur l'icône plutôt que sur le bouton */
.password-toggle-button:hover img {
  filter: brightness(0.8);
}

/* Maintenir la position correcte lors du hover/focus/active */
.password-toggle-button:hover,
.password-toggle-button:focus,
.password-toggle-button:active {
  background: transparent !important;
  transform: translateY(-50%) !important; /* Garde la même transformation */
  outline: none;
  box-shadow: none !important;
}
/* -------------------window pour confirmattion signin  */
/* Improved styling for the signin confirmation window */
.signin-confirmation {
  width: 50%;
  border: none;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  padding: 30px 20px;
  margin-top: 20px;
  animation: fadeIn 0.5s ease-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.signin-confirmation:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(4, 227, 164, 0.15);
}

.signin-confirmation-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.success-icon-container img {
  width: 40px;
  height: 40px;
  filter: brightness(1.1);
}

#confirmation-title {
  color: #1d3557;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0 0 12px 0;
  font-family: "Montserrat", sans-serif;
}

.confirmation-text {
  color: #6c757d;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(4, 227, 164, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(4, 227, 164, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(4, 227, 164, 0);
  }
}
/* -------------------------Panier section------------- */
.panier-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  color: #1d3557;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

/* Titre de la page */
.panier-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #1d3557;
  position: relative;
  padding-bottom: 0.75rem;
}

.panier-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background-color: #04e3a4;
  border-radius: 2px;
}

/* Panier vide */
.panier-empty {
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.empty-message {
  font-size: 1.25rem;
  color: #6c757d;
  margin-bottom: 1.5rem;
}

.continue-shopping-btn {
  background-color: #04e3a4;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  padding: 0.85rem 1.75rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(4, 227, 164, 0.3);
}

.continue-shopping-btn:hover {
  background-color: #03c290;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(4, 227, 164, 0.4);
}

.continue-shopping-btn:active {
  transform: translateY(0);
}

/* Contenu du panier */
.panier-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* En-tête du tableau */
.panier-header {
  display: grid;
  grid-template-columns: 120px 2fr 1fr 1fr 1fr 80px;
  padding: 1rem;
  background-color: #f1f5f9;
  border-radius: 10px 10px 0 0;
  font-weight: 600;
  color: #1d3557;
  align-items: center;
}

.header-item {
  padding: 0 0.5rem;
}

/* Articles du panier */
.panier-item {
  display: grid;
  grid-template-columns: 120px 2fr 1fr 1fr 1fr 80px;
  align-items: center;
  padding: 1.25rem 1rem;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease;
  cursor: pointer;
}

.panier-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

/* Image de l'article */
.item-image {
  width: 100px;
  height: 70px;
  overflow: hidden;
  border-radius: 8px;
  background-color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Détails de l'article */
.item-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.item-brand {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  color: #1d3557;
}

.item-model {
  font-size: 0.95rem;
  color: #6c757d;
  margin: 0;
}

/* Prix de l'article */
.item-price {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1d3557;
}

/* Bouton de suppression */
.remove-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.remove-btn:hover {
  transform: scale(1.15);
}

.remove-btn img {
  width: 24px;
  height: 24px;
}

/* Résumé du panier */
.panier-summary {
  margin-top: 1.5rem;
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  align-self: flex-end;
  width: 350px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.summary-row.total {
  border-top: 1px solid #e9ecef;
  padding-top: 1rem;
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.summary-label {
  color: #6c757d;
}

.summary-value {
  font-weight: 600;
  color: #1d3557;
}

.checkout-btn {
  width: 100%;
  padding: 0.85rem;
  background-color: #04e3a4;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
  box-shadow: 0 2px 5px rgba(4, 227, 164, 0.3);
}

.checkout-btn:hover {
  background-color: #03c290;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(4, 227, 164, 0.4);
}

.checkout-btn:active {
  transform: translateY(0);
}
/* error handling */

.results-info.error {
  background-color: #fff3f3;
  border-left: 4px solid #e63946;
  border-radius: 6px;
  padding: 15px 20px;
  margin: 25px auto;
  max-width: 600px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 10px rgba(230, 57, 70, 0.15);
  animation: fadeInShake 0.5s ease-out;
  transition: all 0.3s ease;
}

.results-info.error:hover {
  box-shadow: 0 5px 15px rgba(230, 57, 70, 0.25);
  transform: translateY(-2px);
}

.results-info.error img {
  width: 24px;
  height: 24px;
  margin-right: 15px;
  filter: invert(32%) sepia(83%) saturate(2619%) hue-rotate(333deg)
    brightness(85%) contrast(92%);
}

.results-info.error p {
  color: #d62839;
  font-weight: 500;
  margin: 0;
  font-size: 15px;
  line-height: 1.4;
}

.results-info.error .error-details {
  margin-top: 8px;
  font-size: 13px;
  color: #666;
  font-weight: 400;
}

.results-info.error .error-close {
  margin-left: auto;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 18px;
  color: #e63946;
  background: none;
  border: none;
  padding: 0 5px;
}

.results-info.error .error-close:hover {
  opacity: 1;
}
@keyframes fadeInShake {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  20% {
    transform: translateX(8px);
  }
  40% {
    transform: translateX(-6px);
  }
  60% {
    transform: translateX(4px);
  }
  80% {
    transform: translateX(-2px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.invalid-input {
  border: 2px solid #ff4444;
  animation: shake 0.5s;
}

.error-message {
  color: #ff4444;
  margin-bottom: 1rem;
}

.date-error {
  color: #ff8800;
  margin-top: 1rem;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}

