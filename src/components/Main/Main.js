import React, { Component } from 'react';
import './Main.css';

import SliderItem from '../SliderItem/SliderItem';
import chevron from '../../assets/icons/sliderChevron.png';
import add from '../../assets/icons/main__add.png';
import data from '../../assets/db/mainDb';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: [],
      concerts2: [],
      concerts3: [],
      concerts4: [],
      concerts5: [],
      concerts6: [],
      current: 0
    }
  }

  componentDidMount(){
    this.setState({
      concerts:  data[0] ,
      concerts2: data[1],
      concerts3: data[2],
      concerts4: data[3],
      concerts5: data[4],
      concerts6: data[5],
    })
    const sliderEl = this.refs.slider;
    sliderEl.style.left = this.state.current * -100 + '%';
  }
  componentWillUpdate(){
     const sliderEl = this.refs.slider;
    sliderEl.style.left = this.state.current * -100 + '%';
  }


  leftSwitch = () => {
    if( this.state.current > 0 ){
      this.setState({current: --this.state.current})
    }
  }


  rightSwitch = () => {
    if( this.state.current < data.length-1 ){
      this.setState({current: ++this.state.current})
    }
  }

  render() {
    return (
      <main className="main">
        <div className="main__slider" ref="slider">
          <SliderItem concerts={this.state.concerts} />
          <SliderItem concerts={this.state.concerts2} />
          <SliderItem concerts={this.state.concerts3} />
          <SliderItem concerts={this.state.concerts4} />
          <SliderItem concerts={this.state.concerts5} />
          <SliderItem concerts={this.state.concerts6} />

        </div>
        <div className="container main__sliderControll">
          <img 
            src={chevron}
            alt="chevron"
            onClick={this.leftSwitch}
            className="main__chevron main__chevron_swich" />
          
          <img 
            src={chevron}
            alt="chevron"
            onClick={this.rightSwitch}
            className="main__chevron" />
          
          <a className="main__add">
            <img src={add} alt="location" className="main__addImg"/>
            Добавить
          </a>
        </div>
      </main>
    );
  }
}

export default Main;
