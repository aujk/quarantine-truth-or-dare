import React, { Component } from 'react';
import backButton from "../assets/BackArrow.png"
import { Redirect, Link } from 'react-router-dom';
import gameList from '../data/gameList.json'

import '../styles/game.scss';

function TopBar(props) {
  return (
    <div className="topBar" id={props.mode}>
      <Link to='/home'>
        <img src={backButton} alt="Back"/>
      </Link>
      You're playing Truth or Dare in <b>{props.mode}</b> mode.
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

  getStatement(mode, selectedOption) {
    if (mode === "Mixed") {
      var willBeFlirty = Math.floor(Math.random() * 11);
      if ((willBeFlirty % 2) === 0) {
        mode = "Flirty";
      }
      else {
        mode = "Friendly";
      }
    }

    if (mode === "Flirty") {
      if (selectedOption === "Truth") {
        return gameList.FlirtyTruths;
      }
      else {
        return gameList.FlirtyDares;
      }
    }
    else {
      if (selectedOption === "Truth") {
        return gameList.FriendlyTruths;
      }
      else {
        return gameList.FriendlyDares;
      }
    }
  }

  onTruthOrDareClick(tF, mode) {
    if (tF === "Truth") {
      const truths = this.getStatement(mode, tF)
      var truth = truths[Math.floor(Math.random() * truths.length)];
      this.setState({
        statement: truth,
        selectedOption: "Truth"
      });
    }
    else if (tF === "Dare") {
      const dares = this.getStatement(mode, tF)
      var dare = dares[Math.floor(Math.random() * dares.length)];
      this.setState({
        statement: dare,
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
          mode={mode}
        />
        <div className="optionsContainer">
          Select Truth or Dare:
          <br></br>
          <TruthOrDareButton 
            onClick={() => this.onTruthOrDareClick("Truth", mode)}
            choice="Truth"
            className="truthButton"
          />
          <br></br>
          <TruthOrDareButton 
            onClick={() => this.onTruthOrDareClick("Dare", mode)}
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
