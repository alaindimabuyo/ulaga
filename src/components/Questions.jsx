import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mainMenu } from "../data/questions";
import { Outlet, Link } from "react-router-dom";

const Questions = (props) => {
  let { id } = useParams();

  const [count, setCount] = React.useState(0);
  const [pageID, setPageID] = React.useState(Number(id));
  const intervalRef = useRef(null);
  const [timer, setTimer] = React.useState("0");
  const getTimerRemaining = (endtime) => {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (deadline) => {
    let { total, seconds } = getTimerRemaining(deadline);
    if (total >= 0) {
      setTimer(seconds > 9 ? seconds : "0" + seconds);
    } else {
      clearInterval(intervalRef.current);
      alert("Time is up! The correct answer is");
    }
  };
  const clearTimer = (endtime) => {
    setTimer("30");
    if (intervalRef.current) clearInterval(intervalRef.current);

    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    intervalRef.current = id;
  };

  const getDeadlineTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 30);
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadlineTime());
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const setNextQuestion = () => {
    setTimer();
    if (count < 4) {
      setCount(count + 1);
    } else {
      setCount(0);
      setPageID(pageID + 1);
    }
  };
  console.log("COUNTER", count, pageID);

  const alertMessage = (correct) => {
    if (correct === true) {
      alert("CORRECT!!");
    } else {
      alert("WRONG!!");
    }
  };

  return (
    <div className="question-container">
      <div className="timer">{timer}</div>

      <div className="image">
        <img
          src={mainMenu[pageID].questions[count].image}
          alt="Logo"
          width={550}
        />
      </div>
      <div className="header">
        <h3>{mainMenu[pageID].questions[count].question}</h3>
      </div>
      <div className="answers-container">
        {mainMenu[pageID].questions[count].answers.map((answer) => (
          <div className="answers">
            <button
              className="answer-button"
              onClick={() => alertMessage(answer.correct)}>
              <h3 className="answer-text">{answer.answer}</h3>
            </button>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => setNextQuestion()}>Submit</button>
      </div>

      {/* {count === 5 && (
        <Link to={`/`}>
          <p>Back to Categories</p>{" "}
        </Link>
      )} */}
    </div>
  );
};

export default Questions;
