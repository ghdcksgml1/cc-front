import React from "react";
import styled from "styled-components";
import CommunityItem from "./CommunityItem";

const CommunityListBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  
  overflow: auto;
  
  .header {
    font-size: 22px;
    display: flex;
    height: 30px;
    margin-bottom: 10px;
    border-bottom: 2px solid #eee;
    font-weight: bold;
  }
  
  .boardId {
    text-align: center;
    width: 120px;
  }
  
  .title {
    width: 400px;
    text-align: center;
  }
  
  .view {
    width: 116px;
    text-align: center;
  }
`;
function CommunityList() {
    return (
        <CommunityListBlock>
            <div className="header">
                <div className="boardId">글 번호</div>
                <div className="title">제목</div>
                <div className="view">조회수</div>
            </div>
            <CommunityItem
                itemId={123}
                itemTitle={"남들이 레저 보겠다는데 왤케 딴지가 많지"}
                itemView={2302}
            />
        </CommunityListBlock>
    );
}

export default CommunityList;
