import axios from "axios";
import { API_URL } from "../Constants";

const signUp = async (username: string, password: string): Promise<any> => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `${API_URL}/users`,
      data: { username, password },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const logIn = async (username: string, password: string): Promise<any> => {
  console.log(username, password);
  try {
    const { data } = await axios({
      method: "GET",
      // url: `${API_URL}/tasks`,
      url: `${API_URL}/users?username=${username}&password=${password}`,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { signUp, logIn };
