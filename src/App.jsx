import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CloneList from "./pages/CloneList.jsx";
import CreateClone from "./pages/CreateClone.jsx";
import Settings from "./pages/Settings.jsx";
import Preview from "./pages/Preview.jsx";
import Share from "./pages/Share.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<CloneList />} />
        <Route exact path="/create-clone" element={<CreateClone />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/preview" element={<Preview />} />
        <Route exact path="/share" element={<Share />} />
      </Routes>
    </Router>
  );
}

export default App;