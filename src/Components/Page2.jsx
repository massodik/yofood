import Carrousel from './Carrousel';
import BarCari from './SearchBar';
import Cards from './Card';
import React, { Component } from 'react';

class Page2 extends Component {
  render() {
    return (
      <div>
        <BarCari />
        <Carrousel />
        <Cards />
      </div>
    );
  }
}

export default Page2;
