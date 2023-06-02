import React, {useContext, useState} from "react";
import styled from "styled-components";
import  {SelectorContext} from "../../pages/Board";

const BoardSelectorBlock = styled.div`
  height: 50px;
  width: 400px;
  border-radius: 10px;
  background: #D9D9D9;
  box-shadow: 0px 3px 3px 2px #00000040 inset;
  display: flex;
  flex-direction: row;
  padding-right: 5px;
  padding-left: 5px;
`;

const SelectorItem = styled.div`

  width: 200px;
  height: 42px;
  
  margin-top: 4px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  color: #6F6F6F;

  ${(props) =>
          props.selected &&
          `
    background: white;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color: #000000;
  `}
`;

function BoardSelector() {
    const { selectedItem, setSelectedItem } = useContext(SelectorContext);

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    return (
        <BoardSelectorBlock>
            <SelectorItem selected={selectedItem === 0} onClick={() => handleItemClick(0)}>자유 게시판</SelectorItem>
            <SelectorItem selected={selectedItem === 1} onClick={() => handleItemClick(1)}>병원 리뷰</SelectorItem>
        </BoardSelectorBlock>
    );
}

export default BoardSelector;
