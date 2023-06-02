import React from "react";
import styled, { keyframes } from "styled-components";

const rollDown = keyframes`
  0% {
    height: 30vh;
  }
  40% {
    height: 30vh;
  }
  100% {
    height: 70vh;
  }
`;


const BoardBoardBlock = styled.div`
  width: 700px;
  height: 70vh;
  
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  
  margin: 0 auto;
  
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  animation: ${rollDown} 2s;
`;

function BoardBoard({ children }) {
    return <BoardBoardBlock>{children}</BoardBoardBlock>
}

export default BoardBoard;
