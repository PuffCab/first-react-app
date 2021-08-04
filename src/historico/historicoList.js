import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

const List = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
//   const [searchResult, setSearchResult] = useState(); otra opcion era crear este State , pasar result seatResult(result) y meter una if condition con searchResult en JSX

  const onInputChange = (event) => {
    // console.log(`event`, event.target.value)
    setInput(event.target.value);
    const value = event.target.value.toLowerCase();

    // console.log(`value`, value)

    //     result = data.filter((person) => {
    //         return person.name.search(value) != -1
    //    })  PORQUE NO FUNCIONA?
    // serchResult(result)
  };
  //  console.log(`DATA`, data)
  // console.log(`input`, input)
  //   console.log(`results`, results);

  const result = data.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/"
      );
      const obj = await response.json();
      // console.log(`object`, obj)
      setData(obj.results);
    };
    getData();
  }, []);
  console.log(`data`, data);

  console.log(`input`, input);
  return (
    <div>
      <input type="text" name={input} onChange={onInputChange}></input>
      {result &&
        result.map((item) => {
          return <ListItem key={item.id} character={item} />;
        })}
    </div>
  );
};

export default List;
