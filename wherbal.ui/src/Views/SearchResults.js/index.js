import React, { Component } from 'react';
import HerbCard from '../../Components/Cards/HerbCard';
import HerbData from '../../Helpers/Data/herbData';

export default class SearchResults extends Component {
  state = {
    Results: [],
    searchInput: '',
  };

  componentWillMount() {
    this.showResults();
  }

  showResults = () => {
    const searchInput = this.props.match.params.term;

    HerbData.Search(searchInput.toLowerCase()).then((response) => {
      this.setState({
        Results: response,
      });
    });
  };

  componentDidUpdate(prevState) {
    if (prevState.match.params.term !== this.props.match.params.term) {
      this.showResults();
    }
  }

  render() {
    const { Results } = this.state;
    const showResults = () => Results.map((herb) => (
        <HerbCard key={herb.id} herb={herb} />
    ));

    return (
      <>
        <div
          id="allherbs-cards-container"
          className="d-flex justify-content-around flex-wrap"
        >
        {Results.length ? (
          <div className='product-results-container mt-5'>
            <h1>Were you looking for this?</h1>
            <div className='d-flex flex-wrap justify-content-center'>
              {showResults()}
            </div>
          </div>
        ) : ''
        }
        {!Results.length ? <h1>No Results Founds</h1> : ''}
        </div>
      </>
    );
  }
}
