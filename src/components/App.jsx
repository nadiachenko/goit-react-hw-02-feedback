
import { Component } from "react"
import { FeedbackOptions } from "components/FeedbackOptions"
import { Statistics } from "components/Statistics"
import { Section } from "components/Section"
import { Notification } from "components/Notification"


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  onLeaveFeedback = (e) => {
    const feedbackType = e.target.name;
    this.setState(prevState => {
      return {
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  }

  options = ["good", "neutral", "bad"]

  countTotalFeedback = () => {
    const { bad, good, neutral } = this.state
    return neutral + bad + good;
  }

  countPositiveFeedbackPercentage = () => {
    const { bad, good, neutral } = this.state
    const total = neutral + bad + good;
    return Math.round(good / total * 100);
  }

  render() {
    const { bad, good, neutral } = this.state
    return (
      <>
        <Section>
          <FeedbackOptions options={this.options} onLeaveFeedback={this.onLeaveFeedback} />
          {(bad || good || neutral) ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            /> :
            <Notification message="There is no feedback" />}
        </Section>
      </>);
  }
}
