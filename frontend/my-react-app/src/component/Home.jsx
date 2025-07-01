import "../App.css";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
const Home = () => {
  const { toggleTheme, darkMode } = useTheme();
  return (
    <div className="container">
      <div className="mode-container">
        <button onClick={toggleTheme}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
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
