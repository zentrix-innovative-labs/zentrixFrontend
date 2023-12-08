import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Product from "./components/Product";
import Form from "./components/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App;
