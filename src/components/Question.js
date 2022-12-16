import React from 'react';
import Answeres from "../components/Answeres";
import classes from "../style/Question.module.css";

const Question = ({answers =[]}) => {
  return answers.map((answer, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answeres input={false} options={answer.options} />
    </div>
  ));
}

export default Question