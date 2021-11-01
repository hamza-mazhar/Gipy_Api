/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeadInterface extends Component {
  handleClick = (text) => {
    const { headerButton } = this.props;
    headerButton(text);
  };

  render() {
    return (
      <div className="wrapper-head">
        <h1 className="main-title">
          <a
            href="/#"
            onClick={() => this.handleClick('trending')}
            data-testid="header_with_GifSearch_button"
          >
            GifSearch
          </a>
        </h1>
        <ul className="main-list">
          <li>
            <a
              href="/#"
              onClick={() => this.handleClick('Reactions')}
              data-testid="header_with_Reactions_button"
            >
              Reactions
            </a>
          </li>
          <li>
            <a
              href="/#"
              onClick={() => this.handleClick('Entertainment')}
              data-testid="header_with_Entertainment_button"
            >
              Entertainment
            </a>
          </li>
          <li>
            <a
              href="/#"
              onClick={() => this.handleClick('Sports')}
              data-testid="header_with_Sports_button"
            >
              Sports
            </a>
          </li>
          <li>
            <a
              href="/#"
              onClick={() => this.handleClick('Stickers')}
              data-testid="header_with_Stickers_button"
            >
              Stickers
            </a>
          </li>
          <li>
            <a
              href="/#"
              onClick={() => this.handleClick('Artists')}
              data-testid="header_with_Artists_button"
            >
              Artists
            </a>
          </li>
          <li>
            <a
              href="/#"
              onClick={() => this.handleClick('Cartoons')}
              data-testid="header_with_Cartoon_button"
            >
              Cartoon
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

HeadInterface.propTypes = {
  headerButton: PropTypes.func,
};

export default HeadInterface;
