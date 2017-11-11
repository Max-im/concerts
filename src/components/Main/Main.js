import React, { Component } from 'react';
import './Main.css';

import SliderItem from '../SliderItem/SliderItem';
import data from '../../assets/db/mainDb';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: []
    }
  }

  componentDidMount(){
    this.setState({concerts: data})
  }

  render() {
    return (
      <main className="main">
        <div className="main__slider">
          <SliderItem concerts={this.state.concerts} />
        </div>
      </main>
    );
  }
}

export default Main;
