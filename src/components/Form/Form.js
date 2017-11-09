import React, { Component } from 'react';
import './Form.css';
import CityList from '../CityList/CityList';

import date from '../../assets/icons/date.png';
import city from '../../assets/icons/city.png';

const list = ['Киев', 'Львов', 'Одесса', 'Харьков', 'Ивано-франковск'];


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityMenuShow: true,
      currentCity: 'Ивано-франковск'
    }
  }

  cityPick = () => {
    this.setState({ cityMenuShow: !this.state.cityMenuShow })
  }

  chooseItem = (e) => {
    this.setState({ currentCity: e })
  }


  render() {
    return (
      <div className="form">
        <div className="container form__container flex">
          
          <input 
            type="text" 
            name="search" 
            className="form__search form__block" 
            placeholder="Место, объект, название, тематика, активность"
            id="formSearch" />
          
          <a 
            className="form__date form__block">
            <img src={ date } alt="date" className="form__img" />
            Дата
          </a>

          <ul className="form__block form__city" onClick={this.cityPick}>
            <img src={ city } alt="location" className="form__img" />
            <li className="form__cityItem">{ this.state.currentCity }</li>
            <CityList 
              cityPick = { this.cityPick }
              chooseItem = {this.chooseItem }
              data = { list } 
              show = { this.state.cityMenuShow } />
          </ul>

          <a className="form__block form__btn">
            Найти
          </a>

        </div>
      </div>
    );
  }
}

export default Form;
