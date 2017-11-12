import React, { Component } from 'react';

import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
      monthList : [
        {
          name:'январь',
          active: true,
        }, 
        {
          name:'февраль',
          active: false,
        }, 
        {
          name:'март',
          active: false,
        }, 
        {
          name:'апрель',
          active: false,
        },
        {
          name:'май',
          active: false,
        }, 
        {
          name:'июнь',
          active: false,
        }
      ],
      current: 0
    }
  }

  componentDidUpdate(){
    const sliderEl = document.querySelector('.main__slider');
    sliderEl.style.left = this.state.current * -100 + '%';
  }


  changeActiveMonth = (e) => {
    const newMonthState = [];
    let cur = 0;
    this.state.monthList.map((i, index) => {
      if(i.name === e){
        newMonthState.push({name: e, active: true});
        cur = index;
      }
      else{
        newMonthState.push({name: i.name, active: false});
      }
      return null;
    });
    this.setState({ 
      current: cur,
      monthList: newMonthState,
    })
  }


  sliderControll = (e) => {
    if(e >= 0 && e < 6 ){
      this.setState({current: e})
    }
  }




  render() {
    return (
      <div className="appWrap">
        <Header />
        <Form />
        <Main 
          current={this.state.current}
          sliderControll={this.sliderControll} /> 
        <Footer
          changeActiveMonth = {this.changeActiveMonth} 
          data={this.state.monthList} />
      </div>
    );
  }
}

export default App;
