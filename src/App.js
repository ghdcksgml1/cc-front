import './App.css';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #282c34;
  }
`;

function App() {
  return (
      <>
        <GlobalStyle/>
      </>
  );
}

export default App;
