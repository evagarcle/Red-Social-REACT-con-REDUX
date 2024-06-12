import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { getAll, getById, updatePost } from '../../features/posts/postsSlice';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";


const UpdatePost = () => {
  const [updatedData, setupdatedData] = useState({
    title:'',
    body:''
    })
    const {title, body} = updatedData
    const { _id } = useParams();
    const {isSuccess,isError,token,user, userId} = useSelector((state)=>state.auth)
    const {isLoading} = useSelector((state) => state.posts)
    const dispatch = useDispatch();
    const navigate = useNavigate()


useEffect(() => {
    dispatch(getById(_id ))
}, [])

    const onChange = (e)=>{
        setupdatedData({
          ...updatedData,
          [e.target.name]:e.target.value,
      })
  }

    if (isLoading) {
        return <h1>Cargando...</h1>
    }

    const onSubmit = async (e) => {
      e.preventDefault()
      await dispatch(updatePost({updatedData, _id}))
      navigate("/profile")
  }
    return (
        <form onSubmit={onSubmit}>
            <h1>Edit post</h1>
            <input type="text" name='title' value={title} placeholder='Title' onChange={onChange} />
            <input type="texarea" name='body' value={body} placeholder='Body' onChange={onChange} />
            <button type='submit'>Update</button>
        </form>
    )
}

export default UpdatePost
