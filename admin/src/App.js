
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import UserList from "./pages/home/userList/UserList";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
