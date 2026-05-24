import { Box, Button, Typography } from "@mui/joy";
import { decrement, increment } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Counter = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return(
        <Box>
            <Box>
                <Button onClick={() => dispatch(increment())} >Increment</Button>
                <Typography>{count}</Typography>
                <Button onClick={() => dispatch(decrement())} >Decrement</Button>
            </Box>
        </Box>
    );
}; 

export default Counter;