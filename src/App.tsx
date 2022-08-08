import React from 'react';
import './styles/app.css';

function App() {
  return (
    <div className="">
      <header className="app-header">
        <h1>
          <span>🧑🏽‍💻</span> Jess Delgado Perez
        </h1>
      </header>
      <main>
        <ul>
          <li>
            <a
              href="https://github.com/jesatrix"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jessicadelgado/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/jesatrix"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
