import { useState } from "react";
import Header from "./components/Header";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";

const egProduct = {
  id: 1,
  brand: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  img: "image-product-1-thumbnail.jpg",
  price: 250,
  discountPercentage: 50,
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [product] = useState(egProduct);

  const handleAddCart = (quantity) => {
    const existingItem = cartItems.find(
      (item) => item.product.id == product.id
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

  const handleRemoveCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.product.id !== productId));
  };

  return (
    <div className="relative w-screen h-dvh overflow-x-hidden">
      <Header cartItems={cartItems} onRemoveFromCart={handleRemoveCart} />
      <main className="grid sm:grid-cols-2 grid-cols-1 max-w-full sm:max-w-4xl sm:mt-10 mx-auto items-center">
        <ProductGallery />
        <ProductInfo product={product} onAddToCart={handleAddCart} />
      </main>
    </div>
  );
};

export default App;
