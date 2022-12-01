import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mainMenu } from "../data/questions";
import { Outlet, Link } from "react-router-dom";
import Modal from "./Modal";

const Questions = (props) => {
  let { id } = useParams();

  const [count, setCount] = React.useState(0);
  const [pageID, setPageID] = React.useState(Number(id));
  const intervalRef = useRef(null);
  const [timer, setTimer] = React.useState("05");
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [isCorect, setIsCorrect] = useState(false);

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

  const toggleModal = (correct) => {
    setModalIsOpen(!isModalOpen);
    setIsCorrect(correct);
  };

  const startTimer = (deadline) => {
    let { total, seconds } = getTimerRemaining(deadline);
    if (total >= 0) {
      setTimer(seconds > 9 ? seconds : "0" + seconds);
    } else {
      clearInterval(intervalRef.current);
    }
  };

  const clearTimer = (endtime) => {
    setTimer("5");
    if (intervalRef.current) clearInterval(intervalRef.current);

    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    intervalRef.current = id;
  };

  const getDeadlineTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 5);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadlineTime());
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const setNextQuestion = (questions) => {
    setTimer();
    if (count < questions.length) {
      setCount(count + 1);
    } else {
      setCount(0);
      setPageID(pageID + 1);
    }
  };

  const alertMessage = (correct) => {
    if (correct === true) {
      alert("CORRECT!!");
    } else {
      alert("WRONG!!");
    }
  };

  return (
    <>
      {isModalOpen && <Modal onRequestClose={toggleModal} correct={isCorect} />}
      <div className="header-container">
        <div className="image">
          <Link to={`/`}>
            <p style={{ color: "white" }}>Back to Categories</p>{" "}
          </Link>
        </div>
        <div className="image">
          <img
            src={mainMenu[pageID].questions[count].image}
            alt="Logo"
            width={800}
          />
        </div>
        <div className="timer image">{timer}</div>
      </div>
      <div className="question-container">
        <div className="header">
          <h3>{mainMenu[pageID].questions[count].question}</h3>
        </div>
        <div className="answers-container">
          {mainMenu[pageID].questions[count].answers.map((answer) => (
            <div className="answers">
              <button
                className="answer-button"
                onClick={() => toggleModal(answer.correct)}
              >
                {answer.image && (
                  <img src={answer.image} alt="Logo" width={150} />
                )}
                <h3 className="answer-text">{answer.answer}</h3>
              </button>
            </div>
          ))}
        </div>
        <div>
          <button
            onClick={() => setNextQuestion(mainMenu[pageID].questions[count])}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Questions;
