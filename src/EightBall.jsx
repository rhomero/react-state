import { useState } from 'react';
import defAnswers from "./answers.json";
import { decision } from './random';
import './App.css'

function EightBall({ options = defAnswers }) {
  const [answer, setAnswer] = useState({
    msg:"Think of a Question",
    color:"black"
  })

  function handleClick(evt){
    setAnswer(decision(options));
  }

  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{backgroundColor: answer.color}}>
      <b>{answer.msg}</b>  
    </div>
  );
}

export default EightBall
