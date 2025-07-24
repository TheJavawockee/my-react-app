import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const navItems = ["HOME", "ABOUT", "CONTACT", "GALLERY", "MERCH", "GAMES"];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className={`nav-list ${menuOpen ? "nav-list-open" : ""}`}>
            {navItems.map((item) => (
              <li key={item} className="nav-item">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)} // close menu on click
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger button positioned on the right */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>

        <h1 className="header-title">The Javawockee</h1>
      </header>

      <main className="main-content">
        <section className="section music-controls" id="music-controls">
          <h2>MUSIC</h2>
          <button className="btn">Play</button>
          <label className="volume-label">
            Volume{" "}
            <input type="range" min="0" max="100" defaultValue="50" />
          </label>
        </section>

        <section className="section">
          <p>Welcome to my first website.</p>
          <p>It is currently under construction and is a working progress.</p>
          <p>Click the button below to see what happens</p>
          <button
            className="btn"
            onClick={() => alert("Hello! Thanks for clicking.")}
          >
            Click Me!
          </button>
        </section>

        <section className="section">
          <p>Click the button below to give feedback on my website using google forms.</p>
          <button className="btn" onClick={toggleForm}>
            Feedback
          </button>

          {showForm && (
            <div className="form-container">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScUeW4LYnxnUfLoHPiyAQWlz1aK-h6-eQssi4IzL9B9LKMR1A/viewform?usp=sharing&ouid=115158317429088896898=true"
                width="340"
                height="600"
                title="Google Feedback Form"
                className="iframe"
              />
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 The Javawockee</p>
      </footer>
    </>
  );
}
