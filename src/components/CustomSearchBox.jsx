import { connectSearchBox } from 'react-instantsearch-dom';
import React from 'react';

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <React.Fragment>
    <i class="fas fa-search"></i>
    <input
      width="60vw"
      class="search"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
      placeholder="Enter a formula name..."
    />
    </React.Fragment>
);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;