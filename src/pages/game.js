import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import css from '../styles/game.scss';
import App from '../App';
import backButton from "../assets/BackArrow.png"
import * as serviceWorker from '../serviceWorker';
import { Redirect, Link, BrowserRouter } from 'react-router-dom';

function TopBar(props) {
  return (
    <div className="topBar">
      <Link to='/home'>
        <img src={backButton} alt="Back"/>
      </Link>
      You're playing Truth or Dare in <b>Flirty</b> mode.
    </div>
  );
}

function TruthOrDareButton(props) {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.choice}
    </button>
  );
}

function GameBox(props) {
  return (
    <div className="gameBox">
      <p>{props.statement}</p>
    </div>
  );
}

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statement: "Your Truth or Dare will appear here.",
      selectedOption: "Truth or Dare",
      mode: "Friendly",
    };
  }

  componentDidMount() {
    const { mode } = this.props.location.state;
    this.setState({
      mode: mode,
    });
  }

  onTruthOrDareClick(tF) {
    if (tF === "truth") {
      this.setState({
        statement: "OOF YOU CHOSE A TRUTH",
        selectedOption: "Truth"
      });
    }
    else if (tF === "dare") {
      this.setState({
        statement: "OH YEA BUDDY A DARE",
        selectedOption: "Dare"
      });
    }
  }

  render() {

    if (this.state.redirect) {
      return <Redirect push to="/index.js" />;
    }

    const statement = this.state.statement;
    const selectedOption = this.state.selectedOption;
    const mode = this.state.mode; 

    console.log("mode " + mode);

    return (
      <div className ="main">
        <TopBar
          onClick={() => this.onBackClick()}
        />
        <div className="optionsContainer">
          Select Truth or Dare:
          <br></br>
          <TruthOrDareButton 
            onClick={() => this.onTruthOrDareClick("truth")}
            choice="Truth"
            className="truthButton"
          />
          <br></br>
          <TruthOrDareButton 
            onClick={() => this.onTruthOrDareClick("dare")}
            choice="Dare"
            className="dareButton"
          />
          <br></br>
        </div>
        <div className="gameContainer">
          Your <b>{selectedOption}:</b>
          <br></br>
          <GameBox
            statement={statement}
          />
        </div>
      </div>
    );
  }




}

export default GamePage;
