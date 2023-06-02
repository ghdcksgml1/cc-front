import React from "react";
import styled from "styled-components";

const LoginHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0 auto;
    font-size: 36px;
    color: #343a40;
  }
  .detail1 {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .detail2 {
    color: #20c997;
    font-size: 18px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

function LoginHead() {
    return (
        <LoginHeadBlock>
            <h1>Sign In</h1>
            <div className="detail1">로그인</div>
            <div className="detail2">*로그인을 통해 여러 사용자와 소통하세요!*</div>
        </LoginHeadBlock>
    );
}

export default LoginHead;
