import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-6f297/us-/api",

  ////http://localhost:5001/clone-6f297/us-/api
});

export default instance;
