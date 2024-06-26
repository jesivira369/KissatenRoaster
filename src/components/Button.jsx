import styled from "styled-components";
import { device } from './Device'

const Button = styled.button`
  background: #5dc1b9;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;

  &:hover {
    background: #42a8a1;
  }

  @media ${device.mobileS} {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media ${device.tablet} {
    padding: 15px 30px;
    font-size: 18px;
  }

  @media ${device.laptop} {
    padding: 20px 40px;
    font-size: 20px;
  }
`;

export default Button;