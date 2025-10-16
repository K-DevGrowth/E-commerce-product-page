const ProductPage = ({ item, setItem }) => {
  const handleIncrease = () =>
    setItem((prev) => ({ ...prev, amount: prev.amount + 1 }));

  const handleDecrease = () =>
    setItem((prev) => ({ ...prev, amount: prev.amount - 1 }));

  return (
    <div className="grid grid-cols-2">
      <div>
        <img src="image-product-1.jpg" alt="" />
      </div>
      <div>
        <p>Sneaker Company</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <p>
          $125.00 <span>50%</span>
        </p>
        <p>$250.00</p>
        <div>
          <button onClick={handleDecrease}>Decrease</button>
          <input
            className="border text-center"
            type="text"
            value={item.amount}
            onChange={(e) => setItem(e.target.value)}
          />
          <button onClick={handleIncrease}>Increase</button>
        </div>
        <button>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
