import s from "./Options.module.css";

const Options = ({ updateFeedback, resetState, totalFeedback }) => {
  return (
    <div className={s.optionsList}>
      <button
        type="button"
        className={s.optionsBtn}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={s.optionsBtn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={s.optionsBtn}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>

      {totalFeedback != 0 && (
        <button type="button" className={s.optionsBtn} onClick={resetState}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
