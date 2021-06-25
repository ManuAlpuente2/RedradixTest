import React from 'react';
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col footer_first">Fake proyect ©2020</div>
          <div className="col footer_second">Make with <span className="heart">❤︎</span> by <a href="https://twitter.com/ManuAlpuente" target="_blank" rel="noreferrer">@manualpuente</a></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;