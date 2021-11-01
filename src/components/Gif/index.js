/* eslint-disable */

import React, { useState } from 'react';
import Details from '../Details';
import PropTypes from 'prop-types';
import './gif.css';

const Gif = (props) => {
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleClick = (images) => {
    setVisible(true);
    setModalData(images);
  };
  return (
    <>
      <Details
        modalData={modalData}
        visible={visible}
        setVisible={setVisible}
      />
      <li className="gif-wrap">
        <div className="image_container">
          <img
            className="image"
            onClick={() => handleClick(props.data.images)}
            src={props.data.images.fixed_height_still.url}
            alt=""
          />
        </div>
      </li>
    </>
  );
};

Gif.propTypes = {
  data: PropTypes.object,
};

export default Gif;
