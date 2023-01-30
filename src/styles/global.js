import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }
  body::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  body::-webkit-scrollbar-track {
    background-color: transparent;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: 20px;
  }

  body::-webkit-scrollbar-thumb:hover {
    transform: scale(1.5);
  }

  body, input, button, textarea {
    font-size: 20px;
    font-family: "Roboto Slab", serif;
    outline: none;

  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  .poppins-100-medium {
    font-family: 'Poppins', sans-serif;
    font-weight: medium;
    font-size: 0.875rem;
    line-height: 150%;
    text-decoration: none;
  }

  .poppins-200-medium {
    font-family: 'Poppins', sans-serif;
    font-weight: medium;
    font-size: 1.25rem;
    line-height: 160%;
    text-decoration: none;
  }

  .poppins-300-bold {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 140%;
    text-decoration: none;
  }

  .poppins-300-regular {
    font-family: 'Poppins', sans-serif;
    font-weight: regular;
    font-size: 1.5rem;
    line-height: 140%;
    text-decoration: none;
  }

  .poppins-400-medium {
    font-family: 'Poppins', sans-serif;
    font-weight: medium;
    font-size: 2rem;
    line-height: 140%;
    text-decoration: none;
  }

  .poppins-500-medium {
    font-family: 'Poppins', sans-serif;
    font-weight: medium;
    font-size: 2.5rem;
    line-height: 140%;
    text-decoration: none;
  }

  .roboto-200-regular {
    font-family: 'Roboto', sans-serif;
    font-weight: regular;
    font-size: 0.75rem;
    line-height: 160%;
    text-decoration: none;
  }

  .roboto-300-regular {
    font-family: 'Roboto', sans-serif;
    font-weight: regular;
    font-size: 0.875rem;
    line-height: 160%;
    text-decoration: none;
  }

  .roboto-300-bold {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 0.875rem;
    line-height: 160%;
    text-decoration: none;
  } 


  .roboto-400-spaced {
    font-family: 'Roboto', sans-serif;
    font-weight: regular;
    font-size: 1rem;
    line-height: 160%;
    text-decoration: none;
  }  

  .roboto-400-regular {
    font-family: 'Roboto', sans-serif;
    font-weight: regular;
    font-size: 1rem;
    line-height: 100%;
    text-decoration: none;
  }  

  .roboto-500-bold {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 160%;
    text-decoration: none;
  }

  .roboto-700-regular {
    font-family: 'Roboto', sans-serif;
    font-weight: regular;
    font-size: 2rem;
    line-height: 160%; 
    text-decoration: none;
  }

  .roboto-900-bold {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 2.625rem;
    line-height: automatic; 
    text-decoration: none;
  }
  
  
  
`;