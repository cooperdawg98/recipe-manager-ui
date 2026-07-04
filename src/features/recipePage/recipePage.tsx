import { Box, Divider, Sheet, Stack, Typography } from "@mui/joy";
import { NavLink } from "react-router";
import Counter from "../counter/counter";

const recipePage = () => {
  console.log("Nav to recipe");
  return (
    <Stack
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"500px"}
    >
      <Sheet variant="soft">
        <Box padding={3}>
          <Typography typography={"h1"}>Test Recipe Page</Typography>
          <NavLink to={"/"}>Go Home</NavLink>
          <Divider />
          <Counter />
        </Box>
      </Sheet>
    </Stack>
  );
};

export default recipePage;
