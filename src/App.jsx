import { useState } from "react";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";

let mockProduct = {
  id: 1,
  band: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250.0,
  discountPercentage: 50,
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const [product] = useState(mockProduct);

  const handleAddToCart = (quantity) => {
    if (quantity === 0) return;
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.product.id === productId));
  };

  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <Header cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      <ProductPage
        product={product}
        onAddToCart={(quantity) => handleAddToCart(quantity)}
      />
    </div>
  );
};

export default App;
