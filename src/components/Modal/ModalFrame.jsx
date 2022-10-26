/* eslint-disable global-require */
import React from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import UrlFrame from '../Frame/Frame';
import './Modal.css';

const modalFrame = ({ handleClose }) => (
  <Modal open>
    <div id="modal-wrapper" data-testid="modal-wrapper">
      <div className="modal-header" data-testid="modal-header">
        <div className="fullscreen-icon-button" data-testid="fullscreen-icon-button">
          <button type="button" title="full screen" className="full-screen-button" data-testid="full-screen">
            <a href={require('../../assets/files/cv.pdf')} target="_blank" rel="noreferrer" data-testid="full-screen-button">
              <i className="material-icons full-screen-icon"> fullscreen </i>
            </a>
          </button>
        </div>
        <div className="close-icon-buttons" data-testid="close-icon-buttons">
          <button onClick={handleClose} type="button" title="close" className="close-button" data-testid="close-button">
            <i className="material-icons close-icon"> close </i>
          </button>
        </div>
      </div>
      <div className="modal-text" data-testid="modal-text">
        <UrlFrame />
      </div>
    </div>
  </Modal>
);

modalFrame.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default modalFrame;
