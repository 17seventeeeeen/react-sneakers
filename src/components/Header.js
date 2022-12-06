function Header (){
    return (<header className="d-flex justify-between align-center p-40">
    <div className="d-flex align-center">
      <img width={40} height={40} src="/img/logo.png" alt="" />
      <div className="ml-5">
        <h3 className="text-uppercase">React Sneakers</h3>
        <p>магазин лучших кроссовок</p>
      </div>
    </div>
    <ul className="headerRight d-flex">
      <li className="mr-30">
        <img
          className="mr-10"
          width={18}
          height={18}
          src="/img/header-svg1.svg"
          alt=""
        />
        <span>1205 руб.</span>
        <img
          className="ml-10"
          width={18}
          height={18}
          src="/img/header-svg2.svg"
          alt=""
        />
      </li>
      <li className="mr-15">
        <img width={18} height={18} src="/img/header-svg3.svg" alt="" />
      </li>
    </ul>
  </header>)
}

export default Header;