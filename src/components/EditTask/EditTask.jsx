import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function EditTask(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  let newTaskName = "";
  // const taskReducer = useSelector(store => store.taskReducer);

  //this is where we are currently holding the new name value 
  const EditTaskStore = useSelector((store) => store.EditTaskStore);
  console.log("this is edit task store", EditTaskStore);

  const taskName = EditTaskStore.task_name;
  console.log("this is edit task store .taskName- doing new value input", taskName);

  const selectedTaskId = useSelector(store => store.selectedTaskId);
  console.log('this is selected task id store:', selectedTaskId);
  // console.log('this is taskReducer', taskReducer);
  // const id = useSelector(store => store.taskReducer.id);
  // console.log('this is id', id);

  // console.log('this is id', id);

  function handleChange(event) {
    dispatch({
      type: "EDIT_TASK_ONCHANGE",
      payload: { property: "task_name", value: event.target.value },
    });
  }
  // function handleSubmit(event) {
  //     event.preventDefault();

  //     axios.put(`/api/tasks/${task}`, taskReducer)
  //     .then(response => {
  //         dispatch({ type: "CLEAR_EDIT_TASK" })
  //         history.push('/MyDay');
  //     })
  //     .catch(error => {
  //         console.log('error on edit PUT:', error);
  //     })
  // }

  function handleSubmit(event) {
    event.preventDefault();
    // axios.put(`/api/tasks/${props.match.params.id}`, EditTaskStore)
   
    axios.put(`/api/tasks/${selectedTaskId}`)
    .then(response => {
        console.log('response from PUT request:', response);
        // dispatch({ type: 'CLEAR_EDIT_TASK' });
        history.push('/tasklist');
    })
    .catch(error => {
        console.log('error in PUT request', error);
    });
    dispatch({ type: "CLEAR_EDIT_TASK" })
    history.push("/MyDay");
  }
  return (
    <>
      <h2>This is an edit page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task_name"
          defaultValue={taskName}
        //   onChange={(event) => handleChange(event)}
        onChange={handleChange}
        //   placeholder="Task Name"
          // placeholder={taskReducer.task_name}
          // editStudent IS the reducer state object
          // We will use it to show the current info for the student
          // in the fields, where a user can change them!
          // value={taskReducer.task_name}
          // value={newTaskName}
        //   value={EditTaskStore}
        />

        {/* When I click this, I want to:
                Not refresh the page! (it will try by default)
                Get the info from the reducer
                And PUT it to the server
                And decide what the user sees next, to give them confidence it worked!     
            */}
        {/* <input type="submit" value="Update Task" /> */}
        <button type="submit" onClick={handleSubmit}>Save</button>
      </form>
    </>
  );
}
