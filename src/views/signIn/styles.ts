import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  margin-left: 450px;
  margin-right: 500px;
  text-align: rigth;
`;
export const H2 = styled.h2`
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 3px;
`;

export const ButtonFacebook = styled.button`
  width:450px;
  background-color: white;
  border-radius: 100px;
  font-size: inherit;
  padding: 5px;
  font-weight: bold;
  text-align: center;  
  border-color: Black;
  margin-right: 100px;
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
  }
`;

export const ButtonGoogle = styled.button`
  width:450px;
  margin-top: 8px;
  background-color: white;
  border-radius: 100px;
  font-size: inherit;
  padding: 5px;
  font-weight: bold;
  text-align: center;  
  border-color: Black;
  margin-right: 50px;
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
  }
`;

export const ButtonApple = styled.button`
  width:450px;
  margin-top: 8px;
  background-color: white;
  border-radius: 100px;
  font-size: inherit;
  padding: 5px;
  font-weight: bold;
  text-align: center;  
  border-color: Black;
  margin-right: 100px;
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
}
`;

export const Linha = styled.h1`
  font-weight: inherit;
  text-align: center;
  font-size: 15px;
  margin-top: 20px;
`;

export const H1 = styled.h1`
  font-weight: inherit;
  text-align: left;
  font-size: 15px;
  margin-top: 3px;
`;

export const TextInput = styled(TextField)`
  margin-top: 558px;
  width: 450px;
`;
export const u = styled.u`
  font-weight: inherit;
  text-align: left;
  font-size: 15px;
  margin-top: 3px;
`;

export const ButtonEntrar = styled.button`
  
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

export const ButtonInscrever = styled.button`
  width:450px;
  background-color: white;
  border-radius: 100px;
  font-size: inherit;
  padding: 5px;
  font-weight: bold;
  text-align: center;  
  border-color: Black;
  margin-right: 100px;

  &:hover {
    transform: scale(1.04);
}
`;