import { useState } from 'react'
import { register } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'

const Register = () => {
    const [formData, setFormData] = useState({
        userName:'',
        email:'',
        password:'',
        age:''
    })
    const {userName,email,password, age} = formData
    const dispatch = useDispatch()
    // dispatch: paso de redux que no estaba en context pero necesario para pasar las funciones

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
        <input type="text" name="userName" value={userName} placeholder='Your name' onChange={onChange} />
        <input type="email" name="email" value={email} placeholder='Your email' onChange={onChange}/>
        <input type="password" name="password" value={password} placeholder='Your password' onChange={onChange}/>
        <input type="text" name="age" value={age} placeholder='Your age' onChange={onChange}/>
        <button type="submit">Register</button>
    </form>
  )
}
export default Register


