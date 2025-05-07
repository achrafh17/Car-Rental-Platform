"use client";
import { useState, useRef, FormEvent, useEffect } from "react";
import Link from "next/link";
import Window from "../components";
export default function Signin() {
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(false);
  const [showbutton, setshowbutton] = useState(false);
  const [type, setType] = useState("password");
  const [typeConfirm, setTypeConfirm] = useState("password");
  const [window, setwindow] = useState(false);
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
      passwordConfirmRef.current?.value !== passwordRef.current.value
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
    } else if (passwordRef.current.value.length < 8) {
      setFormError("Au moins 8 caracteres pour mot de passe!");
      seterror(true);
    } else {
      seterror(false);
      return true;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (validateForm()) {
      setLoading(true);

      //--------------problem ici --------------------------------
      fetch("http://localhost:3001/signin", {
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
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Erreur lors de l'inscription");
          }

          return res.json();
        })
        .then((data) => {
          if (data.message === true) {
            setFormError("Email exists deja");
            setemailcheck(true);
            seterror(true);
            throw new Error("Email exist!!");
          } else if (data.message === false) {
            seterror(false);
            setemailcheck(false);
          }

          console.log("helloo check,ak", data.message);
        })
        .catch((error) => {
          setFormError(error.message);
          seterror(true);
        })
        .finally(() => {
          setLoading(false);
          setwindow(true);
        });
    } else {
      setLoading(false);
      seterror(true);
    }
    if (formError === "") {
      setshowbutton(true);
    } else {
      setshowbutton(false);
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
  useEffect(() => {
    setTimeout(() => {
      setwindow(false);
    }, 3000);
  }, [window]);

  return (
    <section className="section-authentification">
      {!window && (
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
              {!showbutton && (
                <button
                  className="section-authentification-button-invite"
                  onClick={handleSubmit}
                >
                  {loading ? "Loading" : "S'inscrire"}
                </button>
              )}
              {showbutton && !error && (
                <button className="section-authentification-button-continue">
                  <Link href="paiment">Continuer</Link>
                </button>
              )}
            </form>
          </div>
        </div>
      )}

      {window && !error && <Window />}
    </section>
  );
}
