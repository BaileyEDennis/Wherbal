import React from 'react';
import HerbData from '../../Helpers/Data/herbData';
import WishCard from '../../Components/Cards/WishCard';

class WishList extends React.Component {
  state = {
    herbs: [],
  };

  getUserHerbs = () => {
    if (this.props.user === null) {
      console.warn('not yet');
    } else {
      HerbData.getAllWishlistHerbs(this.props.user.id).then((response) => {
        this.setState({
          herbs: response,
        });
      });
    }
  }

  removeHerb = (key) => {
    HerbData.DeleteWishHerb(key);
    this.getUserHerbs();
  };

  moveHerb = (key) => {
    HerbData.addHerbToSavedList(key, this.props.user.id);
    HerbData.DeleteWishHerb(key);
    this.getUserHerbs();
  }

  componentDidMount() {
    this.getUserHerbs();
  }

  render() {
    const { herbs, user } = this.state;
    const renderHerbs = () => herbs.map((herb) => (<WishCard removeHerb={this.removeHerb} moveHerb={this.moveHerb} key={herb.id} herb={herb}/>));
    if (user === null) {
      return (
        <h1>Loading...</h1>
      );
    }
    return (
          <>
          <h1 className='d-flex justify-content-center'>I'm thinking of getting a...</h1>
          <div id='allherbs-cards-container' className='d-flex justify-content-around flex-wrap'>
              {renderHerbs()}
          </div>
          </>
    );
  }
}

export default WishList;
