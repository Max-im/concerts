import React from 'react';
import { Link } from 'react-router';

import './SliderItem.css';
 

const SliderItem = ({concerts, current}) => {
  const sortedArr = concerts.sort((a, b) => {
    return a.size - b.size;
  });


  const renderList = sortedArr.map( i => 
    <Link key={i.id} to={"id/"+i.id+'/'+current} className={"main__element main__element_"+i.size}>
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
