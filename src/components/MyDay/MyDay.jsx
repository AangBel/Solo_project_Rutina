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
  Card,
  Grid,
  CardActionArea,
  CardContent,
} from "@mui/material";

import store from "../../redux/store";
// import "./MyDay.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// -----------------------------------

export default function MyDay() {
  console.log("in the MyDay function");
  const dispatch = useDispatch();
  const history = useHistory();

  const taskStore = useSelector((store) => store.taskStore);
  console.log("this is the taskStore", taskStore);

  useEffect(() => {
    // console.log("in useEffect");
    //OR
    // const action = { type: "GET_ZOO_ANIMALS" }; instead of dispatch get tasks
    // const action = {type: "GET_TASKS"}
    dispatch({ type: "GET_TASKS" });
  }, []);

  function AddTaskOnClick() {
    console.log("clicked add task");
    history.push("/AddTask");
  }
  return (
    <>
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

      <Box style={{ marginBottom: "90px", flexGrow: 1 }}>
        <section className="tasksClass">
          <Grid>
            <Card>
              <CardContent>
                {/* {taskStore.map((task) => (
                  <div key={task.id}>
                    <p>{task.task_name}</p>
                    <p>{task.task_time_start}</p>
                    <p>{task.task_time_end}</p>
                    <p>{task.status}</p>
                  </div>
                ))} */}
              </CardContent>
            </Card>
          </Grid>
        </section>
      </Box>
    </>
  );
}
