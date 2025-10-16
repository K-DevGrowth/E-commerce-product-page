import { useState } from "react";
import { navigations } from "../constants/data";

const Cart = ({ productName, amount, price }) => {
  const handleCheckout = () => {
    alert("Thank you for buying!");
    
  };

  return (
    <div className="absolute w-full min-w-[350px] top-15 -right-20">
      <div className="p-4 bg-White shadow-2xl rounded-lg">
        <p className="font-bold border-b pb-4">Cart</p>
        {amount > 0 ? (
          <>
            <div className="flex items-center justify-between gap-x-2">
              <div className="flex items-center gap-x-2">
                <img
                  className="w-12 h-12 rounded-md"
                  src="image-product-1-thumbnail.jpg"
                  alt=""
                />
                <div className="grid grid-cols-1 py-3">
                  <p className="text-Dark-grayish-blue">{productName}</p>
                  <p>
                    <span className="text-Dark-grayish-blue">
                      $125.00 x{amount}
                    </span>
                    <span className="px-3 font-bold">
                      ${(price * amount).toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
              <button type="button" className="hover:bg-Orange">
                <img src="icon-delete.svg" alt="" />
              </button>
            </div>
            <button
              className="primary-btn w-full"
              type="button"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </>
        ) : (
          <p className="text-center">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

const Header = ({ item }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="relative w-full p-4 border-b-2 shadow-sm border-Light-grayish-blue">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-8">
          <img src="logo.svg" alt="" />
          <nav className="flex gap-x-6">
            {navigations.map(({ id, text, href }) => (
              <a key={id} href={href}>
                {text}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-x-10">
          <div className="relative">
            <img
              onClick={() => setShowCart((prev) => !prev)}
              className="w-6 h-6 cursor-pointer"
              src="icon-cart.svg"
              alt=""
            />
            {showCart && <Cart {...item} />}
          </div>
          <img
            className="w-10 h-10 cursor-pointer"
            src="image-avatar.png"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
