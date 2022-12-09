import React from "react";
import Card from "../components/Card";
import { data } from "../mock/data";

export default function HomePage({ addOrDeleteFromCart, cart }) {
  return (
    <>
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все крoссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="поиск..." type="text" />
          </div>
        </div>

        <div className="cardSneakers d-flex">
          {data.map((item) => (
            <Card
              addOrDeleteFromCart={addOrDeleteFromCart}
              key={item.image}
              cart={cart}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  );
}
