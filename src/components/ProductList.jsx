import ProductCard from "./ProductCard";

function ProductList({ products, addToCart, openModal }) {
  return (
    <div>
      {products.map(p => (
        <ProductCard
          key={p.id}
          product={p}
          addToCart={addToCart}
          openModal={openModal}
        />
      ))}
    </div>
  );
}

export default ProductList;