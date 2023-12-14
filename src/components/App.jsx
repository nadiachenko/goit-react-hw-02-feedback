
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
    const total = this.state.neutral + this.state.bad + this.state.good;
    return Math.round(this.state.good / total * 100);
  }

  render() {
    return (
      <>
        <Section>
          <FeedbackOptions options={this.options} onLeaveFeedback={this.onLeaveFeedback} />
          {(this.state.bad || this.state.good || this.state.neutral)
            ? <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            /> :
            <Notification message="There is no feedback" />}
        </Section>
      </>);
  }
}
