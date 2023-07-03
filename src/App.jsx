import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

const setlocalStorage = (info) => {
  localStorage.setItem("list", JSON.stringify(info));
};

const defaultList = JSON.parse(localStorage.getItem("list") || []);

const App = () => {
  const [value, setValue] = useState(defaultList);

  const addItem = (val) => {
    const newValues = {
      name: val,
      completed: false,
      id: nanoid(),
    };
    const addNewValues = [...value, newValues];
    setValue(addNewValues);
    setlocalStorage(addNewValues);
    toast.success("Item added to the list!");
  };

  const removeItem = (id) => {
    const remove = value.filter((vals) => vals.id !== id);
    setValue(remove);
    setlocalStorage(remove);
    toast.error("Item removed from the list");
  };

  const updateItems = (item) => {
    const Items = value.map((data) => {
      if (data.id == item) {
        const newItem = { ...data, completed: !data.completed };
        return newItem;
      } else return data;
    });
    setValue(Items);
    setlocalStorage(Items);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items list={value} rmv={removeItem} editItem={updateItems} />
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
