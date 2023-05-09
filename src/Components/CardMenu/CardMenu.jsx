import Card from "../Card/Card";

const CardMenu = ({ items }) => {
  return (
    <div>
      {items.map((element) => {
        return <Card key={element.id} element={element} />;
      })}
    </div>
  );
};

export default CardMenu;
