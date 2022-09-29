/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ubi from '../../assets/images/ubi.jpeg';
import unisa from '../../assets/images/unisa.svg';
import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';
import LoadingSpinner from '../../containers/LoadingSpinner/LoadingSpinner';
import { fetchExperienceInfo, fetchEducationInfo } from '../../store/profile/actions';
import {
  selectLoadingExperienceData,
  selectLoadingEducationData,
  selectExperienceData,
  selectInternshipData,
  selectEducationData,
} from '../../store/profile/selectors';
import { SkillsList, EntetiesLinks, ProjectsLinks, PersonnelInfo } from '../../assets/constants';
import './Professional.css';

const logoStyles = { width: '5em', height: '5em' };

function Professional() {
  const dispatch = useDispatch();

  const [loadingState, setLoadingState] = useState(true);
  const [errorState, setErrorState] = useState(null);

  const loadingExperienceData = useSelector(selectLoadingExperienceData);
  const loadingEducationData = useSelector(selectLoadingEducationData);
  const experienceData = useSelector(selectExperienceData);
  const internshipData = useSelector(selectInternshipData);
  const educationData = useSelector(selectEducationData);

  useEffect(() => {
    dispatch(fetchExperienceInfo());
    dispatch(fetchEducationInfo());
  }, [dispatch]);

  useEffect(() => {
    setLoadingState(loadingExperienceData || loadingEducationData);
  }, [loadingExperienceData, loadingEducationData]);

  useEffect(() => {
    setErrorState(experienceData?.error || internshipData?.error || educationData?.error);
  }, [experienceData, internshipData, educationData]);

  const showProfessionalData = () => (
    <div>
      <div className="professional-grid-container" data-testid="professional-grid-container">

        <div className="professional-info-grid-container" data-testid="professional-experience-container">
          <div className="professional-info-grid-header" data-testid="professional-experience-header">EXPERIENCE</div>
          {experienceData && Object.keys(experienceData).map((company, companyIndex) => (Object.keys(experienceData[company]).map((project, projectIndex) => (
            <Fragment key={`xp-${companyIndex}-${projectIndex}`}>
              <div className="professional-info-grid-date" data-testid="professional-experience-date">
                {`${experienceData[company][project].start} to ${experienceData[company][project].stop}`}
              </div>
              <div className="professional-info-grid-info" data-testid="professional-experience-info">
                <a className="pj-link" data-testid="experience-link" href={ProjectsLinks[project]} target="_blank" rel="noreferrer">{`${project}`}</a>
              </div>
              {companyIndex === 0 && projectIndex === 0 &&
                <div className="professional-info-grid-logo" data-testid="professional-experience-logo">
                  <img
                    src={require(`../../assets/images/${company.toLowerCase()}.png`)}
                    alt={company.toLowerCase()}
                    title={company.toLowerCase()}
                    data-testid="company_logo"
                    style={logoStyles}
                  />
                </div>
              }
            </Fragment>
          ))))}
        </div>

        <div className="professional-info-grid-container" data-testid="professional-internship-container">
          <div className="professional-info-grid-header" data-testid="professional-info-grid-header">INTERNSHIP</div>
          <div className="professional-info-grid-date" data-testid="professional-info-grid-date">
            <div>24/03/2015 – 22/05/2015</div>
          </div>
          <div className="professional-info-grid-info" data-testid="professional-info-grid-info">
            <div className="title" data-testid="title">Standard for family IEEE1451 - ISO/IEC/IEEE P21451-001/D1.4</div>
          </div>
          <div className="professional-info-grid-date" data-testid="professional-info-grid-date">
            <div>25/06/2014 – 17/09/2014</div>
          </div>
          <div className="professional-info-grid-info" data-testid="professional-info-grid-info">
            <div className="sub-title" data-testid="sub-title">Extra-curricular Training</div>
          </div>
          <div className="professional-info-grid-logo" data-testid="professional-info-grid-logo">
            <a className="pj-link" data-testid="pj-link" href={EntetiesLinks.UNISA} target="_blank" rel="noreferrer">
              <img src={unisa} alt="UNISA" title="UNISA" style={logoStyles} />
            </a>
          </div>
        </div>

        <div className="professional-info-grid-container" data-testid="professional-education-container">
          <div className="professional-info-grid-header" data-testid="professional-info-grid-header">EDUCATION</div>
          <div className="professional-info-grid-date" data-testid="professional-info-grid-date">16/09/2013 – 15/10/2015</div>
          <div className="professional-info-grid-info" data-testid="professional-info-grid-info">
            <div className="title" data-testid="title">Electrical and Computer Engineering - Bionic Systems</div>
            <div className="sub-title" data-testid="sub-title">Master Degree</div>
          </div>
          <div className="professional-info-grid-date" data-testid="professional-info-grid-date">20/09/2010 – 02/10/2013</div>
          <div className="professional-info-grid-info" data-testid="professional-info-grid-info">
            <div className="title" data-testid="title">Bioengineering</div>
            <div className="sub-title" data-testid="sub-title">Bachelor Degree</div>
          </div>
          <div className="professional-info-grid-logo" data-testid="professional-info-grid-logo">
            <a className="pj-link" data-testid="pj-link" href={EntetiesLinks.UBI} target="_blank" rel="noreferrer">
              <img src={ubi} alt="UBI" title="UBI" style={logoStyles} />
            </a>
          </div>
        </div>

        <div className="professional-info-grid-container-skills" data-testid="professional-skills-container">
          <div className="professional-info-grid-header" data-testid="professional-info-grid-header">SKILLS</div>
          <div className="professional-logo-grid" data-testid="professional-logo-grid">
            {Object.keys(SkillsList).map((skill, index) => (
              <Fragment key={`sk-${index}`}>
                <div className="grid-logo" data-testid="grid-logo">
                  <img
                    src={require(`../../assets/images/${SkillsList[skill]}.svg`)}
                    alt={skill}
                    title={skill}
                    data-testid={skill}
                    style={logoStyles}
                  />
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="professional-info-grid-container" data-testid="professional-driving-container">
          <div className="professional-info-grid-header" data-testid="professional-info-grid-header">DRIVING LICENCE</div>
          <div className="professional-info-grid-date" data-testid="professional-info-grid-date" />
          <div className="professional-info-grid-info" data-testid="professional-info-grid-info">{PersonnelInfo.LICENCE}</div>
        </div>

      </div>
    </div>
  );

  const showProfessionalError = () => (
    <ErrorBoundary component="professional information">
      {showProfessionalData()}
    </ErrorBoundary>
  );

  const showProfessionalLoader = () => (
    <div className="professional-load-spinner" data-testid="professional-load-spinner">
      <LoadingSpinner labelColor="black" />
    </div>
  );

  const renderProfessionalData = () => (errorState ? showProfessionalError() : showProfessionalData());

  return loadingState ? showProfessionalLoader() : renderProfessionalData();
}

export default Professional;
