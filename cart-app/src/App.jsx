import "./index.css";
import { useEffect, useState } from "react";
import Counter from "./Counter";
import Input from "./Input";
export default function App() {
  const [list, setList] = useState([
    ["Milk", 70],
    ["Apple", 50],
    ["Phone", 12000],
    ["Speaker", 5000]
  ]);
  const [cartPrice, setCartPrice] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    cartPrice.forEach((i) => setSum(sum + i));
  }, [cartPrice]);

  function handleDelete(index) {
    const newList = list.filter((item, i) => item !== index);
    setList(newList);
  }
  return (
    <div className="App">
      <Input setList={setList} list={list} />
      <div className="box">
        {list.map((i) => {
          return (
            <>
              <div
                className="card"
                key={i}
                style={{
                  padding: "15px"
                }}
              >
                <button id="xbtn" onClick={() => handleDelete(i)}>
                  Delete
                </button>
                <strong>{i[0] + " " + i[1] + " INR"}</strong>
                <Counter
                  cartPrice={cartPrice}
                  setCartPrice={setCartPrice}
                  price={i[1]}
                />
              </div>
            </>
          );
        })}
        <div className="cart">Cart Price: {sum}&nbsp;INR</div>
      </div>
    </div>
  );
}
