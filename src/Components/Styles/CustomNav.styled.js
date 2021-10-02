import styled from "styled-components";
export const CustomNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media(max-width: ${({theme}) => theme.mobile.breakpoint }){
      flex-flow: column;
  }
`;
