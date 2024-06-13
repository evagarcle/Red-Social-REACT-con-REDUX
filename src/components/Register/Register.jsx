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
    const {name, email, password, birthday} = formData
    const {isSuccess, message, isError} = useSelector((state)=>state.auth)
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
                description: message
            })
            navigate("/login")
        }
        dispatch(reset())
    }, [isSuccess, message, isError, navigate, dispatch])

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(register(formData))
    }

    return (
        <div className="container mt-5">
            <form onSubmit={onSubmit} className="card p-4">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                        className="form-control"
                        placeholder="Your name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        className="form-control"
                        placeholder="Your email"
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
                        placeholder="Your password"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="birthday">Birthday</label>
                    <input
                        type="date"
                        name="birthday"
                        value={birthday}
                        onChange={onChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Register</button>
            </form>
        </div>
    )
}

export default Register
