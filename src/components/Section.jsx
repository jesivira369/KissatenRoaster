import styled from "styled-components";
import { device } from './Device'

const Section = styled.div`
  width: 100%;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media ${device.mobileS} {
    padding: 10px;
  }

  @media ${device.tablet} {
    padding: 40px;
  }

  @media ${device.laptop} {
    padding: 60px;
  }
`;

export default Section;
