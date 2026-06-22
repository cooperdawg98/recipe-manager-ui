import { Box, Typography } from "@mui/joy";
import { NavLink } from "react-router";

const recipePage = () => {
  console.log("Nav to recipe");
  return (
    <Box width={"200px"} height={"100px"} border={"1px"}>
      <Typography typography={"h1"} textColor={"primary.100"}>
        Test Recipe Page
      </Typography>
      <NavLink to={"/"}>Go Home</NavLink>
    </Box>
  );
};

export default recipePage;
