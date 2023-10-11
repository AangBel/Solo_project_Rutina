import React from "react";
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

export default function MyDay() {
  console.log("in the MyDay function");

  return (
    <div className="container">
      <Box sx={{ padding: 2, width: 500, maxWidth: "100%" }}>
        <Paper elevation={8} sx={{ width: "800px" }}>
          <AppBar position="static">
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button variant="contained">Today</Button>
              <Button variant="contained">Add Task</Button>
            </Toolbar>
          </AppBar>
          <Box sx={{ padding: 2 }}>
            <Typography variant="h6">Task Name</Typography>

            <TextField
              label="Task Name"
              id="taskNameInput"
              variant="outlined"
              type="text"
              size="normal"
            />

            <Typography variant="h6">Start Time:</Typography>
            <TextField
              id="startTimeInput"
              variant="outlined"
              type="datetime-local"
              size="small"
            />

            <Typography variant="h6">End Time:</Typography>
            <TextField
              id="endTimeInput"
              variant="outlined"
              type="datetime-local"
              size="small"
            />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              spacing={1}
            >
              <Button className="AddTaskButton" variant="contained">Add Task To Routine</Button>
              <Button variant="contained">Cancel</Button>
            </Stack>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
