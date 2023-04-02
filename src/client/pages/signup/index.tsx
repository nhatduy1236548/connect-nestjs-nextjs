import React, { useState } from "react";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formURL = e.target.action;
    console.log(formURL);
    const data = JSON.stringify(formData);

    console.log(data);
    await fetch(formURL, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
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
          email: "",
          password: ""
        });
      });
  };

  return (
    <>
      <style jsx>{`
        .section {
          background-color: #f9fafb;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          min-height: 100vh;
        }
        .container {
          background-color: #fff;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 1.5rem 2rem;
          width: 100%;
          max-width: 24rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1a202c;
        }
        .input-group {
          width: 100%;
          margin-bottom: 1rem;
        }
        .label {
          font-size: 0.875rem;
          font-weight: 500;
          display: block;
          margin-bottom: 0.5rem;
          color: #1a202c;
        }
        .input {
          width: 100%;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          border: 1px solid #cbd5e0;
          border-radius: 0.375rem;
          color: #1a202c;
          background-color: #f7fafc;
        }
        .input:focus {
          outline: none;
          border-color: #4c51bf;
          box-shadow: 0 0 0 3px rgba(76, 81, 191, 0.1);
        }
        .submit-button {
          width: 100%;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          border-radius: 0.375rem;
          color: #fff;
          background-color: #4c51bf;
          cursor: pointer;
        }
       
        .submit-button:hover {
          background-color: #5a67d8;
        }
        .submit-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(76, 81, 191, 0.1);
        }
      `}</style>
      <section className="section">
        <div className="container">
          <h1 className="title">Signup to your account</h1>
          <form
            className="form"
            action="http://localhost:3000/signup"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className="input-group">
              <label htmlFor="username" className="label">
                Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleInput}
                className="input"
                placeholder="name@company.com"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="label">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInput}
                className="input"
                placeholder="name@company.com"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInput}
                className="input"
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="submit-button">
              Sign up
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
