import React, {useState} from "react";

function Item({ name, category }) {

  const [addCart, setAddCart] = useState(false)

  function handleAddCart() {
    setAddCart((addCart) => !addCart);
  }

  const isCart = addCart ? "in-cart" : "";


  return (
    <li className={isCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"
      onClick={handleAddCart}
      >{ addCart ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
