import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchInput extends Component {
  state = {
    text: '',
    greetingColor: 0,
  };

  componentDidMount() {
    this.setState({ greetingColor: Math.floor(Math.random() * 7) + 1 });
  }

  handleSubmit = () => {
    this.props.history.push(`/search/${this.state.text}`);
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { greetingColor } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Search"
          type="text"
          name="text"
          className={`search-input color-half-border-${greetingColor}`}
          value={this.state.text}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default withRouter(SearchInput);