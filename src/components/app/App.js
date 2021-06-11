import './App.css';
import strings from './App.locale';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../home/Home';
import Gallery from '../gallery/Gallery';

class App extends React.Component {

  defaultLanguage = "en";

  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
    this.state = { language: this.defaultLanguage };
    strings.setLanguage(this.defaultLanguage);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>
            { strings.how }
          </p>

         <select onChange={this.change}>
           <option value = "es">Español</option>
           <option value = "en">English</option>
           <option value = "it">Italian</option>
         </select>

          <Router>
            <ul>
              <li ><Link to="/home">Home</Link></li>
            </ul>
            <ul>
              <li><Link to="/gallery">Gallery pizze</Link></li>
            </ul>


            <Switch>
              <Route path="/home">
                <Home lang={this.state.language} />
              </Route>
              <Route path="/gallery">
                <Gallery lang={this.state.language} />
              </Route>
            </Switch>
          </Router>
        </header>
      </div>
    );
  }

  change(event) {
    let selectedLanguage = event.target.value;
    this.setState({language: selectedLanguage});
    strings.setLanguage(selectedLanguage)
  }

}

export default App;
