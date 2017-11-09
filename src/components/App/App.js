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
          active: true
        }, 
        {
          name:'февраль',
          active: false
        }, 
        {
          name:'март',
          active: false
        }, 
        {
          name:'апрель',
          active: false
        },
        {
          name:'май',
          active: false
        }, 
        {
          name:'июнь',
          active: false
        }
      ]
    }
  }

  changeActiveMonth = (e) => {
    const newMonthState = [];
    this.state.monthList.map(i => {
      if(i.name === e){
        newMonthState.push({name: e, active: true});
      }
      else{
        newMonthState.push({name: i.name, active: false});
      }
      return null;
    });
    this.setState({ monthList: newMonthState })
  }


  render() {
    return (
      <div>
        <Header />
        <Form />
        <Main />
        <Footer
          changeActiveMonth = {this.changeActiveMonth} 
          data={this.state.monthList} />
      </div>
    );
  }
}

export default App;
