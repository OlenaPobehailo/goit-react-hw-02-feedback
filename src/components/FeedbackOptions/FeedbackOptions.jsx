import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <button type="button" name={options} onClick={onLeaveFeedback}>
        {options}
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
