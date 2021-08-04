import React from 'react'
import Card from './Card'

const ListItem = (props) => {

    const character = props.character
    console.log(`character`, character)

    return (
        <div>
            {/* <p>{character.name}</p>
            <img src={character.image} alt="rick&morty pictures" /> */}
            <Card imagen={character.image} name={character.name} species={character.species} status={character.status}  />
        </div>
    )
}

export default ListItem
