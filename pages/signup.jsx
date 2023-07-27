"use client";

import { useRouter } from "next/router";
import { useState } from "react";

import styles from "../styles/FuelQuoteForm.module.css";

const SignupForm = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform custom validation
    if (username.length < 3) {
      setErrorMessage("Username must be at least 3 characters long.");
      return;
    }

    if (password.length < 5) {
      setErrorMessage("Password must be at least 5 characters long.");
      return;
    }

    if (password !== passwordAgain) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // If all validations pass, submit the form
    const formData = {
      username,
      password,
    };

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).then((res) => res.json());
      
      console.log(res);

      if (res.username) {
        router.push("/Logon");
      } else {
        setErrorMessage("Something wrong happend");
      }
    } catch (e) {
      setErrorMessage("Something wrong happend");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["form-group"]}>
        <label className={styles["label"]} htmlFor="username">
          Username
        </label>
        <input
          minLength="3"
          name="username"
          id="username"
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label className={styles["label"]} htmlFor="password">
          Password
        </label>
        <input
          minLength="5"
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <br />
        <label className={styles["label"]} htmlFor="passwordAgain">
          Retype Password
        </label>
        <input
          minLength="5"
          name="passwordAgain"
          id="passwordAgain"
          type="password"
          placeholder="Retype Password"
          required
          value={passwordAgain}
          onChange={(event) => setPasswordAgain(event.target.value)}
        />
      </div>
      <br />
      <div className={styles["form-group"]}>
        <button className={styles["button"]} type="submit">
          Submit
        </button>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default SignupForm;
