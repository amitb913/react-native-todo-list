import axios from "axios";
import { API_URL } from "../Constants";

const getTasks = async (id: string): Promise<any> => {
  try {
    const { data } = await axios({
      method: "GET",
      url: `${API_URL}/tasks?id=${id}`,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const addTask = async (id: string, taskName: string): Promise<any> => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `${API_URL}/tasks`,
      data: { id, taskName },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const editTask = async (id: string, taskName: string): Promise<any> => {
  // provide taskId, not userId
  try {
    const { data } = await axios({
      method: "PUT",
      url: `${API_URL}/tasks`,
      data: { id, taskName },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const removeTask = async (id: string): Promise<any> => {
  // provide taskId, not userId
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `${API_URL}/tasks`,
      data: { id },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};


export { getTasks, addTask, editTask, removeTask };
