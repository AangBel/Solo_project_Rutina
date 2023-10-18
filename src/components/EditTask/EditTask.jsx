import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function EditTask(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  //this is where we are currently holding the new name value
  const EditTaskStore = useSelector((store) => store.EditTaskStore);
  console.log("this is edit task store", EditTaskStore);
  const { taskName, task_time_start, task_time_end } = EditTaskStore;

  //   const taskName = EditTaskStore.task_name;
  //   console.log(
  //     "this is edit task store .taskName- doing new value input",
  //     taskName
  //   );

  //   const task_time_start = EditTaskStore.task_time_start;
  //   console.log(
  //     "this is edit task store start time - doing new value input",
  //     task_time_start
  //   );

  //   const task_time_end = EditTaskStore.task_time_end;
  //   console.log(
  //     "this is edit task store end time - doing new value input",
  //     task_time_end
  //   );

  const selectedTaskId = useSelector((store) => store.selectedTaskId);
  console.log("this is selected task id store:", selectedTaskId);

  //   function handleChange(event) {
  //     dispatch({
  //       type: "EDIT_TASK_ONCHANGE",
  //       payload: { property: "task_name", value: event.target.value },
  //     });
  //   }

  function handleChange(event) {
    // const { name, value } = event.target;
    dispatch({
      type: "EDIT_TASK_ONCHANGE",
      payload: {
        // ...EditTaskStore,
        task_name: event.target.value,
        task_time_start: event.target.start_time.value,
        task_time_end: event.target.end_time.value,
      },
    });
  }
  //   payload: {
  //     task_name: event.target.value,
  //     task_time_start: event.target.start_time.value,
  //     task_time_end: event.target.end_time.value,
  //   },

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .put(`/api/tasks/${selectedTaskId}`, EditTaskStore)
      .then((response) => {
        console.log("response from PUT request:", response);
        dispatch({ type: "CLEAR_EDIT_TASK" });
        history.push("/MyDay");
      })
      .catch((error) => {
        console.log("error in PUT request", error);
      });
    dispatch({ type: "CLEAR_EDIT_TASK" });
    history.push("/MyDay");
  }
  return (
    <>
      <h2>Edit Task:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskName"
          value={taskName}
          //   defaultValue={taskName}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="task_time_start"
          //   defaultValue={task_time_start}
          value={task_time_start}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="task_time_end"
          //   defaultValue={task_time_end}
          value={task_time_end}
          onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit} className="learn-more">
          Save
        </button>
      </form>
    </>
  );
}
