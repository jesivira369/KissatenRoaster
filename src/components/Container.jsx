import styled from "styled-components";
import { device } from './Device'

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  flex-direction: column

  @media ${device.mobileL} {
    max-width: 500px;
    margin-top: 20px;
    flex-direction: column
  }

  @media ${device.mobileM} {
    max-width: 400px;
    margin-top: 20px;
    flex-direction: column
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

export default Container;