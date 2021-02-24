import React, { Component } from 'react';
import Pokemon from '../Components/Pokemon';
import pokemons from '../data';
import Button from './Button';

class Pokedex extends Component {
  constructor(props) {
    super(props)

    this.nextPokemon = this.nextPokemon.bind(this)
    // this.previousPokemon = this.previousPokemon.bind(this)
    this.state = {
      pokemonIndex: 0
    }
  }

  nextPokemon() {
    if (this.state.pokemonIndex < pokemons.length - 1) {
      this.setState((previousState, _props) => {
        return {
          pokemonIndex: previousState.pokemonIndex + 1
        }
      })
    } else {
      this.setState((previousState, _props) => {
        return {
          pokemonIndex: 0
        }
      })
    }
  }

  previousPokemon() {
    if (this.state.pokemonIndex > 0) {
      this.setState((previousState, _props) => {
        return {
          pokemonIndex: previousState.pokemonIndex - 1
        }
      })
    } else {
      this.setState((_previousState, _props) => {
        return {
          pokemonIndex: pokemons.length - 1
        }
      })
    }
  }

  render() {
    const listItems = pokemons.map((pokemon, index) => {
      return (
        <div key={index}>
          <Pokemon
            name={pokemon.name}
            type={pokemon.type}
            averageWeight={pokemon.averageWeight.value}
            measurementUnit={pokemon.averageWeight.measurementUnit}
            image={pokemon.image}
          />
        </div>
      );
    });
    return(
      <div className='pokedex'> 
        <div>
        { listItems[ this.state.pokemonIndex ] }
        </div>
        <div className='buttons'>
        <Button onClick={ () => { this.previousPokemon() } } type='Previous'/>
        <Button onClick={ () => { this.nextPokemon() } } type='Next'/>
        </div>
      </div>
    )
  }
}

export default Pokedex;
