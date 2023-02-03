import axios from "axios";

export const downloadExampleTasks = async () => {
  try {
    const response = await axios.get("/todos-list-react/exampleTasks.json");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
