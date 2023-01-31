import axios from "axios";

const fetchExampleTasks = () => {
  axios
    .get("/todos-list-react/exampleTasks.json")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default fetchExampleTasks;
