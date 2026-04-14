function Navbar({ totalItems, total }) {
  return (
    <div>
      <h1>LEGO Store</h1>
      <p>Items: {totalItems}</p>
      <p>Total: ${total}</p>
    </div>
  );
}

export default Navbar;