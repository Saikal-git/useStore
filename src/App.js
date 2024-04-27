import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import Favorite from "./components/Favorite";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/favorite" element={<Favorite/>} />
      </Routes>
    </div>
  );
}

export default App;
