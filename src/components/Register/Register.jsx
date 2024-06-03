import { useState } from 'react'
const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    const {name,email,password} = formData
    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('formData',formData)
    }
  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} placeholder='Your name' onChange={onChange} />
        <input type="email" name="email" value={email} placeholder='Your email' onChange={onChange}/>
        <input type="password" name="password" value={password} placeholder='Your password' onChange={onChange}/>
        <button type="submit">Register</button>
    </form>
  )
}
export default Register
