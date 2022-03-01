import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
  render() {
    return(
      <div className="pokedex">
        {pokemons.map(({id, name, type, averageWeight, image }) => (
          <div key={id}>
          <Pokemon 
            name={name}
            type={type}
            averageWeight={averageWeight}
            image={image}
          />
          </div>
        ))}
      </div>
    );
  }
}

export default Pokedex;
