import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    return (
      <div className='pokemon-card'>
        <div className='pokemon-info'>
          <p>{ this.props.name }</p>
          <p>{ this.props.type }</p>
          <p>{ `Average weigth: ${this.props.averageWeight} ${this.props.measurementUnit}` }</p>
        </div>
        <div className='pokemon-pic'>
          <img src={ this.props.image } alt={`Picture of ${this.props.name}`} />
        </div>
      </div>
    );
  }
}

export default Pokemon