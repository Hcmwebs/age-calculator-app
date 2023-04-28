import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root{

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
  }

  .container{
    width:min(320px, 1440px);
  }

`

export default GlobalStyles
