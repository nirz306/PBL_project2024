import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, gameState, setGameState } = useContext(
    GameStateContext
    
  );

 

  const chooseOption = (option) => {
    setOptionChosen(option);
    check_Ans(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    document.getElementById("a").style.background="white";document.getElementById("a").style.color="black";
    document.getElementById("b").style.backgroundColor= "white" ;
    document.getElementById("c").style.backgroundColor= "white" ;
    document.getElementById("d").style.backgroundColor= "white" ;
    // document.getElementById("questions").style.background = "white";  document.getElementById("questions").style.color = "black";
    setCurrentQuestion(currentQuestion + 1);
  };

  const check_Ans = (option) =>{
    if (Questions[currentQuestion].asnwer == option) {
      console.log(option);
      console.log("correct answer");
      if(option == "optionA")  document.getElementById("a").style.backgroundColor= "green" ;
      if(option == "optionB")  document.getElementById("b").style.backgroundColor= "green" ;
      if(option == "optionC")  document.getElementById("c").style.backgroundColor= "green" ;
      if(option == "optionD")  document.getElementById("d").style.backgroundColor= "green" ;
    }
    else{
      console.log(option);
      console.log("wrong answer");
      if(option == "optionA")  document.getElementById("a").style.backgroundColor= "red" ;
      if(option == "optionB")  document.getElementById("b").style.backgroundColor= "red" ;
      if(option == "optionC")  document.getElementById("c").style.backgroundColor= "red" ;
      if(option == "optionD")  document.getElementById("d").style.backgroundColor= "red" ;
    }
  }

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h1 id="Ques">{Questions[currentQuestion].prompt}</h1>
      <div className="questions">

        <button id="a"
          onClick={() => {
            chooseOption("optionA");
            
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>

        <button id="b"
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>

        <button id="c"
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>

        <button id="d"
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;