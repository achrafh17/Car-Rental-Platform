"use client";
import { useState, useRef, FormEvent } from "react";
import Link from "next/link";
import Window from "../components";

export default function Signin() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(false);
  const [showbutton, setshowbutton] = useState(false);
  const [type, setType] = useState("password");
  const [typeConfirm, setTypeConfirm] = useState("password");
  const [emailcheck, setemailcheck] = useState(false);
  const nomRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const adresseRef = useRef<HTMLInputElement>(null);
  const dateNaissanceRef = useRef<HTMLInputElement>(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    if (
      !nomRef.current?.value ||
      !emailRef.current?.value ||
      !passwordRef.current?.value ||
      !passwordConfirmRef.current?.value ||
      !phoneRef.current?.value ||
      !adresseRef.current?.value ||
      !dateNaissanceRef.current?.value
    ) {
      setFormError("Veuillez remplir tous les champs obligatoires");
      return false;
    } else if (!emailRegex.test(emailRef.current.value)) {
      setFormError("Veuillez entrer une adresse email valide");
      return false;
    } else if (
      passwordConfirmRef.current?.value !== passwordRef.current?.value
    ) {
      setFormError("Les deux mots de passe ne sont pas identiques !");
      seterror(true);
      return false;
    } else if (
      Date.now() - new Date(dateNaissanceRef.current?.value).getTime() <
      18 * 365 * 24 * 3600 * 1000
    ) {
      setFormError("Vous devez avoir 18!");
      seterror(true);
      return false;
    } else if (passwordRef.current.value.length < 8) {
      setFormError("Au moins 8 caracteres pour mot de passe!");
      seterror(true);
      return false;
    } else {
      seterror(false);
      return true;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError("");
    setshowbutton(false);

    if (validateForm()) {
      setLoading(true);

      try {
        const response = await fetch(`${URL}signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nom: nomRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            phone: phoneRef.current?.value,
            adresse: adresseRef.current?.value,
            dateNaissance: dateNaissanceRef.current?.value,
          }),
        });

        if (!response.ok) {
          throw new Error("Erreur lors de l'inscription");
        }

        const data = await response.json();

        if (data.message === true) {
          setFormError("Email existe déjà");
          setemailcheck(true);
          seterror(true);
        } else {
          seterror(false);
          setemailcheck(false);
          setshowbutton(true);
        }
      } catch (error) {
        setFormError((error as Error).message);
        seterror(true);
      } finally {
        setLoading(false);
      }
    }
  };

  const handlePasswordVisibility = (e: FormEvent) => {
    e.preventDefault();
    setType(type === "password" ? "text" : "password");
  };

  const handleConfirmPasswordVisibility = (e: FormEvent) => {
    e.preventDefault();
    setTypeConfirm(typeConfirm === "password" ? "text" : "password");
  };

  return (
    <section className="section-authentification">
      {!showbutton && (
        <div className="section-authentification-main">
          <div className="container-authentification">
            <h2 id="container-authentification-title">Créer un compte</h2>

            {formError && <div className="error-message">{formError}</div>}

            <form>
              <label htmlFor="nom">Nom complet</label>
              <input
                id="nom"
                type="text"
                ref={nomRef}
                placeholder="Entrez votre nom complet"
                className={
                  formError && !nomRef.current?.value ? "invalid-input" : ""
                }
              />

              <label htmlFor="email">Email </label>
              <input
                id="email"
                type="text"
                ref={emailRef}
                placeholder="Entrez votre email"
                className={
                  formError && !emailRef.current?.value ? "invalid-input" : ""
                }
              />

              <label htmlFor="password">Mot de passe </label>
              <div className="password-input-container">
                <input
                  id="password"
                  type={type}
                  ref={passwordRef}
                  placeholder="Créez un mot de passe sécurisé"
                  className={
                    formError && !passwordRef.current?.value
                      ? "invalid-input"
                      : ""
                  }
                />
                <button
                  className="password-toggle-button"
                  onClick={handlePasswordVisibility}
                  type="button"
                >
                  <img
                    src={
                      type === "password"
                        ? "/visibility_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                        : "/visibility_off_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                    }
                    alt=""
                  />
                </button>
              </div>

              <label htmlFor="password-confirm">Confirmer mot de passe</label>
              <div className="password-input-container">
                <input
                  id="password-confirm"
                  type={typeConfirm}
                  ref={passwordConfirmRef}
                  placeholder="Confirmez votre mot de passe"
                  className={
                    formError && !passwordRef.current?.value
                      ? "invalid-input"
                      : ""
                  }
                />
                <button
                  className="password-toggle-button"
                  onClick={handleConfirmPasswordVisibility}
                  type="button"
                >
                  <img
                    src={
                      typeConfirm === "password"
                        ? "/visibility_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                        : "/visibility_off_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                    }
                    alt=""
                  />
                </button>
              </div>

              <label htmlFor="phone">Téléphone</label>
              <input
                id="phone"
                type="text"
                ref={phoneRef}
                placeholder="Entrez votre numéro de téléphone"
              />

              <label htmlFor="adresse">Adresse</label>
              <input
                id="adresse"
                type="text"
                ref={adresseRef}
                placeholder="Entrez votre adresse"
              />

              <label htmlFor="dateNaissance">Date de naissance</label>
              <input id="dateNaissance" type="date" ref={dateNaissanceRef} />
            </form>
            {!showbutton && (
              <button
                className="section-authentification-button-invite"
                onClick={handleSubmit}
              >
                {loading ? "Chargement..." : "S'inscrire"}
              </button>
            )}
          </div>
        </div>
      )}

      {showbutton && !error && (
        <div className="confirmation-container">
          <Window />
          <button className="section-authentification-button-continue">
            <Link id="button-continue-link" href="/paiment">
              Continuer
            </Link>
          </button>
        </div>
      )}
    </section>
  );
}
