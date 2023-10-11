import React, { useEffect } from "react";
import {
  AppBar,
  Box,
  Paper,
  Stack,
  Button,
  Toolbar,
  TextField,
  Typography,
} from "@mui/material";
// import "./MyDay.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// -----------------------------------

export default function MyDay() {
  console.log("in the MyDay function");
  const dispatch = useDispatch();
  const history = useHistory();
  const queHacer = useSelector((store) => store.queHacer);

  useEffect(() => {
    dispatch({ type: "GET_TASKS" });

  }, []);

  function AddTaskOnClick() {
    console.log("clicked add task");
    history.push("/AddTask");
  }
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained">Today</Button>
        <Button variant="contained" onClick={AddTaskOnClick}>
          Add Task
        </Button>
      </Toolbar>
    </AppBar>
  );
}
