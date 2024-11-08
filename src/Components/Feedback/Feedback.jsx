import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul className={s.feedbackList}>
        <li className={s.listItem}>Good: {good}</li>
        <li className={s.listItem}>Neutral: {neutral}</li>
        <li className={s.listItem}>Bad: {bad}</li>
        <li className={s.listItem}>Total: {totalFeedback}</li>
        <li className={s.listItem}>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
