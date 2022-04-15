import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootRouter from "./router";
import Home from "./screens";

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
      </Routes>
    </Router>
    <RootRouter />
  </>
);

export default App;
