import axios from "axios";

const API_URL = "http://localhost:3002"

const getAll = async () => {
    const token = localStorage.getItem("token")
    console.log(token);
    const res = await axios.get(API_URL + "/posts", {
        headers: {
          Authorization: token 
        }
      });
    console.log(res.data);
    return res.data;
};

const getById = async (_id) => {
    const token = localStorage.getItem("token")
    const res = await axios.get(API_URL + "/posts/id/"+ _id,  {
        headers: {
          Authorization: token 
        }
      });
    return res.data;
  };
  

const postService = {
    getAll,
    getById
};

export default postService