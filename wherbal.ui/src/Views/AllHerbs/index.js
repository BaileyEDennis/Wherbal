import React from 'react';
import HerbData from '../../Helpers/Data/herbData';
import HerbCard from '../../Components/Cards/HerbCard';

class AllHerbs extends React.Component {
  state = {
    herbs: [],
  };

  componentDidMount() {
    HerbData
      .getAllHerbs()
      .then((response) => {
        this.setState({
          herbs: response,
        });
        console.warn(response);
      });
  }

  render() {
    const { herbs } = this.state;
    const renderHerbs = () => herbs.map((herb) => (<HerbCard key={herb.id} herb={herb}/>));

    return (
        <>
        <div id='cards-container' className='d-flex flex-wrap justify-content-center'>
            {renderHerbs()}
        </div>
        </>
    );
  }
}

export default AllHerbs;
