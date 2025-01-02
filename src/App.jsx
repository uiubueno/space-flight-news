import React from "react";
import logoImg from "./assets/images/logo.svg";
import "./styles/App.css";

// Componente em classe é uma clase que herda a classe Component do React,
// e retorna HTML dentro do método render.

class App extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src={logoImg} alt="Logo Space Flight News" />
            <h1>Space Flight News</h1>
          </div>
          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Trending</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default App;
