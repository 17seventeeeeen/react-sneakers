function CartItem({ item, addOrDeleteFromCart }) {
  return (
    <div className="cartItem d-flex align-center mb-20">
      <div
        style={{ backgroundImage: `url(${item.image})` }}
        className="cartItemImg"
      ></div>
      <div className="mr-20">
        <p className="mb-5">{item.name}</p>
        <b>{item.price} руб.</b>
      </div>
      <img
        onClick={() => addOrDeleteFromCart(item)}
        className="removeBtn"
        src="/img/remove-btn.svg"
        alt=""
      />
    </div>
  );
}

function Drawer({ setOpen, addOrDeleteFromCart, cart }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className=" mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={() => setOpen(false)}
            className="removeBtn cu-p"
            src="/img/remove-btn.svg"
            alt=""
          />
        </h2>
        <div className="items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addOrDeleteFromCart={addOrDeleteFromCart}
            />
          ))}
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
  );
}

export default Drawer;
