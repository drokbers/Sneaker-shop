
import { useSelector } from "react-redux";

import Cart from "../components/cart/Cart";
import Layout from "../components/layout";
import ProductPage from "../components/product/ProductPage";


function Homepage() {
  const cartIsOpen = useSelector((state) => state.toggle);

  return (
   <Layout>
    {cartIsOpen && <Cart/>}
     <ProductPage/>
   </Layout>
   
    
  );
}
export default Homepage;