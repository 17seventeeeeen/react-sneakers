function Card({ item }) {
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
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
