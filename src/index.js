import React from 'react';
import ReactDOM from 'react-dom';
import {Slideshow} from './Slideshow';
import {Image_paths} from './Image_paths';

  class SlideshowContainer extends React.Component {
    
    constructor(props) {
      super(props);

      this.state = {currentImage: 0};

      this.interval = null;

      this.nextImage = this.nextImage.bind(this);
    }

    nextImage() {
        let current = this.state.currentImage;
        let next    = ++current % Image_paths.length;
        this.setState({currentImage: next});
    }

    componentDidMount() {
        this.interval = setInterval(this.nextImage, 3000);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }
    
    render() {
        const src= Image_paths[this.state.currentImage];
        return <Slideshow src={src}/>;
    }
  }

  ReactDOM.render(<SlideshowContainer />,
                 document.getElementById('root'));