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
    <>
      {mainMenu[pageID].questions[count].question}

      <button onClick={() => setNextQuestion()}>Submit</button>

      {/* {count === 5 && (
        <Link to={`/`}>
          <p>Back to Categories</p>{" "}
        </Link>
      )} */}
    </>
  );
};

export default Questions;
