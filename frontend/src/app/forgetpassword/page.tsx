"use client";
import { FormEvent, use } from "react";
import { useState, useRef } from "react";
import Loading from "../loading";
import Link from "next/link";
import { transform } from "next/dist/build/swc/generated-native";
export default function Forgetpassword() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const emailRef = useRef<HTMLInputElement>(null);
  const codeRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const ConfirmedPaaswordRef = useRef<HTMLInputElement>(null);
  const [form, setform] = useState(""); //pour communiquer avec utilisateur au cas d erreur
  const [formerror, setformerror] = useState("");
  const [showbutton, setshowbutton] = useState(false);
  const [loading, setloading] = useState(false); //pour afficher loading
  const [emailcheck, setemailcheck] = useState("");
  const [errorhandling, seterrorhandling] = useState(false);
  const [finish, setfinish] = useState(false); //apres la validation de changement de mot de passe on affiche une partie pour naviguer vers d autre place
  const HandleRecoverPassword = (e: FormEvent) => {
    e.preventDefault();
    setloading(true);

    try {
      if (emailRef.current?.value === "") {
        setformerror("Veuilleez entrer le email");
      } else {
        setformerror("");
        fetch(`${URL}passwordrecover`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current?.value,
            code: codeRef.current?.value,
            endpoint: "first",
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }
    } catch (err) {
      console.log("hey there is error", err);
    } finally {
      setloading(false);
    }
    setloading(false);
  };
  const verficationPassword = (e: FormEvent) => {
    e.preventDefault();
    setformerror("");

    fetch(`${URL}passwordrecover`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        endpoint: "second",
        code: codeRef.current?.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === true) {
          setshowbutton(true);
          setform("Code est correcte");
        } else {
          setform("Code incorrecte");
          setshowbutton(false);
        }
      });
  };
  const ChangePassword = (e: FormEvent) => {
    e.preventDefault();
    try {
      if (
        passwordRef.current?.value === ConfirmedPaaswordRef.current?.value &&
        emailRef.current?.value !== "" &&
        passwordRef.current?.value !== "" &&
        ConfirmedPaaswordRef.current?.value !== ""
      ) {
        fetch(`${URL}changingpassword`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current?.value,
            newPassword: passwordRef.current?.value,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data from the last fetch", data);
            seterrorhandling(false);
            if (data.message === true) {
              setemailcheck("Mot de passe bien change");
              setfinish(true);
              setform("");
            } else {
              seterrorhandling(true);
              setformerror("Email introuvable");
            }
          });
      } else {
        seterrorhandling(true);
        setformerror("Veuillez remplir tous les champs");
      }
    } catch (err) {
      console.log("err at forget password", err);
    }
  };
  return (
    <div className="section-authentification">
      <div className="section-authentification-main">
        <div className="container-authentification">
          <h1>{formerror === "" ? form : ""}</h1>
          <h1
            className={
              errorhandling
                ? "container-authentification-error"
                : "container-authentification-validation"
            }
          >
            {errorhandling ? formerror : emailcheck}
          </h1>

          {!finish && (
            <form action="">
              {!showbutton && (
                <div id="recover">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" ref={emailRef} />
                  <label htmlFor="password">Code de verification</label>
                  <input
                    type="text"
                    id="password"
                    ref={codeRef}
                    style={{ textTransform: "uppercase" }}
                  />
                </div>
              )}
              {showbutton && (
                <div id="recover">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" ref={emailRef} />
                  <label htmlFor="password">Mot de passe </label>
                  <input type="password" id="password" ref={passwordRef} />
                  <label htmlFor="password">Confirmer le mot de passe </label>
                  <input type="text" id="password" ref={ConfirmedPaaswordRef} />
                </div>
              )}

              {/**mot de passe */}

              {!showbutton && (
                <h1
                  onClick={HandleRecoverPassword}
                  className="password-oublie-button"
                >
                  Envoyer code
                </h1>
              )}
              {!showbutton && (
                <button className="search-button" onClick={verficationPassword}>
                  Verifier
                </button>
              )}
              {showbutton && (
                <button onClick={ChangePassword} className="search-button">
                  changer le mot de passe
                </button>
              )}
            </form>
          )}
          {finish && (
            <div className="navigation-links">
              <Link href="/">
                <div className="navigation-link">
                  <img
                    src="/undo_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="Retour"
                  />
                  <h3>Retour au page d'accueil</h3>
                </div>
              </Link>
              <Link href="/cars">
                <div className="navigation-link">
                  <img
                    src="/redo_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="Réserver"
                  />
                  <h3>Réserver</h3>
                </div>
              </Link>
            </div>
          )}
          {loading && <Loading name="verification" />}
        </div>
      </div>
    </div>
  );
}
