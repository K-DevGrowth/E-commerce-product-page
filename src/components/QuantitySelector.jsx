const QuantitySelector = ({ quantity, setQuantity }) => {
  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div className="flex justify-center items-center my-4 bg-Grayish-blue/10 rounded-xl">
      <button onClick={decrement} className="p-4">
        <img src="icon-minus.svg" alt="" />
      </button>
      <input
        className="text-center font-bold outline-none max-w-14"
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={increment} className="p-4">
        <img src="icon-plus.svg" alt="" />
      </button>
    </div>
  );
};

export default QuantitySelector;
