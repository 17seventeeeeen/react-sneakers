import { Link, useNavigate } from "react-router-dom";

function Header({ setOpen }) {
  const navigate = useNavigate();
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div className="ml-5">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight d-flex align-center">
        <li className="mr-30 align-center d-flex">
          <img
            onClick={() => setOpen(true)}
            className="cart mr-10 mb-5"
            width={18}
            height={18}
            src="/img/header-svg1.svg"
            alt=""
          />
          <span className="mb-5">1205 руб.</span>
          <Link to="/liked">
            <img
              className="ml-10"
              width={18}
              height={18}
              src="/img/header-svg2.svg"
              alt=""
            />
          </Link>
          <Link to="/user">
            <img
              className="ml-20"
              width={18}
              height={18}
              src="/img/header-svg3.svg"
              alt=""
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
