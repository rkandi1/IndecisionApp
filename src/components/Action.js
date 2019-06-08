import React from 'react';

const Action = (props) => {
  const hasOptions = props.hasOptions;

  return (
    <div>
      <button
      className="big-button"
      disabled={!hasOptions}
      onClick={props.pickOne}
      >
      What should I do?
      </button>
    </div>
  );
};

export default Action;
