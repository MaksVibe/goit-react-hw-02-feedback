const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;

// import { Component } from "react";
// import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
// import Statictics from "../Statistics/Statistics";

// class Section extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     let total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;

//     let percents = 0;
//     percents = (100 * good) / this.countTotalFeedback();

//     if (isNaN(percents)) {
//       return (percents = 0);
//     }

//     if (percents >= 100) {
//       return (percents = 100);
//     }

//     return percents;
//   };

//   onLeaveFeedback = e => {
//     const { good, neutral, bad } = this.state;
//     this.setState(() => {
//       if (e.target.textContent === "Good") return { good: good + 1 };
//       if (e.target.textContent === "Neutral") return { neutral: neutral + 1 };
//       if (e.target.textContent === "Bad") return { bad: bad + 1 };
//     });
//   };

//   render() {
//     return (
//       <section>
//         <h1>Please leave feedback</h1>
//         <FeedbackOptions
//           options={this.state}
//           onLeaveFeedback={this.onLeaveFeedback()}
//         />

//         <Statictics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//         />
//       </section>
//     );
//   }
// }

// export default Section;
