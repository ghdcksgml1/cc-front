import React from "react";
import styled from "styled-components";

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
    width: 350px;
    padding-left: 20px;
  }

  .itemView {
    padding-right: 10px;
    width: 166px;
    text-align: right;
  }
  
  

  strong {
    color: #99c920;
  }
`;

function CommunityItem({id, classN, itemId, itemTitle, itemName, itemCompany}) {
    return (
        <CommunityItemBlock>
            <div id={id} className={`itemHeader ${classN}`}>
                <div className="itemId">{itemId}</div>
                <div className="itemTitle">{itemTitle}</div>
                <div className="itemView">
                    <strong>{itemCompany}</strong> {itemName}
                </div>
            </div>
        </CommunityItemBlock>
    );
}

export default CommunityItem;
