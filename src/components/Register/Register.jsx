import { useEffect, useState } from 'react'
import { register, reset } from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { notification } from 'antd'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        birthday:''
    })
    const {name,email,password, birthday} = formData
    const {isSuccess,message,isError} = useSelector((state)=>state.auth)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
      if(isSuccess){
        notification.success({
          message:"Success",
          description: message
        })
        navigate("/login")

      }
      if(isError){
        notification.error({
          message: "Error!!!",
          description:message
        })
        navigate("/login")

      }
      dispatch(reset())
    }, [isSuccess, message, isError])

    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(register(formData))
    }
  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} placeholder='Your name' onChange={onChange} />
        <input type="email" name="email" value={email} placeholder='Your email' onChange={onChange}/>
        <input type="password" name="password" value={password} placeholder='Your password' onChange={onChange}/>
        <input type="date" name="birthday" value={birthday} onChange={onChange}/>
        <button type="submit">Register</button>
    </form>
  )
}
export default Register


