import React from 'react';

export class Slideshow extends React.Component {
    render() {
      const src = this.props.src;
      return(
        <div>
          <h1>Quiz Crazy</h1>
          <img src={src} alt="" />
        </div>
      );
    }
}