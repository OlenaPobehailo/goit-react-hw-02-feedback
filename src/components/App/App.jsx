import React, { Component } from 'react';
import { Statistics } from 'components/Statisics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions ';

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
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    let total = this.countTotalFeedback();

    return (
      <div className="Feedback">
        <FeedbackOptions
          onHandleGood={this.handleGood}
          onHandleNeutral={this.handleNeutral}
          onHandleBad={this.handleBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          percent={total ? this.countPositiveFeedbackPercentage() : 0}
        />
      </div>
    );
  }
}
