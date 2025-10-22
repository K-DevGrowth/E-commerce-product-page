import { useState } from "react";
import Buttons from "./Buttons";

const ProductPage = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const discountedPrice = product.price * (1 - product.discountedPrice / 100);

  const handleAddToCartClick = () => {
    onAddToCart(quantity);
  };

  return (
    <div className="grid grid-cols-2 items-center gap-x-10 p-10">
      <div>
        <img
          className="object-cover w-100 h-100 mx-auto"
          src="image-product-1.jpg"
          alt=""
        />
      </div>
      <div>
        <p className="font-medium">Sneaker Company</p>
        <h1 className="text-3xl font-bold pt-4 pb-6">
          Fall Limited Edition Sneakers
        </h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <p>
          <span>$125.00</span>
          <span className="rounded-md bg-Black text-Light-grayish-blue font-semibold px-2 py-1">
            50%
          </span>
        </p>
        <p>$250.00</p>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center justify-center bg-Grayish-blue/10 rounded-lg w-full max-w-[150px]">
            <Buttons onClick={() => setQuantity((prev) => prev - 1)}>
              <img src="icon-minus.svg" alt="" />
            </Buttons>

            <input
              className="text-center w-full max-w-15 font-semibold outline-none px-4 py-3"
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />

            <Buttons onClick={() => setQuantity((prev) => prev + 1)}>
              <img src="icon-plus.svg" alt="" />
            </Buttons>
          </div>
          <Buttons
            onClick={handleAddToCartClick}
            className={" bg-Orange px-15 rounded-lg"}
          >
            <img className="pr-2 brightness-0" src="icon-cart.svg" alt="" />
            <span>Add to card</span>
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
