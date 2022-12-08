import React from "react";
import Card from "../components/Card";

export default function LikedPage() {
  return (
    <>
      <div className="d-flex align-center">
        <img
          className="ml-30"
          width={35}
          height={35}
          clasname="ml-10"
          src="/img/back.svg"
          alt=""
        />
        <h1 className="ml-30">Мои закладки </h1>
      </div>
      <div className="cardSneakers d-flex">
        <Card
          item={{
            name: "Мужские Кроссовки Nike Blazer Mid Suede",
            price: 15600,
            image: "/img/sneakers/sneakers-1.jpg",
          }}
        />
      </div>
    </>
  );
}
