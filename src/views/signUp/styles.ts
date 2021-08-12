import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const Container = styled.div`
  padding: 10px;
  text-align: center;
`;

export const Image = styled.img`
  height: 60px;
  margin-top: 50px;
  
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
  padding: 14px 32px;
  background-color: #1ed760;
  color: black;
  font-weight: bold;
  text-align: center;
  border: none;
  margin-top: 10px;

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

  &:hover {
    transform: scale(1.04);
}
`;

export const Traco = styled.div`
  width: 30%;
  margin-left: 35%;
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