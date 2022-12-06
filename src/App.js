import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer"

const arr = [{name :'Мужские Кроссовки Nike Blazer Mid Suede' , price: 15600},]


function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header />
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все крoссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="поиск..." type="text" />
          </div>
        </div>
        <div className="d-flex">
          <Card/>
          <Card/>

         {/* {arr.map((obj) =>(
          <Card/>
         ))} */}
        </div>
      </div>
    </div>
  );
}
export default App;
