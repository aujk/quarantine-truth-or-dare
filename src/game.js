import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import css from './index.scss';
import App from './App';
import backButton from "./BackArrow.png"
import * as serviceWorker from './serviceWorker';

function SelectionButton(props) {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.category}
    </button>
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
        <SelectionButton/>
      </div>

    );
  }
}

ReactDOM.render(
  <HomePage />,
  document.getElementById('game')
);