import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const Header = ({ cartItems, onRemoveFromCart }) => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const cartDropdown = useRef(null);

  const navLinks = ["Collections", "Men", "Women", "About", "Contact"];

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartDropdown.current && !cartDropdown.current.contains(e.target)) {
        setShowCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="relative w-full sm:p-6 p-4 max-w-5xl mx-auto sm:border-b border-Dark-grayish-blue">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-6">
          <img
            onClick={handleShowMenu}
            className={`${
              showMenu && "brightness-0"
            } sm:hidden block cursor-pointer`}
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
        <div className="flex items-center sm:gap-x-8 gap-x-2">
          <img
            ref={cartDropdown}
            onClick={handleShowCart}
            className={`cursor-pointer ${showCart && "brightness-0"}`}
            src="icon-cart.svg"
            alt=""
          />
          <img
            className="w-10 h-10 border-2 rounded-full border-White hover:border-Orange transition-all duration-150 cursor-pointer"
            src="image-avatar.png"
            alt=""
          />
        </div>
      </div>

      {showCart && (
        <div className="fixed sm:top-40 top-50 sm:right-20 sm:w-80 left-1/2 -translate-1/2 sm:translate-x-0 sm:left-auto w-[95%] z-50">
          <div className="bg-White shadow-lg rounded-lg p-4">
            <h3 className="font-bold mb-4">Cart</h3>

            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <>
                  <div
                    key={item.product.id}
                    className="flex items-center gap-x-4 mt-4"
                  >
                    <img
                      className="w-14 sm:w-10 h-14 sm:h-10 rounded-md"
                      src={item.product.img}
                      alt=""
                    />
                    <div className="flex-1">
                      <p className="text-sm text-Dark-grayish-blue">
                        {item.product.name}
                      </p>
                      <p className="flex text-sm text-Dark-grayish-blue gap-x-4">
                        $
                        {(
                          (item.product.price *
                            item.product.discountPercentage) /
                          100
                        ).toFixed(2)}
                        x {item.quantity}
                        <span className="font-bold text-Black">
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
                  <Button className={"mt-4"}>Checkout</Button>
                </>
              ))
            ) : (
              <p className="text-Dark-grayish-blue font-semibold text-lg text-center">
                Your cart is empty.
              </p>
            )}
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
