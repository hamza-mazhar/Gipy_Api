/* eslint-disable */

import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

const Details = ({ visible, setVisible, modalData }) => {
  return (
    <>
      <Modal
        data-testId="object_with_data"
        title="Gif's Renditions "
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        okButtonProps={{
          style: {
            display: 'none',
          },
        }}
        style={{ resize: 'auto' }}
      >
        {!!modalData && Object.keys(modalData).length > 0 ? (
          <>
            <li className="gif-wrap">
              <img src={modalData.fixed_height.url} alt="" />
            </li>
            <li className="gif-wrap">
              <img src={modalData.fixed_height_downsampled.url} alt="" />
            </li>
            <li className="gif-wrap">
              <img src={modalData.fixed_width_downsampled.url} alt="" />
            </li>
            <li className="gif-wrap">
              <img src={modalData.fixed_height_small.url} alt="" />
            </li>
            <li className="gif-wrap">
              <img src={modalData.fixed_width_small.url} alt="" />
            </li>
            <li className="gif-wrap">
              <img src={modalData.downsized.url} alt="" />
            </li>
            <li className="gif-wrap">
              <img src={modalData.downsized_large.url} alt="" />
            </li>
            <li className="gif-wrap">
              <img src={modalData.downsized_medium.url} alt="" />
            </li>
            <li className="gif-wrap">
              <img src={modalData.downsized_small.url} alt="" />
            </li>
            <li className="gif-wrap">
              <img src={modalData.original.url} alt="" />
            </li>
            <li className="gif-wrap">
              <img src={modalData.looping.url} alt="" />
            </li>
            <li className="gif-wrap">
              <img src={modalData.preview.url} alt="" />
            </li>
            <li className="gif-wrap">
              <img src={modalData.preview_gif.url} alt="" />
            </li>
          </>
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
};

Details.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  modalData: PropTypes.object,
};

export default Details;
