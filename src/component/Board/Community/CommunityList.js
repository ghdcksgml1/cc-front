import React, {useEffect, useState} from "react";
import styled from "styled-components";
import CommunityItem from "./CommunityItem";
import {boardSelect} from "../../../fetch";
import { IoIosArrowBack } from "react-icons/io"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const CommunityListBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  
  overflow: auto;
  
  #boardPage {
    display: flex;
    justify-content: center;
  }
  
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
  
  .boardTitle {
    margin-top: 10px;
  }
  
  .title {
    width: 350px;
    text-align: center;
  }
  
  .view {
    width: 166px;
    text-align: center;
  }
  
  .item:hover {
    background: whitesmoke;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
`;
function CommunityList() {
    const [content, setContent] = useState([]);
    const [boardPage, setBoardPage] = useState(0);
    const [boardIndex, setBoardIndex] = useState(0);
    const [page, setPage] = useState({
        "page": 0,
        "first": true,
        "last": true
    })


    useEffect(() => {
        boardListRequest(0)
    }, []);

    const boardListRequest = (page) => {
        boardSelect(page,"")
            .then((response) => {
                return response.data
            })
            .then((content) => {
                setContent(content.content)
                setPage({
                    "page": page,
                    "first": content.first,
                    "last": content.last
                })
                console.log(content)
            })
    }

    return (
        <CommunityListBlock>
            { boardPage === 0 ?
                <>
                    <div className="header">
                        <div className="boardId">글 번호</div>
                        <div className="title">제목</div>
                        <div className="view">작성자</div>
                    </div>
                    <div>
                        {
                            content.map((board, idx) => (
                                <div
                                    className="item"
                                    onClick={() => {
                                        setBoardPage(board.id)
                                        setBoardIndex(idx)
                                    }}
                                >
                                    <CommunityItem
                                        id={board.id}
                                        classN={board.user_id}
                                        itemId={board.id}
                                        itemTitle={board.title}
                                        itemName={board.nickname}
                                        itemCompany={board.company}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div id="boardPage">
                        {!page.first ? <AiOutlineArrowLeft size={20} color={"#20c997"} onClick={() => boardListRequest(page.page-1)}/> : <AiOutlineArrowLeft size={20}  color={'gray'}/>}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {!page.last ? <AiOutlineArrowRight size={20} color={"#20c997"} onClick={() => boardListRequest(page.page+1)}/> : <AiOutlineArrowRight size={20} color={'gray'}/>}
                    </div>
                </>
                : <>
                    <div onClick={() => setBoardPage(0)}>
                        <IoIosArrowBack size={30}/>
                    </div>
                    <div className="header boardTitle">
                        <div>
                            {content[boardIndex].title}
                        </div>
                    </div>
                    <div>
                        {content[boardIndex].content}
                    </div>
                </>
            }


        </CommunityListBlock>
    );
}

export default CommunityList;
