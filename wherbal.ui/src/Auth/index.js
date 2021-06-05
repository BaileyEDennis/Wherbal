import React, { Component } from 'react';

class Auth extends Component {
  render() {
    return (
        <div className="d-flex justify-content-center">
            <button className="signin-button google-logo">
            <i className="fas fa-sign-out-alt"></i> Sign In
            </button>
        </div>
    );
  }
}

export default Auth;
