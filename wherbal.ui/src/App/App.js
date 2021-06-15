import React from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Helpers/routes';
import Nav from '../Components/Navbar';
import fbConnection from '../Helpers/fbConnection';
import UserData from '../Helpers/Data/userData';

fbConnection();

class App extends React.Component {
  state = {
    user: null,
    authed: null,
  };

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      console.warn('Appjs user check', user.uid);
      if (user) {
        user
          .getIdToken()
          .then((token) => sessionStorage.setItem('token', token));
        UserData.getUserByFirebaseUid(user.uid).then((response) => {
          this.setState({
            user: response,
            authed: true,
          });
        });
      } else {
        this.setState({ user: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <Nav user={this.state.user} />
          <Routes authed={this.state.authed} user={this.state.user} />
        </Router>
        <div className="spacer"></div>
      </div>
    );
  }
}

export default App;
