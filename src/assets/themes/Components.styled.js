import styled from 'styled-components';

export const StyledPersonnel = styled.div`
  width: 30%;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.personnel};
`

export const StyledProfessional = styled.div`
  width: 70%;
  color: ${(props) => props.theme.textReverse};
  background-color: ${(props) => props.theme.professional};
`

export const StyledGallery = styled.div`
  width: 70%;
  color: ${(props) => props.theme.textReverse};
  background-color: ${(props) => props.theme.gallery};
`