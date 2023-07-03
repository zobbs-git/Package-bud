import SingleItem from "./SingleItem";

const Items = ({ list, rmv, editItem }) => {
  return (
    <div className="items">
      {list.map((data) => {
        return (
          <SingleItem
            removeItem={rmv}
            key={data.id}
            data={data}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
  //   return <SingleItem />;
};
export default Items;
