import { Component } from "react";
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

  handleChange = e => {
    const { good, neutral, bad } = this.state;
    this.setState(() => {
      if (e.target.textContent === "Good") return { good: good + 1 };
      if (e.target.textContent === "Neutral") return { neutral: neutral + 1 };
      if (e.target.textContent === "Bad") return { bad: bad + 1 };
    });
  };

  render() {
    return (
      <section>
        <h1>Please leave feedback</h1>
        <button onClick={this.handleChange} type="button">
          Good
        </button>
        <button onClick={this.handleChange} type="button">
          Neutral
        </button>
        <button onClick={this.handleChange} type="button">
          Bad
        </button>
        <h2>Statistics</h2>
        {this.countTotalFeedback() === 0 && <h3>No feedback given</h3>}
        {this.countTotalFeedback() > 0 && (
          <Statictics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </section>
    );
  }
}

export default App;
