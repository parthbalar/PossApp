import { useState, useEffect } from "react";
import "./styles/product.css";

export default function Product() {
  const [products, setProducts] = useState([]); 
  const [cart, setCart] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json"); 
        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Please add items to cart");
    } else {
      alert(`Check out successful! Your total is ₹${getTotal()}`);
      setCart([]);
    }
  };

  return (
    <div className="container">
     <div className="product-list">
        <h2>Products</h2>
        {/* Product Grid */}
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>₹ {product.price}</p>
              <button onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      <div className="cart">
        <div className="cart-summary">
          <h2>Cart</h2>

          {/* Table Header */}
          <div className="cart-header">
            <span>Item</span>
            <span>Price</span>
            <span>Qty</span>
            <span>Total</span>
          </div>

          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>₹ {item.price}</span>
                  <span>{item.quantity}</span>
                  <span className="font-bold">₹ {item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="cart-checkout">
          <h3>Net Total: ₹ {getTotal()}</h3>
          <button onClick={handleCheckout}>Check Out ₹ {getTotal()}</button>
        </div>
      </div>
    </div>
  );
}
