import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mainMenu } from "../data/questions";
import { Outlet, Link } from "react-router-dom";
import Modal from "./Modal";

const Questions = (props) => {
  let { id } = useParams();

  const [count, setCount] = React.useState(0);
  const [pageID, setPageID] = React.useState(Number(id));
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [isCorect, setIsCorrect] = useState(false);

  const [timeLeft, setTimeLeft] = useState(30);

  const toggleModal = (correct) => {
    setModalIsOpen(!isModalOpen);
    setIsCorrect(correct);
  };

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // useEffect(() => {
  //   if
  // },[])
  const setNextQuestion = (questions) => {
    setCount(count + 1);
    console.log("qUESTIONS", questions.length - 1, count);
    if (questions.length - 1 === count) {
      setCount(0);
      setPageID(pageID + 1);
    }
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          onRequestClose={toggleModal}
          correct={isCorect}
        />
      )}
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
        <div className="timer image">{timeLeft}</div>
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
                onClick={() => toggleModal(answer.correct)}>
                {answer.image && (
                  <img
                    src={answer.image}
                    alt="Logo"
                    width={150}
                  />
                )}
                <h3 className="answer-text">{answer.answer}</h3>
              </button>
            </div>
          ))}
        </div>
        <div>
          <button onClick={() => setNextQuestion(mainMenu[pageID].questions)}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Questions;
