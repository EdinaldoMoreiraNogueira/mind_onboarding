/* eslint-disable no-undef */
import styled from 'styled-components';
import { Form } from "@unform/web";
import unsplash from '../../../assets/backgrond.svg';
import colors from "../../../styles/color";
import fonts from "../../../styles/fonts";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${unsplash});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 450px;
  width: 400px;
  background: white;
  border-radius: 30px;
  h1 {
    color: ${colors.blue};
    ${fonts[700]};
    margin: 30px 50px;
  }
  > span {
    color: ${colors.extraLightGray};
    ${fonts[400]};
    font-size: 15px;
    margin: 0px 55px;
  }
  > div {
    display: flex;
    color: ${colors.blue};
    ${fonts[400]};
    margin: 20px 65px;
    font-weight: 400;
    > a {
      margin-left: 10px;
      color: blue;
    }
  }
`;

export const Forms = styled(Form)`
  display: flex;
  width: 70%;
  flex-direction: column;
  margin-top: 50px;
  align-self: center;
  span {
    margin-top: 20px;
    font-size: 12px;
    color: ${colors.blue};
    ${fonts[400]};
  }
`;
