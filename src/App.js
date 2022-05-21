import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Home/Header/Header";
import Footer from "./component/Home/Footer/Footer";
import Blog from "./component/Common/Blog/Blog";
import AddProduct from "./component/AddProduct/AddProduct";
import MyProduct from "./component/ShowingProduct/MyProduct/MyProduct";
import Home from "./component/Home/Home";
import ProductDetails from "./component/ShowingProduct/ProductDetails/ProductDetails";
import ManageProducts from "./component/ShowingProduct/ManageProducts/ManageProducts";
import UpdateProduct from "./component/ShowingProduct/UpdateProduct/UpdateProduct";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/addProduct" element={<AddProduct></AddProduct>}></Route>
        <Route path="/manageInventory" element={<ManageProducts></ManageProducts>}></Route>
        <Route path="/myAdded" element={<MyProduct></MyProduct>}></Route>
        <Route path="/details/:_id" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/product/update/:_id" element={<UpdateProduct></UpdateProduct>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
