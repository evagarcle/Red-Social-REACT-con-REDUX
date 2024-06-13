import Posts from "../Posts/Posts"

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center bg-light p-4 rounded">
        <h1 className="display-4">Red Social by Sento & Eva</h1>
        <p className="lead">Explora, comparte y conecta</p>
      </div>
      <Posts />
    </div>
  )
}

export default Home
