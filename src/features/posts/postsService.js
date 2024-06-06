import axios from "axios";

const API_URL = "http://localhost:3002"

const getAll = async () => {
    const res = await axios.get(API_URL + "/posts");
    return res.data;
};

const getById = async (id) => {
    const res = await axios.get(API_URL + "/posts/" + id);
    return res.data;
  };
  

const postService = {
    getAll,
    getById
};

export default postService