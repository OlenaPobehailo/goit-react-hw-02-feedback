import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <>
        <div className="Feedback">
          <h1>Please leave feedback</h1>
          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
          </ul>
        </div>
      </>
    );
  }
};
