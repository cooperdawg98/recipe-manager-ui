import { Box, Typography } from "@mui/joy";
import { NavLink } from "react-router";

const RecipePage2 = () => {
  console.log("Nav to recipe");
  return (
    <Box width={"200px"} height={"100px"} border={"1px"}>
      <Typography typography={"h1"} textColor={"primary.100"}>
        Test Recipe Page 2
      </Typography>
      <NavLink to={"/"}>Go Home</NavLink>
    </Box>
  );
};

export default RecipePage2;
