import React from 'react';

const Options = (props) => {
  let options = props.currOptions;
  // In the maps function, we also have an index parameter that can pass in the posiion
  return(
    <div>
      <h3 className="widget-header"> Here Are Your Options </h3>
      {props.currOptions.length===0 && <p className="widget__message">Insert Some Tasks</p>}
      <ol className="options">
        {
          options.map((option, index)=> <Option
          key={option}
          optionText={option}
          handleRemoveOption={props.handleRemoveOption}
          />)
        }
      </ol>
    </div>
  )
};

const Option = (props) => {
  return (
      <li className="option">
      {props.optionText}
      <button
      className="button button--link"
      onClick={(e) => {
        props.handleRemoveOption(props.optionText);
      }}
      > Remove </button>
       </li>
  );
};

// This is a better option to use in order to debug
export default Options;
