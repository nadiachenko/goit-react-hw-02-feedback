import {Component} from "react"
import {FeedbackOptions} from "components/counter/FeedbackOptions"
import {Statistics} from "components/counter/Statistics"
import {Section} from "components/counter/Section"
import {Notification} from "components/counter/Notification"

export class Counter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      }
   addFeedback = (e) => {
   const feedbackType = e.target.name;
       this.setState(prevState =>{
           return { 
            [feedbackType]: prevState[feedbackType] + 1,        
            };   
       });     
   }

   countTotalFeedback= () => {
       return this.state.neutral +this.state.bad +this.state.good;
   }

   countPositiveFeedbackPercentage = () => {
    const total = this.state.neutral +this.state.bad +this.state.good;
       return Math.round(this.state.good/total *100);
   }

   render() {
       return (
        <>
            
            <Section>
          <FeedbackOptions addFeedback={this.addFeedback} />
          {(this.state.bad || this.state.good || this.state.neutral)
          ? <Statistics 
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          /> :
          <Notification message="There is no feedback"/>}
        </Section>
    
        </>);
   }
} 
 