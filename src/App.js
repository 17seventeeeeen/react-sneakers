import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useState } from "react";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 15600,
    image: "/img/sneakers/sneakers-1.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 15600,
    image: "/img/sneakers/sneakers-2.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 15600,
    image: "/img/sneakers/sneakers-3.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 15600,
    image: "/img/sneakers/sneakers-4.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 15600,
    image: "/img/sneakers/sneakers-5.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 15600,
    image: "/img/sneakers/sneakers-6.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 15600,
    image: "/img/sneakers/sneakers-7.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 15600,
    image: "/img/sneakers/sneakers-8.jpg",
  },
];

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="wrapper clear">
      {open ? <Drawer setOpen={setOpen} /> : null}
      <Header setOpen={setOpen} />
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все крoссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="поиск..." type="text" />
          </div>
        </div>
        
        <div className="cardSneakers d-flex">
          {arr.map((item) => (
            <Card item={item}/>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
