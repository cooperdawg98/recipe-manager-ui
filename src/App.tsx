import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Stack, Typography } from "@mui/joy";
import { NavLink } from "react-router";
import Counter from "./features/counter/counter";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <Provider store={store}>
      <Stack
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"500px"}
      >
        <Stack direction={"row"} gap={"16px"}>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </Stack>
        <Typography typography={"h1"} textColor={"primary.100"}>
          Vite + React
        </Typography>
        <Stack className="card" justifyContent={"center"} padding={"8px"}>
          <Counter />
          <Typography typography={"h5"} textColor={"primary.100"}>
            The current time is {new Date(currentTime * 1000).toLocaleString()}.
          </Typography>
        </Stack>
        <NavLink to={"/recipe"}>Go to Recipe page</NavLink>
        <NavLink to={"/recipes"}>Go to Recipe page 2</NavLink>
      </Stack>
    </Provider>
  );
}

export default App;
