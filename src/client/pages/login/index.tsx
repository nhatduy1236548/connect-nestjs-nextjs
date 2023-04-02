import { NextApiResponse } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  console.log(formData);

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formURL = e.target.action;
    const data = JSON.stringify(formData);

    console.log(data);
    // POST the data to the URL of the form
    await fetch(formURL, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("ok");
      if (response.ok) {
        router.replace("/*", "/main");
      }
    })
    .then(() => {
      setFormData({
        username: "",
        password: ""
      });
    });
  };

  return (
    <>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 6px;
        background-color: #f8f8f8;
        height: 100vh;
      }
      .card {
        width: 100%;
        max-width: 450px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 16px;
        margin: 16px;
      }
      .title {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 16px;
      }
      .form {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .label {
        font-size: 14px;
        font-weight: 500;
      }
      .input {
        padding: 8px 12px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 14px;
      }
      .input:focus {
        border-color: #4285f4;
        box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
      }
      .submit-button {
        padding: 12px 0;
        font-size: 16px;
        font-weight: 500;
        color: white;
        background-color: #4285f4;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      .submit-button:hover {
        background-color: #2c75f2;
      }
      .remember-me {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
      }
      .sign-up {
        font-size: 14px;
        text-align: center;
      }
      .sign-up-link {
        color: #4285f4;
        text-decoration: underline;
        cursor: pointer;
      }
    
    `}</style>
    <section className="container">
  <div className="card">
    <h1 className="title">Sign in to your account</h1>
    <form className="form" action="http://localhost:3000/login" method="POST" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="label">
          Your email
        </label>
        <input
          type="email"
          name="username"
          onChange={handleInput}
          value={formData.username}
          id="email"
          className="input"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          name="password"
          onChange={handleInput}
          value={formData.password}
          id="password"
          placeholder="••••••••"
          className="input"
          />
        </div>
        <div className="remember-me">
          <input id="remember" aria-describedby="remember" value="" type="checkbox" className="input" />
          <label htmlFor="remember" className="label">
            Remember me
          </label>
        </div>
        <button type="submit" className="submit-button">
          Sign in
        </button>
  
        <p className="sign-up">
          Don’t have an account yet?{" "}
          <Link href="/signup"className="sign-up-link">Sign up
          </Link>
        </p>
      </form>
    </div>
  </section>
  </>)
};

export default Login;

