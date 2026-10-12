// import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavLink } from "react-router";
import Counter from "./features/counter/counter";

function App() {
  // const [currentTime, setCurrentTime] = useState(0);

  // Example of fetching data from flask backend
  // useEffect(() => {
  //   fetch("/api/time")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCurrentTime(data.time);
  //     });
  // }, []);

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex flex-col w-2xl h-full justify-center items-center">
        <div className="flex flex-row gap-4">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-gray-600">Recipe Manager</h1>
        <div className="flex flex-col w-full justify-center p-4">
          <Counter />
          {/* <h5 className="text-gray-600">
            The current time is {new Date(currentTime * 1000).toLocaleString()}.
          </h5> */}
        </div>
        <p className="text-center pb-4">
          This a test page, don't mind anything here. Go to recipe page for the
          current WIP recipe page. Recipe page 2 is another placeholder for
          testing routing. Also, recipe page design is currently for iphone
          ratio (~ 393x852), so use responsive design mode accordingly.
        </p>
        <NavLink
          className="text-blue-400 hover:text-amber-600 p-1 mb-3 border rounded-md w-50"
          to={"/recipe/test-recipe"}
        >
          Go to WIP Recipe page
        </NavLink>
        <NavLink
          className="text-blue-400 hover:text-amber-600 p-1 border rounded-md w-40"
          to={"/recipes"}
        >
          Go to Recipe page 2
        </NavLink>
      </div>
    </div>
  );
}

export default App;
