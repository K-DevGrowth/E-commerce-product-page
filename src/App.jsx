import { useState } from "react";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";

const App = () => {
  const [item, setItem] = useState({
    productName: "Fall Limited Edition Sneakers",
    amount: 0,
    price: 125.00,
  });

  return (
    <div>
      <Header item={item} />
      <ProductPage
        item={item}
        setItem={setItem}
      />
    </div>
  );
};

export default App;
