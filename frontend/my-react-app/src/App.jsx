import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import File from "./component/File";
import Home from "./component/Home";
import { Mail } from "./component/Mail";
import Todo from "./component/Todo";
import ThemeProvider from "./component/ThemeProvider";
function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="file" element={<File />} />
        <Route path="mail" element={<Mail />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
