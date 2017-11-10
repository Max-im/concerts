import React from 'react';
import { Link } from 'react-router';

import './SliderItem.css';


const SliderItem = ({concerts}) => {
  const sortedArr = [];

  // sort all the links
  concerts.sort((a, b) => {
    return a.size - b.size;
  }).map((item, i) => {
    if( i%2 !== 0 ){
      sortedArr.push(item);
    }
    else{
      sortedArr.unshift(item);
    }
  });


  const renderList = sortedArr.map( i => 
    <Link key={i.id} to={"/single"+i.id} className={"main__element main__element_"+i.size}>
      <li
         
        className={'main__size main__size'+i.size}>
        
        <img 
          src={i.img} 
          alt="concert" 
          className={i.size === 4 ? "hide" : "main__img"}/>

        <div className={"main__dateInfo main__dateInfo_"+i.size }>
          <p className={"main__date main__date_"+i.size}> {i.date }</p>
          <p className={"main__month main__month_"+i.size}> {i.month }</p>
        </div>

        <h3 
          className={i.size === 4 ? "hide" : "main__title"}>
          { i.type }
        </h3>
        
        <h4 className={"main__name main__name_"+i.size}>{ i.name }</h4>
      </li>
    </Link>
  )
  return (
    <ul className="main__sliderList">
      { renderList }
    </ul>
  );
}

export default SliderItem;
