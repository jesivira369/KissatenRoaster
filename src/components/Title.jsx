import styled from "styled-components";
import { device } from './Device'

const Title = styled.h1`
    padding-top: 10px;
    font-weight: 700;
    flex-direction: column
    
      @media ${device.mobileL} {
        max-width: 500px;
      }
`

export default Title