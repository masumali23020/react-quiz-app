import React from 'react';
import classes from "../style/Answers.module.css";
import CheckBox from './CheckBox';

const Answeres = ({handleChange, options= []}) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <CheckBox
          key={index}
          className={classes.answer}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
}

export default Answeres