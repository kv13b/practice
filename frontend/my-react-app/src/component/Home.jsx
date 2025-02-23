import "../App.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container">
      <div className="square">
        <h2 className="title">
          <Link to="file">File Upload </Link>
        </h2>
      </div>
      <div className="square">
        <h2 className="title">
          <Link to="mail">Send Mail </Link>
        </h2>
      </div>
      <div className="square">
        <h2 className="title">
          <Link to="todo">Todo</Link>
        </h2>
      </div>
    </div>
  );
};

export default Home;
