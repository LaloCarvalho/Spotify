import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

`;

export const Img = styled.img`
  height:500px;
  width:1390px;
  margin-right: 700px;
`;

export const H1 = styled.p`
line-height: 36px;
font-size: 32px;
margin-top:0px;
margin-left:500px;
`;
export const LinksRight = styled(Link)`
  color: black;
  font-size:18px;
  margin-right:600px;

  &:hover {
    color: #1ed760;
    cursor: pointer;
}
`;