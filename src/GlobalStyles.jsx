import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
  --purple: hsl(259, 100%, 65%);
  --light-red: hsl(0, 100%, 67%);

  --white: hsl(0, 0%, 100%);
  --off-white: hsl(0, 0%, 94%);
  --light-grey: hsl(0, 0%, 86%);
  --smokey-grey: hsl(0, 1%, 44%);
  --off-black: hsl(0, 0%, 8%);


  }

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
html{
  font-size:100%
}
  body{
    font-family: 'Poppins', sans-serif;
    display:grid;
    place-items: center;
    min-height: 100vh;
    background-color:var(--light-grey)
  }

  .container{
    width:min(375px, 1440px);
    padding-inline: 1rem;
    display: grid;
    place-items: center;
    gap: 1rem;
  }

`;

export default GlobalStyles;
