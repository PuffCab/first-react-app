import React from 'react'

const ListItem = (props) => {

    const character = props.character
    // console.log(`character`, character)

    return (
        <div>
            <p>{character.name}</p>
            <img src={character.image} alt="rick&morty pictures" />
        </div>
    )
}

export default ListItem
