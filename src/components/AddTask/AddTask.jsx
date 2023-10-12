import React from "react";
import {
  AppBar,
  Box,
  Paper,
  Stack,
  Button,
  Toolbar,
  Input,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";

const AddTask = () => {
  console.log("in the MyDay function");
  const history = useHistory();
  let dispatch = useDispatch();

//we don't want to use useState bc this is for local shenanigans... or do we?
  const [taskName, setTaskName] = useState([]);
  const [taskTimeStart, setTaskTimeStart] = useState([]);
  const [taskTimeEnd, setTaskTimeEnd] = useState([]);


  function addTaskEvent(event) {
    event.preventDefault();
    
    console.log("in the addTaskEvent function");
    const taskConst = {
      task_name: taskName,
      task_time_start: taskTimeStart,
      task_time_end: taskTimeEnd,
      status: false,
      userId: 1,
    };
    dispatch({
      type: "ADD_TASK",
      payload: taskConst,
    });
    history.push("/MyDay");
  }
  return (
    <div className="container">
      <Box sx={{ padding: 2, width: 500, maxWidth: "100%" }}>
        <Paper elevation={8} sx={{ width: "800px" }}>
          <Box sx={{ padding: 2 }}>
            <Typography variant="h6">Task Name</Typography>

            <Input
              label="Task Name"
              id="taskNameInput"
              variant="outlined"
              type="text"
              size="normal"
              onChange={(e) => setTaskName(e.target.value)}
            />

            <Typography variant="h6">Start Time:</Typography>
            <Input
              id="startTimeInput"
              variant="outlined"
              type="datetime-local"
              size="small"
              onChange={(e) => setTaskTimeStart(e.target.value)}
            />

            <Typography variant="h6">End Time:</Typography>
            <Input
              id="endTimeInput"
              variant="outlined"
              type="datetime-local"
              size="small"
              onChange={(e) => setTaskTimeEnd(e.target.value)}

            />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              spacing={1}
            >
              <Button
                className="AddTaskButton"
                variant="contained"
                onClick={addTaskEvent}
              >
                Add Task To Routine
              </Button>
              <Button variant="contained">Cancel</Button>
            </Stack>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
export default AddTask;