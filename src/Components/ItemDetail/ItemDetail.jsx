import { useParams } from "react-router-dom";
import { comidaSec } from "../../comidaItemMock";
import { generalSec } from "../../generalItemMock";

const ItemDetail = () => {
  const { title } = useParams();
  const comida = comidaSec.find((element) => element.title === title);

  return <div>itemdetail</div>;
};

export default ItemDetail;
