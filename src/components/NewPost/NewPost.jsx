import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { create } from '../../features/posts/postsSlice';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const [newPostData, setNewPostData] = useState({
    title:'',
    body:''
    })
    const {title, body} = newPostData
    const {isSuccess,isError,token,user} = useSelector((state)=>state.auth)
    const {isLoading} = useSelector((state) => state.posts)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    

    useEffect(() => {
      
        if (user && user._id) {
          dispatch(create(user._id));
        }

        

    }, [isSuccess, isError,dispatch, user, token])

    const onChange = (e)=>{
      setNewPostData({
          ...newPostData,
          [e.target.name]:e.target.value,
      })
  }

    if (isLoading) {
        return <h1>Ready to create a new post?...</h1>
    }

    const onSubmit = (e) => {
      e.preventDefault()
      dispatch(create(newPostData))
      navigate("/profile")
  }
    return (
        <form onSubmit={onSubmit}>
            <h1>Create a new post</h1>
            <input type="text" name='title' value={title} placeholder='Title' onChange={onChange} />
            <input type="texarea" name='body' value={body} placeholder='Body' onChange={onChange} />
            <button type='submit'>Create</button>
        </form>
    )
}

export default NewPost