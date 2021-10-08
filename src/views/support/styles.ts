import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`  
  text-align: center;  
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 70px;
  margin: 0;
  padding-top: 70px;
  padding-bottom: 50px;
`;

export const TextInput = styled(TextField)`
  width: 800px;
  color: #fff;
  background-color: #fff;
  border-radius: 10px;
`;

export const TableTop = styled.table`
  color: #fff;
  width: 950px;
  line-height: 20px;
  font-size: 18px;
  text-align: left;
  text-decoration: none;
  display: inline-table;
  padding-top: 50px;
`;

export const DivTop = styled.div`
  background-color: #2d46b9;
  padding-bottom: 100px;
`;



export const DivBot = styled.div`
  background-color: #fff;
  padding-bottom: 100px;
`;

export const TableBot = styled.table`
  color: black;
  width: 1100px;
  line-height: 50px;
  font-size: 26px;
  text-align: left;
  display: inline-table;
  padding-top: 50px;
`;

export const TR = styled.tr`
  width: 300px;
  padding: 10px;
`;

export const H1Bot = styled.h1`
  font-size: 56px;
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

export const DivMid = styled.div`
  background-color: #eeeeee;
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 50px;
  padding-bottom: 20px;
  
`;

export const H3 = styled.h3`
  font-size: 24px;
  text-align:center;
  display: inline;
  padding-right: 50px;
  margin-right:5px;
`;

export const H4 = styled.h4`
  font-size: 16px;
  display: inline;
  color: #d9c9ca;
  padding-right: 50px;
  padding-left: 50px;
`;

export const H4V2 = styled.h4`
  width: 230px;
  font-size: 18px;
  color: #fff;
  display: inline-table;
  margin-left: 10px;
  margin-right: 10px;
`;

export const UL = styled.ul`
  font-size: 24px;  
  text-align: left;
  margin: 0px;
  padding-top: 20px;
  padding-right: 50px;
  display: inline-table;
`;

export const LI = styled.li`
  box-sizing: border-box;
  color: #117a37;
  font-weight: bold;
  list-style-type: none;
  font-size: 18px;  
  line-height: 35px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;    
}
`;

export const P = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 50px;
`;