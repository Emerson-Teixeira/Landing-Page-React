import styled from "styled-components";

export const Logo = styled.img`
@media(max-width: ${({theme}) => theme.mobile.breakpoint }){
      margin-bottom: 40px;
  }
`;
