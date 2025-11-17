const Hero = ({ quantity, onQuantityChange, onAddCart }) => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1">
      <img
        className="object-cover w-full max-h-70 m-auto"
        src="image-product-1.jpg"
        alt=""
      />
      <div className="p-4">
        <p className="text-Dark-grayish-blue font-bold">SNEAKER COMPANY</p>
        <h1 className="text-Black font-bold text-3xl pt-2">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-Dark-grayish-blue py-4">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <p className="text-Black text-2xl font-bold">$125.00</p>
            <p className="bg-Black text-White px-2 py-1 rounded-md">50%</p>
          </div>
          <p className="text-Dark-grayish-blue font-bold line-through">
            $250.00
          </p>
        </div>
        <div className="flex justify-center items-center my-4">
          <button
            onClick={() => onQuantityChange(quantity - 1)}
            className="p-4"
          >
            <img src="icon-minus.svg" alt="" />
          </button>
          <input
            className="text-center font-bold outline-none"
            type="number"
            value={quantity}
            onChange={(e) => onQuantityChange(e.target.value)}
          />
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="p-4"
          >
            <img src="icon-plus.svg" alt="" />
          </button>
        </div>
        <button
          type="button"
          onClick={() => onAddCart(quantity)}
          className="bg-Orange px-3 py-2 rounded-md font-bold text-Black w-full flex justify-center items-center gap-x-2 hover:bg-Orange/90 transition-colors duration-150"
        >
          <img className="brightness-0" src="icon-cart.svg" alt="" />
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
