import React from 'react';

const urlFrame = () => (
  <iframe
    id="url-frame"
    title="url-frame"
    data-testid="url-frame"
    // eslint-disable-next-line global-require
    src={require('../../assets/files/cv.pdf')}
    style={{
      border: 'none',
      height: '100%',
      width: '100%',
      overflow: 'hidden',
    }}
  />
);

export default urlFrame;
