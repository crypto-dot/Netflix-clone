
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.scss';
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from './pages/newUser/NewUser';
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import { useContext } from 'react';
import { AuthContext } from "./context/authContext/authContext";
import Lists from "./pages/lists/Lists";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      {user && <Navbar />}
      <div className="container">
        {user && <Sidebar />}
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />}></Route>
          <Route path="/" element={user ? <Home /> : <Navigate to='/login' />}></Route>
          <Route path="/user/:userId" element={user ? <User /> : <Navigate to='/login' />}></Route>
          <Route path="/newUser" element={user ? <NewUser /> : <Navigate to='/login' />}></Route>
          <Route path="/movies" element={user ? <ProductList /> : <Navigate to='/login' />}></Route>
          <Route path="/lists" element={user ? <Lists /> : <Navigate to='/login' />}></Route>
          <Route path="/movies/:movieId" element={user ? <Product /> : <Navigate to='/login' />}></Route>
          <Route path="/newMovie" element={user ? <NewProduct /> : <Navigate to='/login' />}></Route>
          <Route path="/users" element={user ? <UserList /> : <Navigate to='/login' />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>


    </Router>
  );
}

export default App;
