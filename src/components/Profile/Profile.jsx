import { Spin } from "antd"
import { useSelector } from "react-redux"


const Profile = () => {
  const { user } = useSelector((state) => state.auth)

  if (!user) {
    return <Spin/>
  }
  return (
    <div>
      <p>User name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile