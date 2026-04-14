import ProductCard from "./ProductCard";

function ProductList({ products, addToCart, openModal, wishlist, toggleWishlist }) {
  return (
    <div>
      {products.map(p => (
        <ProductCard
          key={p.id}
          product={p}
          addToCart={addToCart}
          openModal={openModal}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
        />
      ))}
    </div>
  );
}

export default ProductList;