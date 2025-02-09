import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import File from "./component/File";
import Home from "./component/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="file" element={<File />} />
    </Routes>
  );
}

export default App;
