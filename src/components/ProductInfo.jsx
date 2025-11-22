import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import Button from "./Button";

const ProductInfo = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  return (
    <div className="p-4">
      <h2 className="text-Dark-grayish-blue font-bold">{product.brand}</h2>
      <h1 className="text-Black font-bold text-3xl pt-2">{product.name}</h1>
      <p className="text-Dark-grayish-blue py-4">{product.description}</p>

      <div className="flex sm:flex-col justify-between items-center sm:items-baseline">
        <div className="flex items-center gap-x-2">
          <span className="text-Black text-2xl font-bold">
            ${discountedPrice.toFixed(2)}
          </span>
          <span className="bg-Black text-White px-2 py-1 rounded-md">
            {product.discountPercentage}%
          </span>
        </div>
        <span className="text-Dark-grayish-blue font-bold line-through">
          ${product.price.toFixed(2)}
        </span>
      </div>

      <div className="grid sm:grid-cols-[1fr_1.5fr] grid-cols-1 items-center">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <Button onClick={() => onAddToCart(quantity)}>
          <img className="brightness-0" src="icon-cart.svg" alt="" />
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
