import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchInput extends Component {
  state = {
    text: '',
  };

  handleSubmit = () => {
    this.props.history.push(`/search/${this.state.text}`);
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Search"
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default withRouter(SearchInput);
