import { useState } from "react";

const Header = ({ baskets }) => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="relative w-full p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-5">
            <img
              onClick={handleShowMenu}
              className={`${showMenu && "brightness-0"}`}
              src="icon-menu.svg"
              alt=""
            />
            <img src="logo.svg" alt="" />
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
              <p className="font-bold">Cart</p>

              {baskets.length < 0 ? (
                <p className="text-center text-Dark-grayish-blue font-bold text-lg">
                  Your cart is empty.
                </p>
              ) : (
                baskets.map((item) => (
                  <div key={item.product.id} className="flex gap-x-2 mt-4">
                    <img
                      className="w-15 h-15 rounded-md"
                      src={item.product.img}
                      alt=""
                    />
                    <div>
                      <p>{item.product.name}</p>
                      <div className="flex gap-x-4">
                        <p>
                          $
                          {(
                            (item.product.price * item.product.discounted) /
                            100
                          ).toFixed(2)}{" "}
                          x {item.quantity}$
                        </p>
                        <p className="font-bold">
                          $
                          {(
                            ((item.product.price * item.product.discounted) /
                              100) *
                            item.quantity
                          ).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
        {showMenu && (
          <div className="fixed bg-White h-full top-0 left-0 w-[70%]">
            <button onClick={handleShowMenu} className="p-4 mt-3">
              <img src="icon-close.svg" alt="" />
            </button>
            <nav className="flex flex-col gap-4 p-4 text-lg font-bold text-Black">
              <a href="">Collections</a>
              <a href="">Men</a>
              <a href="">Women</a>
              <a href="">About</a>
              <a href="">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
