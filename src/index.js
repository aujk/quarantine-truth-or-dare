import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import css from './index.scss';
import App from './App';
import backButton from "./BackArrow.png"
import * as serviceWorker from './serviceWorker';
import { Redirect, Link, BrowserRouter } from 'react-router-dom';

function TopBar(props) {
  
  return (
    <div className="topBar">
      <Link to='/game'>
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
      selectedOption: "Truth or Dare"
    };
  }

  onTruthOrDareClick(tF) {
    console.log("TF BUTTON CLICKED");

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

  onBackClick() {
    console.log("BACK BUTTON CLICKED");
      this.setState({
        statement: "BACK BUTTON CLICKED",
        selectedOption: "Dare"
      });
    this.setState({redirect: true});
  }

  render() {

    if (this.state.redirect) {
      return <Redirect push to="/index.js" />;
    }

    const statement = this.state.statement;
    const selectedOption = this.state.selectedOption;

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

ReactDOM.render(
  <BrowserRouter>
    <GamePage />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
