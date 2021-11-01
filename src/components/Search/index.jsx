/* eslint-disable */
import React, { Component } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: this.props.search,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    try {
      if (this.props.search !== prevProps.search) {
        this.setState({ searchText: this.props.search });
      }
    } catch (e) {
      console.log(e);
    }
  }

  onSearchChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.query.value !== this.props.search) {
      this.props.onSearch(this.query.value);
      e.currentTarget.reset();
    }
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label className="is-hidden" htmlFor="search">
          Search
        </label>
        <input
          type="search"
          onChange={this.onSearchChange}
          name="search"
          value={this.state.searchText}
          ref={(input) => (this.query = input)}
          placeholder="Search for GIFs..."
        />
        <button type="submit" id="submit" className="search-button">
          <SearchOutlined style={{ color: 'black' }} />
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  search: PropTypes.string,
};

export default SearchForm;
