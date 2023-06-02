import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


const LoginBlock = styled.div`
  width: 512px;
  height: 370px;
  
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  
  margin: 0 auto;
  
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  animation: ${fadeIn} 1.5s ease-in-out;
`;

function LoginBoard({ children }) {
    return <LoginBlock>{children}</LoginBlock>
}

export default LoginBoard;
