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
      current: 0
    }
  }

  componentDidUpdate(){
    const sliderEl = document.querySelector('.main__slider');
    sliderEl.style.left = this.state.current * -100 + '%';
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
          changeActiveMonth = {this.sliderControll} 
          current={this.state.current}
          data={this.state.monthList} />
      </div>
    );
  }
}

export default App;
