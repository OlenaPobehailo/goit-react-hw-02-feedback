import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({
  onHandleGood,
  onHandleNeutral,
  onHandleBad,
}) => (
  <>
    <h1 className={css.title}>Please leave feedback</h1>
    <button className={css.button} type="button" onClick={onHandleGood}>
      Good
    </button>
    <button className={css.button} type="button" onClick={onHandleNeutral}>
      Neutral
    </button>
    <button className={css.button} type="button" onClick={onHandleBad}>
      Bad
    </button>
  </>
);
