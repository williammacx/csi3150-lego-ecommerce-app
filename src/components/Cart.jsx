function Cart({ cart, removeFromCart, subtotal, total, promoCode, setPromoCode, applyPromo, setDiscount, discount }) {
  return (
    <div>
      <h2>Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          {item.name} x {item.quantity}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <p>Subtotal: ${subtotal}</p>
      <p>Total: ${total}</p>

      <input value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
      <button onClick={applyPromo}>Apply</button>

      {discount > 0 && (
      <button
      className="remove-discount-btn"
      onClick={() => {
        setDiscount(0);
        setPromoCode("");
      }
    }
    >Remove Discount</button>
  )}
    </div>
  );
}

export default Cart;