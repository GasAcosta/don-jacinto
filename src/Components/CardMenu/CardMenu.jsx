import { menu } from "../../itemMock";
import { useState, useEffect } from "react";
import Card from "../Card/Card";

const CardMenu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemList = new Promise((resolve) => {
      resolve(menu);
    });

    itemList
      .then((res) => {
        setItems(res);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  return (
    <Card items={items} />
  );
};

export default CardMenu;
