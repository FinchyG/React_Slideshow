import React, { Component } from 'react';
import questionMark from './images/questionMark.png';
import entertainment from './images/entertainment.png';
import general_knowledge from './images/general_knowledge.png';
import geography from './images/geography.png';
import history from './images/history.png';
import science_and_nature from './images/science_and_nature.png';
import sport from './images/sport.png';
import './App.css';

const image_paths = [
  questionMark,
  general_knowledge,
  geography,
  history,
  science_and_nature,
  sport
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={image_paths[0]} />
        <img src={image_paths[1]} />
        <img src={image_paths[2]} />
        <img src={image_paths[3]} />
        <img src={image_paths[4]} />
        <img src={image_paths[5]} />
        <img src={image_paths[6]} />
      </div>
    );
  }
}

export default App;
