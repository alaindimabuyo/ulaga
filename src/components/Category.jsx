import React from "react";
import { mainMenu } from "../data/questions";
import { Outlet, Link } from "react-router-dom";
export const Category = () => {
  return (
    <>
      <h1>Choose a category</h1>
      {mainMenu.map((category) => (
        <div className="card">
          <button onClick={() => {}}>
            <p key={category.id}>
              <Link to={`questions/${category.id}`}>
                {category.id + 1}. {category.category}
              </Link>
            </p>
          </button>
        </div>
      ))}
    </>
  );
};
