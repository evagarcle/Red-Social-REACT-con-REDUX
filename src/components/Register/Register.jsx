import { useEffect, useState } from 'react'
import { register, reset } from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { notification } from 'antd'

const Register = () => {
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
        age:''
    })
    const {username,email,password, age} = formData
    const {isSuccess,message,isError} = useSelector((state)=>state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
      if(isSuccess){
        notification.success({
          message:"Success",
          description: message
        })
      }
      if(isError){
        notification.error({
          message: "Error!!!",
          description:message
        })
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
        <input type="text" name="username" value={username} placeholder='Your name' onChange={onChange} />
        <input type="email" name="email" value={email} placeholder='Your email' onChange={onChange}/>
        <input type="password" name="password" value={password} placeholder='Your password' onChange={onChange}/>
        <input type="text" name="age" value={age} placeholder='Your age' onChange={onChange}/>
        <button type="submit">Register</button>
    </form>
  )
}
export default Register


