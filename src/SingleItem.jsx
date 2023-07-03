import { useState } from "react";

const SingleItem = ({ removeItem, data, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={data.completed}
        onChange={() => editItem(data.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: data.completed && "line-through",
        }}
      >
        {data.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(data.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
