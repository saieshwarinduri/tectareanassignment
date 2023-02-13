import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import GridApi from "./GridApi/index";
import Counter from "./Counter";
import PostApi from "./PostApi/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="counter" element={<Counter />} />
          <Route exact path="/gridapi" element={<GridApi />} />
          <Route exact path="/postapi" element={<PostApi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
