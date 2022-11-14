import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function App() {
  const user = localStorage.getItem("user");
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
