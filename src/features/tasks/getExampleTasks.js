import axios from "axios";

export const fetchExampleTasks = async () => {
  try {
    const response = await axios.get("/todos-list-react/exampleTasks.json");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
