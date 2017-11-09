import React, { Component } from 'react';

import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';




class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
