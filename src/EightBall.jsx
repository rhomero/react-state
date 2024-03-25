import { useState } from 'react';
import defAnswers from "./answers.json";
import { decision } from './random';
import './EightBall.css'

function EightBall({ choice = defAnswers }) {
  const [answer, setAnswer] = useState({
    msg:"Think of a Question",
    color:"black"
  });

  function handleClick(evt){
    setAnswer(prevAnswer => decision(choice));
  }

  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{backgroundColor: answer.color }}>
      <b>{answer.msg}</b>  
    </div>
  );
}

export default EightBall
