import React, { Component } from 'react';
import './Main.css';

import size1 from '../../assets/img/euro.jpg';
import size21 from '../../assets/img/concert1.jpg';
import size22 from '../../assets/img/concert-2.jpg';
import size23 from '../../assets/img/theatre1.jpg';
import size24 from '../../assets/img/theatre2.jpg';
import size31 from '../../assets/img/opera.jpg';
import size32 from '../../assets/img/concert3.jpg';
import size33 from '../../assets/img/concert4.jpg';
import size34 from '../../assets/img/sport.jpg';




class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: [
        {
          id: 1,
          name: 'Евровидение 2017',
          type: 'Конкурс',
          date: '9-13',
          month: 'март',
          img: size1,
          size: 1
        },
        {
          id: 2,
          name: 'Depeche Mode',
          type: 'Концерт',
          date: '12',
          month: 'март',
          img: size21,
          size: 2
        },
        {
          id: 3,
          name: 'Мария Чайковская',
          type: 'Концерт',
          date: '22',
          month: 'фев',
          img: size22,
          size: 2
        },
        {
          id: 4,
          name: 'Оскар i рожжева панi',
          type: 'Театр',
          date: '23',
          month: 'фев',
          img: size23,
          size: 2
        },
        {
          id: 5,
          name: 'Черный квадрат, медовый месяц',
          type: 'Театр',
          date: '25',
          month: 'фев',
          img: size24,
          size: 2
        },
        {
          id: 6,
          name: '',
          type: 'Опера',
          date: '15',
          month: 'фев',
          img: size31,
          size: 3
        },
        {
          id: 7,
          name: '',
          type: 'Концерт',
          date: '21',
          month: 'фев', 
          img: size32,
          size: 3
        },
        {
          id: 8,
          name: '',
          type: 'Концерт',
          date: '27',
          month: 'фев', 
          img: size33,
          size: 3
        },
        {
          id: 9,
          name: '',
          type: 'Спорт',
          date: '5',
          month: 'фев', 
          img: size34,
          size: 3
        },
        {
          id: 10,
          name: '',
          type: '',
          date: '31',
          month: 'март', 
          img: '',
          size: 4
        },
        {
          id: 11,
          name: '',
          type: '',
          date: '8',
          month: 'фев', 
          img: '',
          size: 4
        },
        {
          id: 12,
          name: '',
          type: '',
          date: '25',
          month: 'фев', 
          img: '',
          size: 4
        },
        {
          id: 13,
          name: '',
          type: '',
          date: '11',
          month: 'фев', 
          img: '',
          size: 4
        },
        {
          id: 14,
          name: '',
          type: '',
          date: '14',
          month: 'фев', 
          img: '',
          size: 4
        }
      ]
    }
  }

  render() {
    const renderList = this.state.concerts.map( i => 
      <li
        key={i.id} 
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
    )
    return (
      <main className="main">
          <ul>
            { renderList }
          </ul>
      </main>
    );
  }
}

export default Main;
