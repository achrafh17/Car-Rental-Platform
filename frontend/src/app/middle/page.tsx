"use client";
import Link from "next/link";
import React, { FormEvent } from "react";
import { useState, useRef } from "react";
export default function Middle() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setform] = useState("");
  const [name, setname] = useState("");
  const emailref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);
  const handlesubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch(`${URL}middle`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailref.current?.value,
        password: passwordref.current?.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === true) {
          setform(`hello ${data.name}`);
        } else {
          setform("you dont exist");
        }
        console.log(data);
      });
  };
  return (
    <div className="section-authentification">
      <div className="section-authentification-main">
        <div className="container-authentification">
          <h1 id="container-authentification-title">S'authentifier</h1>
          <h1>{form}</h1>
          <form action="">
            <label htmlFor="email">email</label>
            <input type="text" ref={emailref} id="email" />
            {/*email */}
            <label htmlFor="password">password</label>
            <input type="text" ref={passwordref} id="password" />
            {/**mot de passe */}
            <button onClick={handlesubmit} className="search-button">
              Je m'identifie
            </button>
          </form>

          <Link className="password-oublie-button" href="/signin">
            S&apos;inscrire
          </Link>

          <Link href="/forgetpassword" className="password-oublie-button">
            {" "}
            J'ai oublie le mot de passe
          </Link>
        </div>
        <span>or</span>
        <Link href="/paiment">
          <button className="section-authentification-button-invite">
            continuer en tant qu invite
          </button>
        </Link>
      </div>
    </div>
  );
}
