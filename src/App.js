import { useState } from "react";
import MainRoutes from "./routes/MainRoutes";

function getStorage() {
  const data = JSON.parse(localStorage.getItem("cart"));

  if (data) {
    return data;
  } else {
    localStorage.setItem("cart", JSON.stringify([]));
    return [];
  }
}
function App() {
  const [cart, setCart] = useState(getStorage());

  function addOrDeleteFromCart(item) {
    const data = getStorage();

    let index = data.findIndex((elem) => elem.id === item.id);

    if (index === -1) {
      const newData = [...data, item];
      localStorage.setItem("cart", JSON.stringify(newData));
      setCart(newData);
    } else {
      const newData = data.filter((elem) => elem.id !== item.id);
      localStorage.setItem("cart", JSON.stringify(newData));
      setCart(newData);
    }
  }

  return <MainRoutes cart={cart} addOrDeleteFromCart={addOrDeleteFromCart} />;
}
export default App;
