import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const egProduct = {
  id: 0,
  name: "Fall Limited Edition Sneakers",
  img: "image-product-1-thumbnail.jpg",
  price: 250,
  discounted: 50,
};

const App = () => {
  const [carts, setCarts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [product] = useState(egProduct);

  const handleAddCart = (amount) => {
    const existingProduct = carts.findIndex(
      (cart) => cart.product.id == product.id
    );
    if (existingProduct !== -1) {
      const updatedCarts = [...carts];
      updatedCarts[existingProduct] = {
        ...updatedCarts[existingProduct],
        quantity: amount,
      };
      setCarts(updatedCarts);
    } else {
      setCarts([...carts, { product, quantity: amount }]);
    }
  };

  const handleRemoveCart = () => {
    setCarts([]);
  }

  return (
    <div className="relative w-screen h-dvh overflow-x-hidden">
      <Header baskets={carts} onRemoveCart={handleRemoveCart} />
      <Hero
        quantity={quantity}
        onQuantityChange={setQuantity}
        onAddCart={handleAddCart}
      />
    </div>
  );
};

export default App;
