<<<<<<< HEAD
import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Product from './components/Product';
import Form from './pages/Form';
=======
import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Product from "./components/Product";
>>>>>>> 13c7fe516ff7b4449549fdfe0ebdc85c93ae24ed

function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path='/' element={<Landing />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/product' element={<Product />} />
      <Route path= '/form' element={<Form />}/>
=======
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Product" element={<Product />} />
>>>>>>> 13c7fe516ff7b4449549fdfe0ebdc85c93ae24ed
    </Routes>
  );
}

export default App;
