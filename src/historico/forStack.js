import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

const List = () => {
  const [data, setData] = useState();
  const [input, setInput] = useState("");

  const onInputChange = (event) => {
    setInput(event.target.value);
    const value = event.target.value.toLowerCase();
    let result = [];
    result = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setInput(result);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/"
      );
      const obj = await response.json();
      setData(obj.results);
    };
    getData();
  }, []);

  return (
    <div>
      <input type="text" name={input} onChange={onInputChange}></input>
      {data &&
        data.map((item) => {
          return <ListItem key={item.id} character={item} />;
        })}
    </div>
  );
};
export default List;
