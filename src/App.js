import { Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      <Route
        path={`${process.env.PUBLIC_URL}/movie/:movieId`}
        element={<Detail />}
      />
    </Routes>
  );
}

export default App;
