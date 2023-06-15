

import Cart from "../components/cart/Cart";
import Layout from "../components/layout";
import ProductPage from "../components/product/ProductPage";


function Homepage() {

  return (
   <Layout>
    <Cart/>
     <ProductPage/>
   </Layout>
   
    
  );
}
export default Homepage;