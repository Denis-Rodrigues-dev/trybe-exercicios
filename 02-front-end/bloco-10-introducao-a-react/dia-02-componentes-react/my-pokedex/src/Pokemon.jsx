import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, image, averageWeight: { value, measurementUnit } } = this.props;
    return (
      <div className="pokemon">
        <p>{ name }</p>
        <p>{ type }</p>
        <p>average Weight: { `${ value } ${ measurementUnit }` }</p>
        <img src={ image } alt={ name } />
      </div>
    );
  }
}

export default Pokemon;
