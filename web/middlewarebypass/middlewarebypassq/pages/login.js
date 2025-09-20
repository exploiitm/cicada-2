"use client";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    
    if (res.ok) {
      setMessage("✅ Logged in!");
    } else {
      setMessage("❌ Invalid credentials");
    }
    window.location.href = "/admin/flag";
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>Kool Form Pack | Login page</title>
      <link href="/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/css/bootstrap-icons.css" rel="stylesheet" />
      <link href="/css/tooplate-kool-form-pack.css" rel="stylesheet" />
      
      <main>
        <header className="site-header">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-12 col-12 d-flex">
                <a
                  className="site-header-text d-flex justify-content-center align-items-center me-auto"
                  href="index.html"
                >
                  <i className="bi-box" />
                  <span>Login</span>
                </a>
                
                <div>
                  <a
                    href="#"
                    className="custom-btn custom-border-btn btn"
                    data-bs-toggle="modal"
                    data-bs-target="#subscribeModal"
                  >
                    Notify me
                    <i className="bi-arrow-right ms-2" />
                  </a>
                </div>
                <a
                  className="bi-list offcanvas-icon"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasMenu"
                  role="button"
                  aria-controls="offcanvasMenu"
                />
              </div>
            </div>
          </div>
        </header>
        
        <div
          className="offcanvas offcanvas-end"
          data-bs-scroll="true"
          tabIndex={-1}
          id="offcanvasMenu"
          aria-labelledby="offcanvasMenuLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close ms-auto"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center">
            <nav>
              <ul>
                <li>
                  <a className="active" href="login.html">
                    Login Form
                  </a>
                </li>
                <li>
                  <a href="password-reset.html">Password Reset</a>
                </li>
                <li>
                  <a href="404.html">404 Page</a>
                </li>
                <li>
                  <a href="contact.html">Contact Form</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div
          className="modal fade"
          id="subscribeModal"
          tabIndex={-1}
          aria-labelledby="subscribeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form
                  action="#"
                  method="get"
                  className="custom-form mt-lg-4 mt-2"
                  role="form"
                >
                  <h2 className="modal-title" id="subscribeModalLabel">
                    Stay up to date
                  </h2>
                  <input
                    type="email"
                    name="email"
                    id="subscribeEmail"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="your@email.com"
                    required=""
                  />
                  <button type="submit" className="form-control">
                    Notify
                  </button>
                </form>
              </div>
              <div className="modal-footer justify-content-center">
                <p>By signing up, you agree to our Privacy Notice</p>
              </div>
            </div>
          </div>
        </div>
        
        <section className="hero-section d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-12 mx-auto">
                <form className="custom-form login-form" role="form" onSubmit={handleSubmit}>
                  <h2 className="hero-title text-center mb-4 pb-2">Login Form</h2>
                  
                  {message && (
                    <div className="alert alert-info text-center mb-4">
                      {message}
                    </div>
                  )}
                  
                  <div className="form-floating mb-4 p-0">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required=""
                    />
                    <label htmlFor="username">Username</label>
                  </div>
                  
                  <div className="form-floating p-0">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required=""
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Remember me
                    </label>
                  </div>
                  
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-12">
                      <button type="submit" className="form-control">
                        Login
                      </button>
                      </div>
                      
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="video-wrap">
            <video autoPlay="" loop="" muted="" className="custom-video" poster="">
              <source src="videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </main>
    </>
  );
}

