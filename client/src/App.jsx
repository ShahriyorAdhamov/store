import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductDetail from "./pages/product-detail";
import Header from "./components/header";
import Cart from './pages/cart'
import { Login } from "./pages/login";
import { Register } from "./pages/register";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/register" element = {<Register/>}></Route>
        <Route path="/products/:id" element = {<ProductDetail/>}/>
      </Routes>
    </>
  );
}

export default App;
