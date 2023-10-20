import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <button type="button" name={options} onClick={onLeaveFeedback}>
        {options}
      </button>
    </div>
  );
};

export default FeedbackOptions;
