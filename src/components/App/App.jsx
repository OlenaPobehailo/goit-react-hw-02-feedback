import React, { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions ';
import { Section } from 'components/Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // handleNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // handleBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  handleFeedback = event => {
    const name = event.target.name;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
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
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options="good"
            onLeaveFeedback={this.handleFeedback}
          />
          <FeedbackOptions
            options="neutral"
            onLeaveFeedback={this.handleFeedback}
          />
          <FeedbackOptions
            options="bad"
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title='Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            percent={total ? this.countPositiveFeedbackPercentage() : 0}
          />
        </Section>
      </div>
    );
  }
}
