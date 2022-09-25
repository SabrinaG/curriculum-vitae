import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import './Modal.css';

const descriptionModal = ({ modalTitle, modalText, handleClose }) => (
  <Modal open>
    <div id="modal-wrapper" data-testid="modal-wrapper">
      <div className="modal-title" data-testid="modal-title">
        { modalTitle && <h1 data-testid="h1-title">{modalTitle}</h1>}
        <button onClick={handleClose} type="button" className="close-button" data-testid="close-button">
          <i className="material-icons close-icon"> close </i>
        </button>
      </div>
      <div className="modal-text" data-testid="modal-text">
        { modalText && <h3 data-testid="h3-text">{modalText}</h3>}
      </div>
    </div>
  </Modal>
);

descriptionModal.propTypes = {
  modalTitle: PropTypes.string,
  modalText: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
};

descriptionModal.defaultProps = {
  modalTitle: '',
  modalText: '',
};

export default descriptionModal;
