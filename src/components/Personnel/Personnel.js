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
  PhotoCamera
} from '@material-ui/icons';
import avatar from '../../assets/images/avatar.svg';
import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsInfo, LanguagesInfo, HobbiesInfo } from '../../assets/constants';
import { useResumeContext } from '../../context/ResumeContext';
import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';
import LoadingSpinner from '../../containers/LoadingSpinner/LoadingSpinner';
import { fetchProfileInfo } from '../../store/profile/actions';
import { selectLoadingProfileInfo, selectProfileInfo } from '../../store/profile/selectors';
import './Personnel.css';

const imageStyles = { width: '250px', height: '250px', borderRadius: '50%' };
const iconStyles = { width: '0.8em', height: '0.8em', color: 'white' };
const flagStyles = { width: '1.5em', height: '1.5em' };

const myCV = require("../../assets/cv.pdf");

function Personnel() {
  const dispatch = useDispatch();
  const resumeContext = useResumeContext();

  const [loadingState, setLoadingState] = useState(null);
  const [errorState, setErrorState] = useState(null);

  const loadingProfileInfo = useSelector(selectLoadingProfileInfo);
  const profileInfo = useSelector(selectProfileInfo);

  useEffect(() => {
    dispatch(fetchProfileInfo()); 
  }, [dispatch]);

  useEffect(() => {
    setLoadingState(loadingProfileInfo);
}, [loadingProfileInfo]);

  useEffect(() => {
      setErrorState(profileInfo?.error);
  }, [profileInfo]);

  const showPersonnelError = () => {
    return (
      <ErrorBoundary component="personnel information">
        {renderPersonnelData()}
      </ErrorBoundary>
    );
  }

  const showPersonnelLoader = () => {
    return (
      <div className="personnel-load-spinner" data-testid="personnel-load-spinner">
        <LoadingSpinner labelColor={'white'}/>
      </div>
    );
  }

  const showPersonnelData = () => {
    return (
      <div className="personnel-grid-container" data-testid="personnel-grid-container">
        <div className="personnel-grid-photo" data-testid="personnel-grid-photo">
          <img src={avatar}  alt="avatar" title="avatar" data-testid="avatar-img" style={imageStyles} />
        </div> 
        <div className="personnel-grid-subject" data-testid="personnel-grid-subject">
          <div className="personnel-grid-name" data-testid="personnel-grid-name">
            {(profileInfo && profileInfo?.name) || resumeContext.name}
          </div>
          <div className="personnel-grid-role" data-testid="personnel-grid-role">
            {(profileInfo && profileInfo?.career_role) || resumeContext.role}
          </div>
        </div> 
        {loadingState && loadingState ? showPersonnelLoader() :
          <div className="personnel-grid-detail" data-testid="personnel-grid-detail">
            <div className="personnel-info-grid-container" data-testid="personnel-info-grid-container">
              <div className="personnel-info-grid-header" data-testid="personnel-info-grid-header">CONTACT</div>
              <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
                <LocationOn style={iconStyles}/>
              </div>
              <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">
                {(profileInfo && profileInfo?.location) || ContactsInfo.LOCATION}
              </div>
              <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
                <PhoneIphone style={iconStyles}/>
              </div>
              <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">
                <a className="link" data-testid="phone" href={`tel: ${ContactsInfo.PHONE}`}>
                  {(profileInfo && profileInfo?.phone_number) || ContactsInfo.PHONE}
                </a>
              </div>
              <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
                <Email style={iconStyles}/>
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
                <GitHub style={iconStyles}/>
              </div>
              <a className="link" data-testid="github" href={ContactsInfo.GITHUB} target="_blank" rel="noreferrer">
                <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">Git repo</div>
              </a>
              <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
                <LinkedIn style={iconStyles}/>
              </div>
              <a className="link" data-testid="linkedin" href={ContactsInfo.LINKEDIN} target="_blank" rel="noreferrer">
                <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">LinkedIn profile</div>
              </a>
              <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
                <CloudDownload style={iconStyles}/>
              </div>
              <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">
                <a className="link" data-testid="cv" href={myCV} download="cv_sguia.pdf">Curriculum Vitae</a>
              </div>
            </div>
    
            <div className="personnel-info-grid-container" data-testid="personnel-info-grid-container">
              <div className="personnel-info-grid-header" data-testid="personnel-info-grid-header">LANGUAGES</div>
              {LanguagesInfo && LanguagesInfo.map((language) => {
                return (
                  <Fragment>
                    <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
                      <img src={require(`../../assets/images/${language}_flag.svg`)} alt={`${language}_flag`} title={`${language}_flag`} data-testid={`${language}_flag`} style={flagStyles} />
                    </div>
                    <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">{language}</div>
                  </Fragment>
                )
              })}
            </div>
    
            <div className="personnel-info-grid-container" data-testid="personnel-info-grid-container">
              <div className="personnel-info-grid-header" data-testid="personnel-info-grid-header">HOBBIES</div>
              <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
                <LibraryMusic style={iconStyles}/>
              </div>
              <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">{HobbiesInfo[0]}</div>
              <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
                <FitnessCenter style={iconStyles}/>
              </div>
              <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">{HobbiesInfo[1]}</div>
              <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
                <CardTravel style={iconStyles}/>
              </div>
              <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">{HobbiesInfo[2]}</div>
              <div className="personnel-info-grid-icon" data-testid="personnel-info-grid-icon">
                <PhotoCamera style={iconStyles}/>
              </div>
              <div className="personnel-info-grid-info" data-testid="personnel-info-grid-info">{HobbiesInfo[3]}</div>
            </div>
          </div>
        }
      </div>
    );
  }

  const renderPersonnelData = () => {
    return errorState ? showPersonnelError() : showPersonnelData();
  }

  return renderPersonnelData();
}

export default Personnel;
