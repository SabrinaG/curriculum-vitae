import edisoft from '../../assets/images/edisoft.png';
import ubi from '../../assets/images/ubi.jpeg';
import unisa from '../../assets/images/unisa.svg';
import css3 from '../../assets/images/css3.svg';
import html5 from '../../assets/images/html5.svg';
import react from '../../assets/images/react.svg';
import javaScript from '../../assets/images/java-script.svg';
import { EntetiesLinks, ProjectsLinks } from '../../assets/constants';
import './Professional.css';

const logoStyles = { width: '5em', height: '5em' };

function Professional() {
  return (
    <div>
      <div className="professional-grid-container">
        
        <div className="professional-info-grid-container">
          <div className="professional-info-grid-header">EXPERIENCE</div>
          <div className="professional-info-grid-icon">02/2019 to present</div>
          <div className="professional-info-grid-info">
            <a className="pj-link" href={ProjectsLinks.ATFM}>ATFM</a>
          </div>  
          <div className="professional-info-grid-icon">08/2017 to 02/2019</div>
          <div className="professional-info-grid-info">
            <a className="pj-link" href={ProjectsLinks.CLEAN_SEA_NET}>Clean Sea Net</a>
          </div>
          <div className="professional-info-grid-icon">02/2016 to 08/2018</div>
          <div className="professional-info-grid-info">
            <a className="pj-link" href={ProjectsLinks.IP_SENTINEL}>IPSentinel</a>
          </div>
          <div className="professional-info-grid-icon">08/2016 to 08/2018</div>
          <div className="professional-info-grid-info">
            <a className="pj-link" href={ProjectsLinks.LSAF_SAF}>LSA SAF</a>
          </div>
          <div className="professional-info-grid-logo">
            <img src={edisoft} alt="edisoft" style={logoStyles} />
          </div>
        </div>

        <div className="professional-info-grid-container">
          <div className="professional-info-grid-header">INTERNSHIP</div>
          <div className="professional-info-grid-icon">
            <div>24/03/2015 – 22/05/2015</div>
          </div>
          <div className="professional-info-grid-info">
            <div className="title">Standard for family IEEE1451 - ISO/IEC/IEEE P21451-001/D1.4</div>
          </div>  
          <div className="professional-info-grid-icon">
            <div>25/06/2014 – 17/09/2014</div>
          </div>
          <div className="professional-info-grid-info">
            <div className="sub-title">Extra-curricular Training</div>
          </div>  
          <div className="professional-info-grid-logo">
            <img src={unisa} alt="unisa" style={logoStyles} />
          </div>
        </div>

        <div className="professional-info-grid-container">
          <div className="professional-info-grid-header">EDUCATION</div>
          <div className="professional-info-grid-icon">16/09/2013 – 15/10/2015</div>
          <div className="professional-info-grid-info">
            <div className="title">Electrical and Computer Engineering - Bionic Systems</div>
            <div className="sub-title">Master Degree</div>
          </div>
          <div className="professional-info-grid-logo">
            <img src={ubi} alt="ubi" style={logoStyles} />
          </div>
          <div className="professional-info-grid-icon">20/09/2010 – 02/10/2013</div>
          <div className="professional-info-grid-info">
            <div className="title">Bioengineering</div>
            <div className="sub-title">Bachelor Degree</div>
          </div>
          <div className="professional-info-grid-logo"></div>
        </div>

        <div className="professional-info-grid-container-skills">
          <div className="professional-info-grid-header">SKILLS</div>
          <div className="professional-logo-grid">
            <div className="grid-logo">
              <img src={html5} alt="html5" style={logoStyles} />
            </div>
            <div className="grid-logo">
              <img src={react} alt="react" style={logoStyles} />
            </div>
            <div className="grid-logo">
              <img src={javaScript} alt="javaScript" style={logoStyles} />
            </div>
            <div className="grid-logo">
              <img src={css3} alt="css3" style={logoStyles} />
            </div>
          </div>
        </div>

        <div className="professional-info-grid-container">
          <div className="professional-info-grid-header">DRIVING LICENCE</div>
          <div className="professional-info-grid-icon"></div>
          <div className="professional-info-grid-info">B1, B</div>  
        </div>

        </div>
    </div>
  );
}

export default Professional;
