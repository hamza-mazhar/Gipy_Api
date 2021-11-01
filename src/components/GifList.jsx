/* eslint-disable */

import React from 'react';
import Gif from './Gif/index';
import NoGifs from './NoResult';
import * as PropTypes from 'prop-types';

const GifList = (props) => {
  const results = props.data;
  let gifs;
  if (results.length) {
    gifs = results.map((gif, idx) => <Gif data={gif} key={idx} />);
  } else {
    gifs = <NoGifs />;
  }

  return (
    <ul className="gif-list" data-testid="resolved">
      {gifs}
    </ul>
  );
};

GifList.propTypes = {
  data: PropTypes.array,
};

export default GifList;
