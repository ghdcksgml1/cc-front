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


const RegisterBlock = styled.div`
  width: 512px;
  height: 512px;
  
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

function RegisterBoard({ children }) {
    return <RegisterBlock>{children}</RegisterBlock>
}

export default RegisterBoard;
