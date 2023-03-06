import { useState } from "react";
const Counter = ({ price, setCartPrice, cartPrice }) => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  //increment
  function increment() {
    setTotalPrice(+price * +count);
    setCount(+count + 1);
    let total = [...cartPrice, +totalPrice];
    setCartPrice(total);
  }
  //decrement
  function decrement() {
    if (count > 1) {
      setCount(+count - 1);
      setTotalPrice(() => parseInt(totalPrice - price));
      let total = [...cartPrice, +totalPrice];
      setCartPrice(total);
    }
  }
  return (
    <div className="btn-box">
      <div>
        <div>{count - 1}</div>
        <button onClick={increment}>+</button>
        <button disabled={count <= 1 ? true : false} onClick={decrement}>
          -
        </button>
      </div>
      <strong>{totalPrice}&nbsp;INR</strong>
    </div>
  );
};
export default Counter;
