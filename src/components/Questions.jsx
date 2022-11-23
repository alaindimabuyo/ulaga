import React from "react";
import { useParams } from "react-router-dom";
import { mainMenu } from "../data/questions";
import { Outlet, Link } from "react-router-dom";

const Questions = () => {
  let { id } = useParams();

  const [count, setCount] = React.useState(0);
  const [pageID, setPageID] = React.useState(Number(id));

  const setNextQuestion = () => {
    if (count < 4) {
      setCount(count + 1);
    } else {
      setCount(0);
      setPageID(pageID + 1);
    }
  };
  console.log("COUNTER", count, pageID);
  return (
    <div className="question-container">
      <div className="header">
        <h3>{mainMenu[pageID].questions[count].question}</h3>
      </div>
      <div className="answers-container">
        {mainMenu[pageID].questions[count].answers.map((answer) => (
          <div className="answers">
            <button className="answer-button" onClick={() => {}}>
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
