import React, {useState} from "react";
import styled from "styled-components";
import Modal from "../../Common/Modal";
import {boardCreate} from "../../../fetch";

const CommunityAddButtonBlock = styled.div`
  text-align: right;
  margin-top: 20px;
  padding-right: 30px;
  
  button {
    font-size: 20px;
    font-weight: bold;
    border: none;
    background: #20c997;
    color: white;
    width: 160px;
    height: 40px;
    border-radius: 10px;
  }
  
  button:hover {
    opacity: 70%;
  }
  
  #alert {
    font-size: 15px;
    width: 300px;
    color: red;
    background: none;
  }
`;

function CommunityAddButton({user}) {
    const [modalOpen, setModalOpen] = useState(false);

    const boardCreateRequest = async () => {
        const modalTitle = document.querySelector('#modalTitle');
        const modalContent = document.querySelector('#modalContent');
        const response = await boardCreate(
            {
                "title": modalTitle.value,
                "content": modalContent.value,
                "nickname": user.email,
                "company": user.company,
                "user_id": user.id,
                "ㅁㅁ": "ㅁㅁ"
            }
        );
        if (response.status !== 200) {
            const modalAlert = document.querySelector('#alert');
            modalAlert.innerText = '작업이 제대로 이루어지지 않았습니다.';
        } else {
            window.location.href = '/board';
        }
    }

    return (
        <CommunityAddButtonBlock>
            <button
                onClick={() => setModalOpen(true)}
            >
                게시물 작성하기
            </button>
            {modalOpen && <Modal
                setModalOpen={setModalOpen}
                submit={boardCreateRequest}
            >
                <div id="modalHeader">
                    게시물 작성
                </div>
                <div>
                    <input id="modalTitle" type="text" placeholder={"제목을 입력하세요"}/>
                </div>
                <div>
                    <textarea id="modalContent" cols="50" rows="10" placeholder={"내용을 입력하세요"}/>
                </div>
                <button id="alert">
                </button>
            </Modal>}
        </CommunityAddButtonBlock>
    );
}

export default CommunityAddButton;
