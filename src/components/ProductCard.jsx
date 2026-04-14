function ProductCard({ product, addToCart, openModal, wishlist, toggleWishlist }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <p>Stock: {product.stock}</p>

      <div className="button-group">
        <button
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>

        <button onClick={() => openModal(product)}>View</button>
        <button onClick={() => toggleWishlist(product.id)}>
        {wishlist.includes(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;