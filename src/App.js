import { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.jsx";
import Statictics from "./components/Statistics/Statistics.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    let percents = 0;
    percents = (100 * good) / this.countTotalFeedback();

    if (isNaN(percents)) {
      return (percents = 0);
    }

    if (percents >= 100) {
      return (percents = 100);
    }

    return percents;
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    return (
      <section>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <Statictics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </section>
    );
  }
}

export default App;
