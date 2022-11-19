import styled from 'styled-components';

export const StyledPersonnel = styled.div`
  /* width: 30%; */
  flex-grow: 1;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.personnel};
`

export const StyledProfessional = styled.div`
  /* width: 70%; */
  flex-grow: 1;
  color: ${(props) => props.theme.textReverse};
  background-color: ${(props) => props.theme.professional};
`

export const StyledGallery = styled.div`
  /* width: 70%; */
  flex-grow: 1;
  color: ${(props) => props.theme.textReverse};
  background-color: ${(props) => props.theme.gallery};
`