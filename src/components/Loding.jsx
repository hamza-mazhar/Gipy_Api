import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
  return (
    <div className="loader">
      <Spin />
    </div>
  );
};

export default Loading;
