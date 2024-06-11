import axios from 'axios';

const API_URL = "http://localhost:3002"


const addComment = async (_id, comment) => {
    const token = localStorage.getItem("token")
    const response = await axios.post(API_URL + "/comments/postId/" + _id, {comment}, {
        headers: {
          Authorization: token
        }
      });
      
    return response.data;
};

const commentsService = {
    addComment
};

export default commentsService;