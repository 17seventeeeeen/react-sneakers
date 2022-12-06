function Drawer (){
    return (
        <div style={{ display: "none" }} className="overlay">
        <div className="drawer">
          <h2 className=" mb-30 d-flex justify-between">
            Корзина
            <img className="removeBtn cu-p" src="/img/remove-btn.svg" alt="" />
          </h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/sneakers-1.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/remove-btn.svg" alt="" />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/sneakers-1.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/remove-btn.svg" alt="" />
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 349 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button>оформить заказ</button>
          </div>
        </div>
      </div>
    )
}

export default Drawer