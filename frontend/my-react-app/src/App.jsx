import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import File from "./component/File";
import Home from "./component/Home";
import { Mail } from "./component/Mail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="file" element={<File />} />
      <Route path="mail" element={<Mail />} />
    </Routes>
  );
}

export default App;
