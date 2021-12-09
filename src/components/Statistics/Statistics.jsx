import Section from "../Section/Section";
import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total === 0 && <Notification message="There is no feedback" />}
      {total > 0 && (
        <Section title="Statistics">
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {Math.round(positivePercentage)}%</p>
        </Section>
      )}
    </>
  );
};

export default Statistics;
