import React from "react";
import styled from "styled-components";
import {AiOutlineEye} from "react-icons/ai";

const CommunityItemBlock = styled.div`

  .itemHeader {
    font-size: 18px;
    display: flex;
    height: 30px;
    margin-bottom: 10px;
    align-items: center;
  }

  .itemId {
    text-align: center;
    width: 120px;
  }

  .itemTitle {
    width: 400px;
    padding-left: 20px;
  }

  .itemView {
    width: 116px;
    text-align: center;
  }
`;

function CommunityItem({itemId, itemTitle, itemView}) {
    return (
        <CommunityItemBlock>
            <div className="itemHeader">
                <div className="itemId">{itemId}</div>
                <div className="itemTitle">{itemTitle}</div>
                <div className="itemView"><AiOutlineEye
                    style={{ display: 'inline-block', verticalAlign: 'middle' }} width="100" height="100"/>&nbsp;{itemView}</div>
            </div>
        </CommunityItemBlock>
    );
}

export default CommunityItem;
