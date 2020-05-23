import React, { Component } from 'react';
import logo from "../assets/GameTitle.png";
import { Link } from 'react-router-dom';
import '../styles/home.scss'

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
    console.log(logo);

    return (
      <div className="mainContainer">
        <img src={require('../assets/GameTitle.png')} alt="Truth or Dare" className="logo"></img>
        <p>A <b>quarantine</b> compatible game. All truths and dares can be played with friends over Zoom.</p>
        Pick your poison:
        <br></br>
        <SelectionButton
          mode="Friendly"
          className="friendlyButton"
        />
        <br></br>
        <SelectionButton
          mode="Flirty"
          className="flirtyButton"
        />
        <br></br>
        <SelectionButton
          mode="Mixed"
          className="mixedButton"
        />
      </div>
    );
  }
}

export default HomePage;