import { products } from "../../assets/data/data";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";
const Products = () => {
  console.log(products);
  return (
    <div className="product_div">
      <h1 className="product_header">Try our other free products</h1>
      <div className="product_section">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
