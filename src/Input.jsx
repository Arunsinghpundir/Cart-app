import { useState } from "react";

const Input = ({ setList, list }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  function addItem() {
    let newList = [...list, [productName, productPrice]];
    setList(newList);
    setProductName("");
    setProductPrice("");
  }
  return (
    <div className="input-box">
      <input
        type="text"
        value={productName}
        onChange={(i) => setProductName(i.target.value)}
        placeholder="Product Name"
      />
      <input
        value={productPrice}
        onChange={(i) => setProductPrice(Number(i.target.value))}
        type="number"
        placeholder="Price of the Product"
      />
      <button
        disabled={productName !== "" && productPrice !== "" ? false : true}
        onClick={addItem}
      >
        Add Product
      </button>
    </div>
  );
};
export default Input;
