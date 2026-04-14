import { useState, useEffect } from "react";
import productData from "./data";
import Navbar from "./components/Navbar";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductModal from "./components/ProductModal";

function App() {
  const [products, setProducts] = useState(productData);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products
    .filter((p) => category === "All" || p.category === category)
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  const addToCart = (product) => {
    if (product.stock <= 0) return;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    setProducts((prev) =>
      prev.map((p) =>
        p.id === product.id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  const removeFromCart = (id) => {
    const item = cart.find((i) => i.id === id);
    if (!item) return;

    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );

    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: p.stock + 1 } : p))
    );
  };

  const applyPromo = () => {
    if (promoCode.toUpperCase() === "OAKLAND20") {
      setDiscount(0.2);
    } else {
      setDiscount(0);
      alert("Invalid code");
    }
  };

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const total = subtotal - subtotal * discount;

  return (
    <div className="app-container">
      <Navbar totalItems={totalItems} total={total} />

      <FilterBar
        categories={categories}
        setCategory={setCategory}
        setSortOrder={setSortOrder}
      />

      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
        openModal={setSelectedProduct}
      />

      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        subtotal={subtotal}
        total={total}
        promoCode={promoCode}
        setPromoCode={setPromoCode}
        applyPromo={applyPromo}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          close={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;