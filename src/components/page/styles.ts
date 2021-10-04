import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Container = styled.div`

`;

export const Header = styled.div`
  padding-left: center;
  background-color: black;
  text-align: center;
  padding-right: center;
  display: flex;
  align-items: center
`;

export const LinkHome = styled(Link)`
  width: 50vw;
`;

export const LinksRight = styled(Link)`
  display:flex;
  color: white;
  font-weight:bold;
  margin-left: 35px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #1ed760;
    cursor: pointer;
}
`;

export const Footer = styled.div`
  padding: 70px;
  padding-left: 210px;
  background-color: black;
`;

export const ImageTop = styled.img`
  height: 50px;
  margin-right: 500px;
  margin-left: 200px;
`;

export const ImageBottom = styled.img`
  height: 50px;
  margin-right: 90px;  
  width: 14vw;
`;

export const ImageSocialMedia = styled.img`
  height: 40px;
  margin-top: 20px;
  margin-right: 20px;
  background-color: #fff;
  border-radius: 30%;
`;

export const Table = styled.table`
  color: #ccc;
  width: 800px;
  line-height: 40px;
  font-size: 16px;
  text-align: left;
  text-decoration: none;
  display: inline-table;
`;

export const TH = styled.th`
  color: #919496;
`;

export const TR = styled.tr`
  color: #fff;
  
`;

export const TD = styled.td`
  color: #fff;

  &:hover {
    color: #1ed760;
    cursor: pointer;
}
`;

export const P = styled.p`
  color: #919496;
  font-size: 14px;
  display: inline-table;
  text-align: right;
  margin-top: 50px;
  margin-left: 150px;
  line-height: 30px;
`;

export const H3 = styled.h3`
  margin-Top: 0px;
  font-size: 14px;
  display: inline-table;
  padding-right: 40px;
  color: #919496;

  &:hover {
    color: #1ed760;
    cursor: pointer;
}
`;


