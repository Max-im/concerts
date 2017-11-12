import React from 'react';
import './Single.css';
import { Link } from 'react-router';

import data from '../../assets/db/mainDb';

const Single = (props) => {
  const index = props.params.cur;
  const obj = (data[index].filter( i => {
    return i.id === +props.params.id
  }))[0];

  return (
    <div className="single container">
      <h1>{obj.name}</h1>
      <div className="single__imgWrap">
      <img src={obj.img} alt={obj.name}
      className={obj.size === 4 ? "hide" : "main__img"} />
      </div>
      <div>
        <span>{obj.date}</span>
        <span>{obj.month}</span>
      </div>
      <p>{obj.about}</p>
      <Link to='/' className="single__backBtn">На главную</Link>
    </div>
  );
}

export default Single;
