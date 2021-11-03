import styled from 'styled-components';
import Page from '../../components/page';
import { TextField } from "@material-ui/core";

export const Container = styled(Page)`

`;

export const InnerContainer = styled.div`
    width: 1350px;
    margin: 50px auto;
    min-height: 40vh;
`;

export const Title = styled.h1`

`;

export const PlaylistContainer = styled.div`
    
`;

export const PlaylistDiv = styled.div`
    
`;

export const Musica = styled.div`
padding: 20px;

`;

export const TextInput = styled(TextField)`
  margin-top: 558px;
  width: 450px;
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
  margin-left:15px;
  

  &:hover {
    transform: scale(1.04);
}
`;
