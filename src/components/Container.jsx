import styled from "styled-components";
import { device } from './Device'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;

  @media ${device.mobileS} {
    max-width: 90%;
  }

  @media ${device.tablet} {
    max-width: 600px;
  }

  @media ${device.laptop} {
    max-width: 800px;
  }
`;

export default Container;