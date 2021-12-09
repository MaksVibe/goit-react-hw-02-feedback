import Section from "../Section/Section";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      {Object.keys(options).map(option => (
        <button
          onClick={() => onLeaveFeedback(option)}
          type="button"
          key={option}
        >
          {option}
        </button>
      ))}
    </Section>
  );
};

export default FeedbackOptions;
