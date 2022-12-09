function Card({ item, addOrDeleteFromCart, cart }) {
  function isIn(item, id) {
    let index = item.findIndex((elem) => elem.id == id);
    if (index === -1) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="card mb-30">
      <div className="favorite">
        <img className="favorite" src="/img/liked.svg" alt="" />
      </div>
      <img width={133} height={112} src={item.image} alt="" />
      <p>{item.name}</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>цена</span>
          <b>{item.price} руб</b>
        </div>
        <button
          style={{ background: isIn(cart, item.id) ? "green" : "" }}
          onClick={() => addOrDeleteFromCart(item)}
          className="button"
        >
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
