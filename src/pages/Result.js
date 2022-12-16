import _ from "lodash";
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Analysis from '../components/Analysis';
import Summary from '../components/Summary';
import useAnswerList from '../hooks/useAnswerList';

const Result = () => {


  const { id } = useParams();
  const location = useLocation();
const { state } = location;
  const { qna } = state;

  const { loading, error, answers } = useAnswerList(id);
  
  function calculate(){
    let score = 0;
    answers.forEach((question, index1) => {
    let correctIndex = [],
    checkedIndex = [];
    question.options.forEach((option, index2) =>{
      if(option.correct) correctIndex.push(index2);
      if(qna[index1].options[index2].checked){
        checkedIndex.push(index2);
        option.checked = true;
      }
    })

    if(_.isEqual(correctIndex, checkedIndex)){
      score += 5;
    }
    })
    return score

  }

  const userScore = calculate()


  return (
    <>
    {loading && <div> loading..... </div>}
    {error && <div> There is an Erro</div>}
    {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length}  />
          <Analysis answers={answers} />
        </>
      )}
 
    </>
  )
}

export default Result