import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Home/Header/Header";
import Footer from "./component/Home/Footer/Footer";
import Blog from "./component/Common/Blog/Blog";
import AddProduct from "./component/AddProduct/AddProduct";
import Products from "./component/ShowingProduct/Products/Products";
import MyProduct from "./component/ShowingProduct/MyProduct/MyProduct";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/addProduct" element={<AddProduct></AddProduct>}></Route>
        <Route path="/manageInventory" element={<Products></Products>}></Route>
        <Route path="/myAdded" element={<MyProduct></MyProduct>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
