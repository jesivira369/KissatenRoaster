import styled from "styled-components";
import { device } from './Device'

const Section = styled.div`
  background-color: #eee;
  border-top: solid 2px palevioletred;
  padding: 20px 25px;
  width: 500px;
  box-shadow: 0px 2px 3px rgb(0, 0, 0, 0.3);

  @media ${device.mobileL} {
    max-width: 500px;
    flex-direction: column
  }
  
  @media ${device.mobileM} {
    max-width: 400px;
    flex-direction: column
  }
`;

export default Section;
