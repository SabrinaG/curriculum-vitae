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
import portugal from '../../assets/images/portugal_flag.svg';
import england from '../../assets/images/england_flag.svg';
import { ContactsInfo, LanguagesInfo, HobbiesInfo } from '../../assets/constants';
import { useResumeContext } from '../../context/ResumeContext';
import './Personnel.css';

const imageStyles = { width: '250px', height: '250px', borderRadius: '50%' };
const iconStyles = { width: '0.8em', height: '0.8em', color: 'white' };
const flagStyles = { width: '1.5em', height: '1.5em' };

const myCV = require("../../assets/cv.pdf");

function Personnel() {
  const resumeContext = useResumeContext();

  return (
    <div className="personnel-grid-container">
      <div className="personnel-grid-photo">
        <img src={avatar}  alt="avatar" style={imageStyles} />
      </div> 
      <div className="personnel-grid-subject">
        <div className="personnel-grid-name">
          {resumeContext.name}
        </div>
        <div className="personnel-grid-role">
          {resumeContext.role}
        </div>
      </div> 
      <div className="personnel-grid-detail">
        
        <div className="personnel-info-grid-container">
          <div className="personnel-info-grid-header">CONTACT</div>
          <div className="personnel-info-grid-icon">
            <PhoneIphone style={iconStyles}/>
          </div>
          <div className="personnel-info-grid-info">{ContactsInfo.PHONE}</div>  
          <div className="personnel-info-grid-icon">
            <LocationOn style={iconStyles}/>
          </div>
          <div className="personnel-info-grid-info">{ContactsInfo.LOCATION}</div>
          <div className="personnel-info-grid-icon">
            <Email style={iconStyles}/>
          </div>
          <div className="personnel-info-grid-info">{ContactsInfo.EMAIL}</div>
        </div>
                
        <div className="personnel-info-grid-container">
          <div className="personnel-info-grid-header">LINKS</div>
          <div className="personnel-info-grid-icon">
            <GitHub style={iconStyles}/>
          </div>
          <a className="link" href={ContactsInfo.GITHUB} target="_blank" rel="noreferrer">
            <div className="personnel-info-grid-info">Git repo</div>
          </a>
          <div className="personnel-info-grid-icon">
            <LinkedIn style={iconStyles}/>
          </div>
          <a className="link" href={ContactsInfo.LINKEDIN} target="_blank" rel="noreferrer">
            <div className="personnel-info-grid-info">LinkedIn profile</div>
          </a>
          <div className="personnel-info-grid-icon">
            <CloudDownload style={iconStyles}/>
          </div>
          <div className="personnel-info-grid-info">
            <a className="link" href={myCV} download="cv_sguia.pdf">Curriculum Vitae</a>
          </div>
        </div>

        <div className="personnel-info-grid-container">
          <div className="personnel-info-grid-header">LANGUAGES</div>
          <div className="personnel-info-grid-icon">
            <img src={portugal} alt="pt_flag" style={flagStyles} />
          </div>
          <div className="personnel-info-grid-info">{LanguagesInfo[0]}</div>  
          <div className="personnel-info-grid-icon">
            <img src={england} alt="uk_flag" style={flagStyles} />
          </div>
          <div className="personnel-info-grid-info">{LanguagesInfo[1]}</div>
        </div>

        <div className="personnel-info-grid-container">
          <div className="personnel-info-grid-header">HOBBIES</div>
          <div className="personnel-info-grid-icon">
            <LibraryMusic style={iconStyles}/>
          </div>
          <div className="personnel-info-grid-info">{HobbiesInfo[0]}</div>
          <div className="personnel-info-grid-icon">
            <FitnessCenter style={iconStyles}/>
          </div>
          <div className="personnel-info-grid-info">{HobbiesInfo[1]}</div>
          <div className="personnel-info-grid-icon">
            <CardTravel style={iconStyles}/>
          </div>
          <div className="personnel-info-grid-info">{HobbiesInfo[2]}</div>
          <div className="personnel-info-grid-icon">
            <PhotoCamera style={iconStyles}/>
          </div>
          <div className="personnel-info-grid-info">{HobbiesInfo[3]}</div>
        </div>
      </div>
    </div>
  );
}

export default Personnel;
