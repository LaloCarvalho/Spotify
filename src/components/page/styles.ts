import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Container = styled.div`
`;

export const Header = styled.div`
  padding: 20px;
  background-color: black;
  text-align: right;
  padding-right: 150px;
  display: flex;
  align-items: center

`;

export const LinkHome = styled(Link)`
`;

export const LinksRight = styled(Link)`
  color: white;
  font-weight:bold;
  margin-left: 35px;
  text-decoration: none;
  font-size: 18px;
  
`;

export const Footer = styled.div`
  padding: 250px;
  background-color: black;
`;

export const Image = styled.img`
  height: 50px;
  margin-right: 500px;
  margin-left: 200px;
`;




