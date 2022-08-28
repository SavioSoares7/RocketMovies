import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
  }
  body{
    color: ${({ theme }) => theme.COLORS.FT_WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }
  button{
    width: 100%;
    background-color: ${({ theme }) => theme.FT_PINK};
    transition: 300ms;
    filter: brightness(0.7);

    
    &:hover{
      filter: brightness(1);
    }
  }
  a, li, ul{
    list-style: none;
    text-decoration: none;
  }
`;
