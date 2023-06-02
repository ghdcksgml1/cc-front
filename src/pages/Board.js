import React, {createContext, useContext, useEffect, useState} from "react";
import {tokenValid} from "../fetch";
import BoardBoard from "../component/Board/BoardBoard";
import BoardHead from "../component/Board/BoardHead";
import BoardSelector from "../component/Board/BoardSelector";
import styled from "styled-components";
import BoardMenuBar from "../component/Board/BoardMenuBar";
import CommunityList from "../component/Board/Community/CommunityList";



const DivBox = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const SelectorContext = createContext();
function Board() {
    const [user, setUser] = useState({
        "id": 0,
        "email": "guest",
        "company": "guest"
    })
    const [selectedItem, setSelectedItem] = useState(0);

    useEffect(() => {
        try {
            const token = sessionStorage.getItem('token');
            if (token) {
                tokenValid(token)
                    .then((response) => {
                        setUser(response.data)
                    })
            }
        } catch (error) {
            alert('오류가 발생했습니다. 다시 로그인해주세요.')
            window.location.href = "/";
        }
    }, []);

    return (
        <SelectorContext.Provider value={{ selectedItem: selectedItem, setSelectedItem: setSelectedItem }}>
            <DivBox/>
            <DivBox>
                <BoardMenuBar
                    nickname={user.email}
                    company={user.company}
                />
            </DivBox>
            <DivBox>
                <BoardSelector/>
            </DivBox>
            <BoardBoard>
                {selectedItem ?
                <>
                    <BoardHead name={`병원 리뷰`} email={`병원 리뷰를 적는 공간입니다.`}></BoardHead>
                </> :
                <>
                    <BoardHead name={`자유 게시판`} email={`자유롭게 소통하는 게시판입니다.`}></BoardHead>
                    <CommunityList/>
                </> }
            </BoardBoard>
        </SelectorContext.Provider>
    );
}

export { Board, SelectorContext };
