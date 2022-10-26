import styled from 'styled-components';

export const SyledButtons = styled.div`
    position: relative;
    text-align: end;
`;

export const SwitchBtn = styled.button`
    background-color: ${props => props.theme.switchBtn};
    color: ${props => props.theme.switchIcon};
    margin: 5px 5px 0px 0px;
    height: 32px;
    width: 38px;
`;

export const SwitchIcon = styled.i`
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
`;

export const AboutBtn = styled.button`
    background-color: ${props => props.theme.aboutBtn};
    color: ${props => props.theme.aboutIcon};
    margin: 5px 5px 0px 0px;
    height: 32px;
    width: 38px;
`;

export const AboutIcon = styled.i`
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
`;
