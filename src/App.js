import Home from "./routes/home/home";

// function App() {
//   return (
//     <div>
//       <Home/>
//     </div>
//   );
// }

// export default App;

import { Link, Route, Routes } from "react-router-dom";
import Courses from "./routes/courses/courses";

function Course() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Not found</h1>
              <Link to={"/"}>Go to Home</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Course;
