import "../App.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="square">
        <p className="title">
          <Link to="file">File Upload </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
