import React, { Component } from 'react';
import strings from '../home/Home.locale';

class Home extends Component {

  render() {
    strings.setLanguage(this.props.lang);
    return (
      <div>
        <h2>Home</h2>
        <p>
          {strings.ciao}
        </p>
      </div>
    );
  }
}

export default Home;