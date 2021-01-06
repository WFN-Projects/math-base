import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
} from 'react-instantsearch-dom';
import './App.css';
import CustomHits from './components/CustomHits';
import CustomSearchBox from './components/CustomSearchBox';
import Paper from "@material-ui/core/Paper";
import { library } from '@fortawesome/fontawesome-svg-core'

//actual search client
const algoliaClient = algoliasearch(
  '1QZ1KS7XU1',
  '64c5bbe394f75e33424ac7026a9a5621'
);
//proxy search client
const searchClient = {
  async search(requests) {
    // change conditional if any of the other facets are faked
    if (requests.every(({ params: { query } }) => Boolean(query) === false)) {
      return {
        results: requests.map(params => {
          // fake something of the result if used by the search interface
          return {
            processingTimeMS: 0,
            nbHits: 0,
            hits: [],
            facets: {},
          };
        }),
      };
    }
    return algoliaClient.search(requests);
  },
  async searchForFacetValues(requests) {
    return algoliaClient.searchForFacetValues(requests);
  },
};

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header>Math Base</header>
        <p class="sub">A motto will go here one day...</p>
        <div className="container">
          <Paper>
            <InstantSearch searchClient={searchClient} indexName="FINAL_FORMULAS">
              <div className="search-panel">
                <div className="search-panel__results">
                  <CustomSearchBox/>
                  <CustomHits/>
                </div>
              </div>
            </InstantSearch>
          </Paper>
        </div>
      </div>
    );
  }
}


export default App;
