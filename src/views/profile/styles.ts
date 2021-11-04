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
    display: inline-block;
`;

export const PlaylistContainer = styled.div`
    background-color: #efefef;
    margin: 10px 0;
    padding: 5px;
    border: solid 1px #ccc;
    text-align: center;
    border-radius: 50px;
    `;

interface PlaylistContainerProps {
    isSelected: boolean;
}

export const PlaylistDiv = styled.div.attrs((props: PlaylistContainerProps) => { })`
    background-color: ${props => props.isSelected ? '#1ed760' : '#fff'};
    margin: 10px 0;
    padding: 5px;
    border: solid 1px #ccc;
    border-radius: 3px;
    display: inline-block;
    width: 500px;
    height: 100px;
    cursor: pointer;
    border-radius: 80px;
    font-size: 24px;
`;

export const MusicaDiv = styled.div`
    padding: 20px;
    text-align: center;
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
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    transform: scale(1.04);
}
`;

export const Image = styled.img`
  height: 40px;
  margin: 10px;
  background-color: #fff;
  border-radius: 30%;
  cursor: pointer;
`;

export const TextInputMusic = styled(TextField)`

`;

export const DivNewMusic = styled.div`

`;
