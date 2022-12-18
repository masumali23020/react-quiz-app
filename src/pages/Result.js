import _ from "lodash";
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Analysis from '../components/Analysis';
import Summary from '../components/Summary';
import useAnswerList from '../hooks/useAnswerList';

const Result = () => {

  const { id } = useParams();
  const location = useLocation();
 

const qna = location.state

 

  const { loading, error, answers } = useAnswerList(id);

  function calculate() {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  }

  const userScore = calculate();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}

      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}

export default Result