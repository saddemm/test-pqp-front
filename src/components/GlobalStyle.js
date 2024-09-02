import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing:border-box
}

html {
font-size: 55%;
  overflow-x: hidden;
}

body {
  font-family: 'Roboto', sans-serif;
}


p {
    margin: 0;
    padding: 0;
  }

  h1{
    margin: 0;
    padding: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
  }
  
  h3 {
    margin: 0;
    padding: 0;
  }

  h4 {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;
}
@media (max-width: 768px){
  img {
    max-height: 80%;
    margin: auto;
  }
}
`;
