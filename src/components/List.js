import React, {useState,useEffect} from 'react'
import ListItem from './ListItem'

const List = () => {
    
    const [data, setData] = useState()
    
    useEffect(() => {
        
        console.log("useEffect")
        const getData = async () => {
            
            const response = await fetch('https://rickandmortyapi.com/api/character/');
            const obj = await response.json();
            console.log(`object`, obj)
            setData(obj.results)
        }
        getData()

    }, [])


    return (
        <div>
            {
                data && data.map(item => {
                    return (
                        <ListItem key={item.id} character={item} />
                        
                    )
                })
            }
            
        </div>
    )
}

export default List
