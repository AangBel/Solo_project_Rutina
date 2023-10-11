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

// import "./MyDay.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// -----------------------------------

export default function MyDay() {
  console.log("in the MyDay function");
  const dispatch = useDispatch();
  const history = useHistory();
  const taskStore = useSelector((store) => store.taskStore);
  console.log('this is the taskStore', taskStore);
  
  useEffect(() => {
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
            {/* container spacing={8} marginTop="10px" marginBottom="80px" */}
            {/* {taskStore.map((task) => ( */}
              <Grid>
                {/* item xs={12} sm={6} md={4} lg={3} key={movie.id} */}
                <Card>
                  {/* sx={{ boxShadow: "5px 10px #f5f5f5" }} */}
                  <CardActionArea>
                    {/* key={movie.id} */}
                    <CardContent>
                      <Typography
                      // fontFamily="Reem Kufi"
                      // color="#2c698d"
                      // variant="h4"
                      >
                        {/* {movie.title} */}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            {/* ))} */}
          </Grid>
        </section>
      </Box>
    </>
  );
}
