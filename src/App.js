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
import Error404 from "./component/Common/Error404/Error404";
import SignIn from "./component/Authentication/SignIn/SignIn";
import SignUp from "./component/Authentication/SignUp/SignUp";
import RequireAuth from "./component/Authentication/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/addProduct"
          element={
            <RequireAuth>
              <AddProduct></AddProduct>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageInventory"
          element={<ManageProducts></ManageProducts>}
        ></Route>

        <Route
          path="/myAdded/:email"
          element={
            <RequireAuth>
              <MyProduct />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/details/:_id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route
          path="/product/update/:_id"
          element={
            <RequireAuth>
              <UpdateProduct />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
