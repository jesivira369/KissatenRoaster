import styled from "styled-components";
import { device } from './Device'

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;

  @media ${device.mobileS} {
    font-size: 20px;
  }

  @media ${device.tablet} {
    font-size: 24px;
  }

  @media ${device.laptop} {
    font-size: 28px;
  }
`;

export default Title