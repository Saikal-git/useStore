import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import Favorite from "./components/Favorite";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/favorite" element={<Favorite/>} />
        <Route path="/basket" element={<Basket/>} />
      </Routes>
    </div>
  );
}

export default App;
