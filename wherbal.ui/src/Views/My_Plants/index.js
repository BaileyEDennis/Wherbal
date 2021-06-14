import React from 'react';
import HerbData from '../../Helpers/Data/herbData';
import ListCard from '../../Components/Cards/ListCard';

class myPlants extends React.Component {
  state = {
    herbs: [],
  };

  getUserHerbs = () => {
    if (this.props.user === null) {
      console.warn('not yet');
    } else {
      HerbData.getAllSavedlistHerbs(this.props.user.id).then((response) => {
        this.setState({
          herbs: response,
        });
      });
    }
  };

  removeHerb = (key) => {
    HerbData.DeleteSavedHerb(key);
    this.getUserHerbs();
  };

  componentDidMount() {
    this.getUserHerbs();
  }

  render() {
    const { herbs, user } = this.state;
    const renderHerbs = () => herbs.map((herb) => (<ListCard deleteHerb={this.removeHerb} key={herb.id} herb={herb} />));
    if (user === null) {
      return <h1>Loading...</h1>;
    }
    return (
      <>
        <h1>Plants I have</h1>
        <div
          id="allherbs-cards-container"
          className="d-flex justify-content-around flex-wrap"
        >
          {renderHerbs()}
        </div>
      </>
    );
  }
}

export default myPlants;
