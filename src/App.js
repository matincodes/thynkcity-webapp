import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./routes/login/login";
import Home from "./routes/home/home";
import CoursesSection from "./components/coursesPage/courses-section/courses-section";
import SignUp from "./routes/signUp/signUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/courses" element={<CoursesSection/>}/>
      </Routes>
    </div>
  );
}

export default App;
