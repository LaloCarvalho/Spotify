import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import {FormControlLabel,Select} from '@material-ui/core';
export const Container = styled.div`
  padding: 2px;
  margin-left: 450px;
  margin-right: 500px;
  text-align: rigth;
`;

export const Subtitle = styled.h2`
  text-align: center;
  line-height: 36px;
  letter-spacing: -0.04em;
  margin-top: 40px;
  font-size: 32px;
`;

export const Button = styled.button`
  border-radius: 100px;
  font-size: inherit;
  padding: 20px;
  background-color: #1ed760;
  color: black;
  font-weight: bold;
  text-align: center;
  border: none;
  margin-top: 15px;
  margin-left:150px;
  

  &:hover {
    transform: scale(1.04);
}
`;

export const ButtonFacebook = styled.button`
  border-radius: 100px;
  font-size: inherit;
  padding: 20px;
  background-color: #1877f2;
  color: white;
  font-weight: bold;
  text-align: center;
  border: none;  
  margin-left: 80px;

  &:hover {
    transform: scale(1.04);
}
`;

export const TextInput = styled(TextField)`
  margin-top: 558px;
  width: 450px;
`;

export const TextDate = styled(TextField)`
  width: 100px;
`;


export const Check = styled(FormControlLabel)`
  padding-bottom: 50px;
  margin-left: 50;
`;

export const Dropdown = styled(Select)`
  margin-right: center;
  margin-left: center;
  width: 200px;
`;

export const P = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: center;
  margin-top: 50px;
`;

export const P2 = styled.p`
  font-size: 12px;
`;

export const P3 = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-left: center;
  margin-top: center;
  margin-bottom: center;
`;

export const SublinhadoVerdeMaior = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
  color: #3bb954;  
  margin: 0;
  padding: 0;
  display: inline;

  &:hover {
    color: #1ed760;
    cursor: pointer;
}
`;

export const SublinhadoVerdeMenor = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-decoration: underline;
  color: #3bb954;  
  margin: 0;
  padding: 0;
  display: inline;

  &:hover {
    color: #1ed760;
    cursor: pointer;
}
`;