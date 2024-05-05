import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import Favorite from "./components/Favorite";
import Basket from "./components/Basket";
import ProductDatails from "./components/ProductDatails";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/search/:title" element={<Search />} />
        <Route path="/productdetails/:elId" element={<ProductDatails />} />
      </Routes>
    </div>
  );
}

export default App;
