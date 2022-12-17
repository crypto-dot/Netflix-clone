
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
import NewList from "./pages/newList/NewList";
import List from "./pages/list/List";
import Lists from "./pages/lists/Lists";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      {user?._id && <Navbar />}
      <div className="container">
        {user?._id && <Sidebar />}
        <Routes>
          <Route path="/login" element={!user?._id ? <Login /> : <Navigate to='/' />}></Route>
          <Route path="/" element={user?._id ? <Home /> : <Navigate to='/login' />}></Route>
          <Route path="/user/:userId" element={user?._id ? <User /> : <Navigate to='/login' />}></Route>
          <Route path="/newUser" element={user?._id ? <NewUser /> : <Navigate to='/login' />}></Route>
          <Route path="/movies" element={user?._id ? <ProductList /> : <Navigate to='/login' />}></Route>
          <Route path="/lists" element={user?._id ? <Lists /> : <Navigate to='/login' />}></Route>
          <Route path="/movies/:movieId" element={user?._id ? <Product /> : <Navigate to='/login' />}></Route>
          <Route path="/lists/:listId" element={user?._id ? <List /> : <Navigate to='/login' />}></Route>
          <Route path="/newMovie" element={user?._id ? <NewProduct /> : <Navigate to='/login' />}></Route>
          <Route path="/newList" element={user?._id ? <NewList /> : <Navigate to='/login' />}></Route>
          <Route path="/users" element={user?._id ? <UserList /> : <Navigate to='/login' />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>


    </Router>
  );
}

export default App;
