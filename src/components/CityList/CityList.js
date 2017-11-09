import React, { Component } from 'react';

import './CityList.css';




const CityList = ({ data, show, cityPick, chooseItem }) => {
  const randerList = data.map( (i) => 
    <li 
      className="form__subCityItem" 
      onClick={chooseItem.bind(this, i)} 
      key={ i }>
      { i }
    </li>
  )
  return (
    <ul className={show ? "form__subCity" : "hide"}>
     { randerList }
    </ul>
  );
}

export default CityList;


