import React from 'react';
import './Footer.css';



const Footer = ({ data, changeActiveMonth }) => {
  const renderList = data.map( i => 
    <li 
      key={i.name} 
      onClick={changeActiveMonth.bind(this, i.name)}
      className={i.active ? "footer__item footer__item_active" : "footer__item"}>
      {i.name}
    </li>
  )

  return (
    <footer className="footer">
      <div className="container">
        <ul className="flex footer__container">       
          { renderList }
        </ul>       
      </div>
    </footer>
  );
}

export default Footer;
