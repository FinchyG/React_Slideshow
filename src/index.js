import React from 'react';
import ReactDOM from 'react-dom';
import {Slideshow} from './Slideshow';
import questionMark from './images/questionMark.png';
import entertainment from './images/entertainment.png';
import general_knowledge from './images/general_knowledge.png';
import geography from './images/geography.png';
import history from './images/history.png';
import science_and_nature from './images/science_and_nature.png';
import sport from './images/sport.png';

const image_paths = [
    questionMark,
    general_knowledge,
    geography,
    history,
    science_and_nature,
    sport
  ]

  class SlideshowContainer extends React.Component {
    
    constructor(props) {
      super(props);

      this.state = {currentImage: 0};

      this.interval = null;

      this.nextImage = this.nextImage.bind(this);
    }

    nextImage() {
        let current = this.state.currentImage;
        let next    = ++current % image_paths.length;
        this.setState({currentImage: next});
    }

    componentDidMount() {
        this.interval = setInterval(this.nextImage, 1000);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }
    
    render() {
        const src= image_paths[this.state.currentImage];
        return <Slideshow src={src}/>;
    }
  }

  ReactDOM.render(<SlideshowContainer />,
                 document.getElementById('root'));