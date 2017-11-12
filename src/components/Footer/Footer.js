import React from 'react';
import './Footer.css';



const Footer = ({ changeActiveMonth, current }) => {
  const monthList = [
        { name:'январь' }, 
        { name:'февраль' }, 
        { name:'март' }, 
        { name:'апрель' },
        { name:'май' }, 
        { name:'июнь' }
      ];

  const renderList = monthList.map( (i, index) => 
    <li 
      key={i.name} 
      onClick={changeActiveMonth.bind(this, index)}
      className={index === current ? "footer__item footer__item_active" : "footer__item"}>
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
