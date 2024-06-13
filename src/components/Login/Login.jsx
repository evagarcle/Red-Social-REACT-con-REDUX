import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd'

const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const {email,password} = formData
    const {message,isSuccess,isError} = useSelector((state) =>state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(isSuccess){
            notification.success({
                message:"Success",
                description:message
            })
            navigate("/profile")
        }
        if(isError){
            notification.error({
                message:"Error",
                description:message
            })
            navigate("/profile")
        }
        dispatch(reset())
    },[message, isSuccess,isError])

    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
    }
    return (
        <div className="container mt-5">
            <form onSubmit={onSubmit} className="card p-4">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={onChange} 
                        className="form-control" 
                        placeholder="Insert your email" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={onChange} 
                        className="form-control" 
                        placeholder="Insert your password" 
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Login</button>
            </form>
        </div>
    )
}

export default Login
