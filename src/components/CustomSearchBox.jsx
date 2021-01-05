import { connectSearchBox } from 'react-instantsearch-dom';
import React, { Component } from 'react';

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <form noValidate action="" role="search">
    <input
      type="search"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
    />
    <button onClick={() => refine('')}>Reset query</button>
  </form>
);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;