import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShow, serCarsIsShow] = useState(false);

  const ShowCartHandler = () => {
    serCarsIsShow(true);
  };
  const hideCartHandler = () => {
    serCarsIsShow(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={ShowCartHandler} />
      {cartIsShow && <Cart onHideCart={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
