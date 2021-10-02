import styled from "styled-components";

export const CustomHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  @media(max-width: ${({theme}) => theme.mobile.breakpoint }){
      margin: 40px 30px;
  }
`;
