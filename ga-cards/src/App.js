import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import {Link} from 'react-router';
import './index.css';
import dotenv from 'dotenv';

dotenv.config({silent:true});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">

          <header className="navbar">
            <h1 className="pull-left">Cards Against Assembly</h1>
          </header>

          <nav className="tabs">
            <li><IndexLink to="/" activeClassName="active" className="link">Home</IndexLink></li>
            <li><Link to="/addCard" activeClassName="active" className="link">Add a New Card</Link></li>
            <li><Link to="/about" activeClassName="active" className="link">About</Link></li>
          </nav>
          <div className="content">
            {this.props.children}
          </div>

          <footer>
            <p>Made with <span className="heart">♥︎</span> at General Assembly</p>
          </footer>

        </div>
      </div>
    );
  }
}

export default App;
