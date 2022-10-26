import React, { useState, useCallback, Fragment } from 'react';
import { useSelector } from 'react-redux';
import ModalMessage from '../Modal/ModalMessage';
import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';
import { selectProfileData } from '../../store/profile/selectors';
import { AboutBtn, AboutIcon } from './Buttons.styled';

function InfoButton() {
  const [showModalMessage, setShowModalMessage] = useState(false);
  const profileData = useSelector(selectProfileData);

  const toogleShowModalMessage = useCallback(flag =>
    (flag ? setShowModalMessage(flag) : setShowModalMessage(!showModalMessage)), [showModalMessage],
  );

  const renderModalMessage = useCallback(() => (
    <ErrorBoundary component="message modal">
      <ModalMessage
        modalTitle="About me"
        modalText={profileData?.summary || 'Sorry! The profile summary is currently not available.'}
        handleClose={() => toogleShowModalMessage()}
      />
    </ErrorBoundary>
  ), [profileData?.summary, toogleShowModalMessage]);

  return (
    <Fragment>
      <AboutBtn
        onClick={toogleShowModalMessage}
        type="button"
        title="about"
        data-testid="about-btn"
      >
        <AboutIcon className="material-icons info-icon" data-testid="info-icon"> info </AboutIcon>
      </AboutBtn>
      {showModalMessage &&
        renderModalMessage()
      }
    </Fragment>
  );
}

export default InfoButton;
