import React from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import './Modal.css';

const modalMessage = ({ modalTitle, modalText, handleClose }) => (
  <Modal open>
    <div id="modal-wrapper" data-testid="modal-wrapper">
      <div className="modal-header" data-testid="modal-header">
        <div className="modal-title" data-testid="modal-title">
          { modalTitle && <h1 data-testid="h1-title">{modalTitle}</h1>}
        </div>
        <div className="modal-button" data-testid="modal-button">
          <button onClick={() => handleClose(false)} type="button" title="close" className="close-button" data-testid="close-button">
            <i className="material-icons close-icon"> close </i>
          </button>
        </div>
      </div>
      <div className="modal-text" data-testid="modal-text">
        { modalText && <h3 data-testid="h3-text">{modalText}</h3>}
      </div>
    </div>
  </Modal>
);

modalMessage.propTypes = {
  modalTitle: PropTypes.string,
  modalText: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
};

modalMessage.defaultProps = {
  modalTitle: '',
  modalText: '',
};

export default modalMessage;
