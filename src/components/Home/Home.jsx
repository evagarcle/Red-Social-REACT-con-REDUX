import Posts from "../Posts/Posts"

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center bg-light p-4 rounded">
        <h1 className="display-4">POSTAGRAM</h1>
        <p className="lead">Explore - Share - Connect</p>
      </div>
      <Posts />
    </div>
  )
}

export default Home
