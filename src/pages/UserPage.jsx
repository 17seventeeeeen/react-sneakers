import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function UserPage() {
  return (
    <>
      <div className="d-flex align-center">
        <Link to="/">
          <img
            className="ml-30"
            width={35}
            height={35}
            clasname="ml-10"
            src="/img/back.svg"
            alt=""
          />
        </Link>
        <h1 className="ml-30">Мои Покупки </h1>
      </div>
      <div className="cardSneakers d-flex justify-between ml-20">
        <Card
          item={{
            name: "Мужские Кроссовки Nike Blazer Mid Suede",
            price: 15600,
            image: "/img/sneakers/sneakers-7.jpg",
          }}
        />
      </div>
    </>
  );
}
