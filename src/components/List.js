import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import Card from "./Card"
import { Grid } from '@material-ui/core/';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const List = () => {
    const classes = useStyles();  

  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [page, setpage] = useState(1)
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
//   console.log(`RESULT`, result)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character?name="
      );
      const obj = await response.json();
      console.log(`PAGES`)
      setData(obj.results);
      const setPage = obj.info.pages
    };
    getData();
  }, []);
  console.log(`data`, data);

  console.log(`input`, input);
  return (
    <div>
      <input type="text" name={input} onChange={onInputChange} className="inputStyle" placeholder="Search..." ></input>
      <Grid container spacing={4} justify='center'>
      {result &&
      
        
        result.map((item) => {
          return <ListItem key={item.id} character={item} />;
        })}
        </Grid>

        <div className={classes.root}>
            <Pagination count={10} />
        </div>
    </div>

  );
};

export default List;
