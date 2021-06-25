import React, { useState } from 'react';
import "./style.scss";
import LogoImg from './../../assests/CompanyLogo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#!" className="header-logo-container" title="Ir al inicio">
          <img src={LogoImg} alt="Logo de la compañía" className="header-logo" />
        </a>
        <nav className={`header-nav header-nav__${menuOpen ? 'open' : 'close'}`}>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="header-nav_toggle"
            title={`${menuOpen ? 'Cerrar' : 'Abrir'} menú`}
            alt="Icono expandir menú"
          />
          <ul className="header-nav_items">
            <a href="#!" className="header-nav_item">First link</a>
            <a href="#!" className="header-nav_item">Second link</a>
            <a href="#!" className="header-nav_item">Third link</a>
            <a href="#!" className="header-nav_item">Fourth link</a>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;