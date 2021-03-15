import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
} from 'react-instantsearch-dom';
import './App.css';
import CustomHits from './components/CustomHits';
import SearchBox from './components/CustomSearchBox';
import Paper from "@material-ui/core/Paper";
import { library } from '@fortawesome/fontawesome-svg-core';
import Modal from './components/Modal'

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
  constructor(props) {
    super(props)
    this.modal1 = React.createRef()
    this.modal2 = React.createRef()
  }

  render() {
    return (
      <div className="App">
        <div className="Title">
          <h1>Math Base</h1>
        </div>
        <div className="Motto">
          <p class="sub">A motto will go here one day...</p>
        </div>
        <div className="info">
          <a onClick={() => {this.modal1.current.openModal()}}>About Us</a>
          <Modal id="modal1" name="About Us" ref={this.modal1}>
            <p>Hi there!</p>
            <p>This project was created with ❤️ by the Western Founders Network (WFN) Projects team of 2020-21. Checkout more about WFN here!</p>
            <p>Check out the team on LinkedIn:</p>
            <p><a href="https://www.linkedin.com/in/jack-peplinski-054561161/" target="_blank">Jack Peplinski</a></p>
            <p><a href="https://www.linkedin.com/in/keonjin/" target="_blank">Keon Jin</a></p>
            <p><a href="https://www.linkedin.com/in/joseph-siy/" target="_blank">Joey Siy</a></p>
            <p><a href="https://www.linkedin.com/in/nicholas-chong-/" target="_blank">Nicholas Chong</a></p>
            <p><a href="https://www.linkedin.com/in/anselzeng/" target="_blank">Ansel Zeng</a></p>
          </Modal>
          <a onClick={() => {this.modal2.current.openModal()}}>How to Use</a>
          <Modal id="modal2" name="How to Use" ref={this.modal2}>
            <p>Type in the name of a formula, and MathBase will respond with formulas that have a similar name.</p>
            <p>To copy the LaTex code for a formula, click the "Copy LaTex" button on the right of a result.</p>
          </Modal>
        </div>
        <div className="container">
          <Paper>
            <InstantSearch searchClient={searchClient} indexName="FINAL_FORMULAS">
              <div className="search-panel">
                <div className="search-panel__results">
                  <SearchBox/>
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
