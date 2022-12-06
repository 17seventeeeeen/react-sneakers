function Card() {
  return (
    <div className="card">
      <img width={133} height={112} src="/img/sneakers/sneakers-3.jpg" alt="" />
      <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>цена</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}
export default Card 