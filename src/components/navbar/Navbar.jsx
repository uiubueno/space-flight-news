import React from "react";
import logoImg from "../../assets/images/logo.svg";
import "./styles.css";

export class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <a href="/">
              <img src={logoImg} alt="Logo Space Flight News" />
            </a>

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
