import React from 'react';
import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.7;
  }
`;

const ImageWrapper = styled.a`
  width: 300px;
  height: 45px;
  border-radius:6px;
  text-decoration: none;

  &:hover {
    animation: 0.3s ${fadeIn} ease-in-out;
    animation-fill-mode: forwards;
  }
`;

const LoginItemBlock = styled.img`
`;

const Text = styled.div`
  /* 텍스트에 대한 스타일을 작성합니다 */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:6px;
  width: 300px;
  height: 45px;
  background: #20c997;
  font-size: 16px;
  text-align: center;
  color: white;
  font-weight: bold;
`;

function LoginItem({ src, text, url }) {
    return (
        <ImageWrapper href={url}>
            {src ? <LoginItemBlock src={src}/> : <Text>{text}</Text>}
        </ImageWrapper>
    );
}

export default LoginItem;
