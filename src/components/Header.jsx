import { useState } from "react";

const Header = ({ cartItems, onRemoveFromCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navLinks = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <header className="relative w-full p-4 border-b-2 shadow-sm border-Light-grayish-blue">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-8">
          <img src="logo.svg" alt="" />
          <nav className="flex gap-x-6">
            {navLinks.map((link) => (
              <a key={link} href={`#${link}`}>
                {link}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-x-10">
          <div className="relative">
            <img
              onClick={() => setIsCartOpen((prev) => !prev)}
              className="w-6 h-6 cursor-pointer"
              src="icon-cart.svg"
              alt=""
            />
            {isCartOpen && (
              <div className="absolute w-full min-w-[350px] top-15 -right-20">
                <div className="p-4 bg-White shadow-2xl rounded-lg">
                  <p className="font-bold border-b pb-4">Cart</p>
                  {cartItems.length === 0 ? (
                    <p className="text-center">Your cart is empty</p>
                  ) : (
                    <>
                      {cartItems.map((item) => (
                        <div key={item.product.id}>
                          <div className="flex items-center justify-between gap-x-2">
                            <div className="flex items-center gap-x-2">
                              <img
                                className="w-12 h-12 rounded-md"
                                src="image-product-1-thumbnail.jpg"
                                alt=""
                              />
                              <div className="grid grid-cols-1 py-3">
                                <p className="text-Dark-grayish-blue">
                                  {item.product.name}
                                </p>
                                <p>
                                  <span className="text-Dark-grayish-blue">
                                    ${(item.product.price / 2).toFixed(2)} x
                                    {item.quantity}
                                  </span>
                                  <span className="px-3 font-bold">
                                    $
                                    {(
                                      item.product.price * item.quantity
                                    ).toFixed(2)}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="hover:bg-Orange"
                              onClick={onRemoveFromCart}
                            >
                              <img src="icon-delete.svg" alt="" />
                            </button>
                          </div>
                          <button className="primary-btn w-full" type="button">
                            Checkout
                          </button>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            )}
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
