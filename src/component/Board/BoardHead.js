import React from "react";
import styled from "styled-components";

const BoardHeadBlock = styled.div`
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
  .detail2 {
    color: #20c997;
    font-size: 18px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

function BoardHead({name, email}) {
    return (
        <BoardHeadBlock>
            <h1>{name}</h1>
            <div className="detail2">{email}</div>
        </BoardHeadBlock>
    );
}

export default BoardHead;
