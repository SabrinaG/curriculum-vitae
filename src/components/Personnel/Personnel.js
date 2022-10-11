import {
  CloudDownload,
  PhoneIphone,
  LocationOn,
  Email,
  GitHub,
  LinkedIn,
  LibraryMusic,
  FitnessCenter,
  CardTravel,
  PhotoCamera,
} from '@material-ui/icons';
import React, { Fragment, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.svg';
import PortugueseFlag from '../../assets/images/Portuguese_flag.svg';
import EnglishFlag from '../../assets/images/English_flag.svg';
import { useResumeContext } from '../../context/ResumeContext';
import ModalMessage from '../Modal/ModalMessage';
import ModalFrame from '../Modal/ModalFrame';
import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';
import LoadingSpinner from '../../containers/LoadingSpinner/LoadingSpinner';
import { fetchProfileInfo } from '../../store/profile/actions';
import { selectLoadingProfileInfo, selectProfileInfo, selectProfileData } from '../../store/profile/selectors';
import { ContactsInfo, LanguagesInfo, HobbiesInfo, SET_TIMER } from '../../assets/constants';
import './Personnel.css';

const imageStyles = { width: '250px', height: '250px', borderRadius: '50%' };
const iconStyles = { width: '0.8em', height: '0.8em', color: 'white' };
const flagStyles = { width: '1.5em', height: '1.5em' };

const myCV = require('../../assets/cv.pdf');

function Personnel() {
  const dispatch = useDispatch();
  const resumeContext = useResumeContext();

  const refMessage = useRef(null);
  const refFrame = useRef(null);

  const [showModalMessage, setShowModalMessage] = useState(false);
  const [showModalFrame, setShowModalFrame] = useState(false);
  const [loadingState, setLoadingState] = useState(null);
  const [errorState, setErrorState] = useState(null);

  const loadingProfileInfo = useSelector(selectLoadingProfileInfo);
  const profileInfo = useSelector(selectProfileInfo);
  const profileData = useSelector(selectProfileData);

  const toogleShowModalMessage = useCallback(flag =>
    (flag ? setShowModalMessage(flag) : setShowModalMessage(!showModalMessage)), [showModalMessage],
  );

  const toogleShowModalFrame = useCallback(flag =>
    (flag ? setShowModalFrame(flag) : setShowModalFrame(!showModalFrame)), [showModalFrame],
  );

  const renderModalMessage = useCallback(() => (
    <ErrorBoundary component="message modal">
      <ModalMessage
        modalTitle="About me"
        modalText={profileData?.summary || 'Sorry! The profile summary is currently not available.'}
        handleClose={toogleShowModalMessage}
      />
    </ErrorBoundary>
  ), [profileData?.summary, toogleShowModalMessage]);

  const renderModalFrame = useCallback(() => (
    <ErrorBoundary component="frame modal">
      <ModalFrame handleClose={toogleShowModalFrame} />
    </ErrorBoundary>
  ), [toogleShowModalFrame]);

  useEffect(() => {
    document.addEventListener('click', (event) => {
      if (event.target.matches('.material-icons.close-icon') || !event.target.closest('.modal-text')) {
        if (showModalMessage) {
          toogleShowModalMessage(false);
        }
        if (showModalFrame) {
          toogleShowModalFrame(false);
        }
      }
    });
  }, [toogleShowModalMessage, toogleShowModalFrame]);

  useEffect(() => {
    const handlemouseover = () => {
      toogleShowModalMessage(true);
      renderModalMessage();
    };

    const handlemouseout = () => {
      toogleShowModalMessage(false);
    };

    const elementMessage = refMessage?.current;

    elementMessage?.addEventListener('mouseover', handlemouseover);

    return () => {
      elementMessage?.removeEventListener('mouseout', handlemouseout);
    };
  }, [toogleShowModalMessage, renderModalMessage]);

  useEffect(() => {
    const handlemouseover = () => {
      toogleShowModalFrame(true);
      renderModalFrame();
    };

    const handlemouseout = () => {
      toogleShowModalFrame(false);
    };

    const elementFrame = refFrame?.current;

    elementFrame?.addEventListener('mouseover', handlemouseover);

    return () => {
      elementFrame?.removeEventListener('mouseout', handlemouseout);
    };
  }, [toogleShowModalFrame, renderModalFrame]);

  useEffect(() => {
    dispatch(fetchProfileInfo());

    const intervalProfile = setInterval(() => {
      dispatch(fetchProfileInfo());
    }, SET_TIMER);

    return () => {
      clearInterval(intervalProfile);
    };
  }, [fetchProfileInfo]);

  useEffect(() => {
    setLoadingState(loadingProfileInfo);
  }, [loadingProfileInfo]);

  useEffect(() => {
    setErrorState(profileInfo?.error);
  }, [profileInfo]);

  const showPersonnelLoader = () => (
    <div className="personnel-load-spinner" data-testid="personnel-load-spinner">
      <LoadingSpinner labelColor="white" />
    </div>
  );

  const showPersonnelData = () => (
    <div className="personnel-grid-container" data-testid="personnel-grid-container">
      <div className="personnel-grid-photo" data-testid="personnel-grid-photo">
        <img ref={refMessage} src={avatar} key="avatar" alt="avatar" title="avatar" data-testid="avatar-img" style={imageStyles} />
      </div>
      <div className="personnel-grid-subject" data-testid="personnel-grid-subject">
        <Link to="/">
          <div className="personnel-grid-name" data-testid="personnel-grid-name">
            {(profileInfo && profileInfo?.name) || resumeContext.name}
          </div>
          <div className="personnel-grid-role" data-testid="personnel-grid-role">
            {(profileInfo && profileInfo?.career_role) || resumeContext.role}
          </div>
        </Link>
      </div>
      {(loadingState || !profileData) ? showPersonnelLoader() :
      <div className="personnel-grid-detail" data-testid="personnel-grid-detail">
        <div className="personnel-info-grid-container" data-testid="personnel-info-grid-container">
          <div className="personnel-info-grid-header" data-testid="personnel-info-grid-header">CONTACT</div>
          <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
            <LocationOn style={iconStyles} />
          </div>
          <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">
            {(profileInfo && profileInfo?.location) || ContactsInfo.LOCATION}
          </div>
          <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
            <PhoneIphone style={iconStyles} />
          </div>
          <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">
            <a className="link" data-testid="phone" href={`tel: ${ContactsInfo.PHONE}`}>
              {(profileInfo && profileInfo?.phone_number) || ContactsInfo.PHONE}
            </a>
          </div>
          <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
            <Email style={iconStyles} />
          </div>
          <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">
            <a className="link" data-testid="email" href={`mailto: ${ContactsInfo.EMAIL}`}>
              {(profileInfo && profileInfo?.e_mail) || ContactsInfo.EMAIL}
            </a>
          </div>
        </div>

        <div className="personnel-info-grid-container" data-testid="personnel-info-grid-container">
          <div className="personnel-info-grid-header" data-testid="personnel-info-grid-header">LINKS</div>
          <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
            <GitHub style={iconStyles} />
          </div>
          <a className="link" data-testid="github" href={ContactsInfo.GITHUB} target="_blank" rel="noreferrer">
            <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">Git repo</div>
          </a>
          <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
            <LinkedIn style={iconStyles} />
          </div>
          <a className="link" data-testid="linkedin" href={ContactsInfo.LINKEDIN} target="_blank" rel="noreferrer">
            <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">LinkedIn profile</div>
          </a>
          <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
            <CloudDownload style={iconStyles} />
          </div>
          <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">
            <a className="link" data-testid="cv" ref={refFrame} href={myCV} download="cv_sguia.pdf">Curriculum Vitae</a>
          </div>
        </div>

        <div className="personnel-info-grid-container" data-testid="personnel-info-grid-container">
          <div className="personnel-info-grid-header" data-testid="personnel-info-grid-header">LANGUAGES</div>
          {LanguagesInfo && LanguagesInfo.map((language, index) => (
            <Fragment key={`lg-${index}`}>
              <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
                <img
                  src={language === 'Portuguese' ? PortugueseFlag : EnglishFlag}
                  alt={`${language}_flag`}
                  title={`${language}_flag`}
                  data-testid={`${language}_flag`}
                  style={flagStyles}
                />
              </div>
              <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">{language}</div>
            </Fragment>
          ))}
        </div>

        <div className="personnel-info-grid-container" data-testid="personnel-info-grid-container">
          <div className="personnel-info-grid-header" data-testid="personnel-info-grid-header">HOBBIES</div>
          <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
            <LibraryMusic style={iconStyles} />
          </div>
          <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">{HobbiesInfo[0]}</div>
          <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
            <FitnessCenter style={iconStyles} />
          </div>
          <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">{HobbiesInfo[1]}</div>
          <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
            <CardTravel style={iconStyles} />
          </div>
          <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">{HobbiesInfo[2]}</div>
          <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
            <PhotoCamera style={iconStyles} />
          </div>
          <Link to="/gallery" className="personnel-info-grid-info" data-testid="personnel-info-grid-info">{HobbiesInfo[3]}</Link>
          {/* <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">{HobbiesInfo[3]}</div> */}
        </div>
      </div>
      }
      {showModalMessage &&
        renderModalMessage()
      }
      {showModalFrame &&
        renderModalFrame()
      }
    </div>
  );

  const showPersonnelError = () => (
    <ErrorBoundary component="personnel information">
      {showPersonnelData()}
    </ErrorBoundary>
  );

  const renderPersonnelData = () => (errorState ? showPersonnelError() : showPersonnelData());

  return renderPersonnelData();
}

export default Personnel;
