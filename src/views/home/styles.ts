import styled from 'styled-components';

export const Container = styled.div`
  background-color: #2941ab;
  text-align: center;
  padding-bottom: 200px;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 150px;
  line-height: 104px;
  padding-bottom: 70px;
  box-sizing: border-box;
  margin: 0;
  padding-top: 200px;
  color: #1ed760;
  text-align: center 
`;

export const SubTitle = styled.p`
  box-sizing: border-box;
  font-family: spotify-circular, Helvetica, Arial, sans-serif;
  display: block;
  padding: 0px 0px 1em;
  padding-bottom: 50px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  color: #1ed760;
  text-align: center 
`;

export const Button = styled.button`
  border-radius: 500px;
  font-size: inherit;
  padding: 14px 32px;
  background-color: #1ed760;
  color:#2941AB;
  font-weight: bold;
  text-align: center;
  border: none;

  &:hover {
    transform: scale(1.04);
}
`;