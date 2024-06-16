import React from "react";
import logoIMG from '../../assets/logos.png';
import './styles.css'

export class NavBar extends React.Component {

  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src={logoIMG} alt="" />
            <h1>Space Flight News</h1>
          </div>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/">Thrending</a></li>
            <li><a href="/">Categorias</a></li>
            <li><a href="/">About us</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}