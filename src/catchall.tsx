import { Stack, Typography } from "@mui/joy";
import { NavLink } from "react-router";

const CatchAll = () => {
  return (
    <Stack width={"200px"} height={"100px"} border={"1px"} gap={"8px"}>
      <Typography typography={"h1"} textColor={"primary.100"}>
        Oops! Page not found :(
      </Typography>
      <NavLink to={"/"}>Go Home</NavLink>
      <NavLink to={"/recipe"}>Go to recipe page</NavLink>
    </Stack>
  );
};

export default CatchAll;

// import { Provider } from "react-redux";
// import App from "./App";
// import { store } from "./app/store";

// export default function Component() {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// }
