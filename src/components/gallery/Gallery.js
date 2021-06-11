import React, { Component } from 'react';
import strings from '../gallery/Gallery.locale';

class Gallery extends Component {

  render() {
    strings.setLanguage(this.props.lang);
    return (
        <div>
          <h2>Gallery pizze</h2>
          <p> { strings.ciao } </p>
        </div>
    );
  }
}

export default Gallery;