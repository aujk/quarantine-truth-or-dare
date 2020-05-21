import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import * as serviceWorker from '../serviceWorker';
import { Redirect, Link, BrowserRouter } from 'react-router-dom';

function SelectionButton(props) {
  return (
    <Link to={{
      pathname: '/game',
      state: {
        mode: props.mode,
      }
    }}>
      <button className={props.className}>
        {props.mode}
      </button>
    </Link>
  );
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <SelectionButton
          mode="Friendly"
          className="friendlyButton"
        />
        <SelectionButton
          mode="Flirty"
          className="flirtyButton"
        />
        <SelectionButton
          mode="Mixed"
          className="mixedButton"
        />
      </div>

    );
  }
}

export default HomePage;