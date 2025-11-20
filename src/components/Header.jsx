import { useState } from "react";
import Button from "./Button";

const Header = ({ cartItems, onRemoveFromCart }) => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = ["Collections", "Men", "Women", "About", "Contact"];

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="relative w-full p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <img
            onClick={handleShowMenu}
            className={`${showMenu && "brightness-0"} sm:hidden block`}
            src="icon-menu.svg"
            alt=""
          />
          <img src="logo.svg" alt="" />
          <div className="hidden sm:block">
            <div className="flex space-x-4 items-center">
              {navLinks.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <img
            onClick={handleShowCart}
            className={`cursor-pointer ${showCart && "brightness-0"}`}
            src="icon-cart.svg"
            alt=""
          />
          <img className="w-10 h-10" src="image-avatar.png" alt="" />
        </div>
      </div>

      {showCart && (
        <div className="absolute inset-0 top-45 flex justify-center items-center p-4">
          <div className="bg-White shadow-lg rounded-lg h-50 w-full p-4">
            <h3 className="font-bold">Cart</h3>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.product.id} className="flex gap-x-2 mt-4">
                  <img
                    className="w-15 h-15 rounded-md"
                    src={item.product.img}
                    alt=""
                  />
                  <div>
                    <p>{item.product.name}</p>
                    <p className="flex gap-x-4">
                      $
                      {(
                        (item.product.price * item.product.discountPercentage) /
                        100
                      ).toFixed(2)}
                      x {item.quantity}
                      <span className="font-bold">
                        $
                        {(
                          ((item.product.price *
                            item.product.discountPercentage) /
                            100) *
                          item.quantity
                        ).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemoveFromCart(item.product.id)}
                  >
                    <img src="icon-delete.svg" alt="" />
                  </button>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center h-full">
                <span className="text-Dark-grayish-blue font-semibold text-lg">
                  Your cart is empty.
                </span>
              </div>
            )}
            <Button>Checkout</Button>
          </div>
        </div>
      )}

      <div className="sm:hidden block">
        {showMenu && (
          <div className="fixed bg-White h-full top-0 left-0 w-[70%]">
            <button onClick={handleShowMenu} className="p-4 mt-3">
              <img src="icon-close.svg" alt="" />
            </button>
            <div className="flex flex-col gap-4 p-4 text-lg font-bold text-Black">
              {navLinks.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
