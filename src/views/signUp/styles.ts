import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { FormControlLabel, Select } from '@material-ui/core';

export const Container = styled.div`
  padding: 10px;
  text-align: left;
  margin-left: 590px;
  margin-right: 590px;
`;

export const Image = styled.img`
  height: 60px;
  margin-top: 50px;
  margin-left: 140px;
`;

export const Subtitle = styled.h2`
  text-align: center;
  line-height: 36px;
  letter-spacing: -0.04em;
  margin-top: 40px;
  font-size: 32px;
`;

export const Button = styled.button`
  border-radius: 500px;
  font-size: inherit;
  padding: 18px 36px;
  background-color: #1ed760;
  color: black;
  font-weight: bold;
  text-align: center;
  border: none;
  margin-top: 10px;
  margin-left: 150px;

  &:hover {
    transform: scale(1.04);
}
`;

export const ButtonFacebook = styled.button`
  border-radius: 500px;
  font-size: inherit;
  padding: 14px 32px;
  background-color: #1877f2;
  color: white;
  font-weight: bold;
  text-align: center;
  border: none;  
  margin-left: 85px;

  &:hover {
    transform: scale(1.04);
}
`;

export const Traco = styled.div`
  width: 92%;
  margin-bottom: 50px;
  padding-top: 50px;
  border-bottom: 1px #ccc solid;
`;

export const TextInput = styled(TextField)`
  width: 450px;
`;

export const TextDate = styled(TextField)`
  width: 100px;
`;

export const Check = styled(FormControlLabel)`
  padding-bottom: 30px;
`;

export const Dropdown = styled(Select)`
  margin-right: 25px;
  margin-left: 25px;
  width: 200px;
`;

export const P = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 3px;
  margin-top: 50px;
`;

export const P2 = styled.p`
  font-size: 12px;
`;

export const P3 = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-left: 120px;
  margin-top: 30px;
  margin-bottom: 50px;
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