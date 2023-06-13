import React from "react";
import styled from "styled-components";

const ModalBlock = styled.div`
    /* 모달창 크기 */
    width: 500px;

    /* 최상단 위치 */
    z-index: 999;

    /* 중앙 배치 */
    /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
    /* translate는 본인의 크기 기준으로 작동한다. */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* 모달창 디자인 */
    background-color: white;
    border: 2px solid #20c997;
    border-radius: 8px;

  /* 모달창 내부 X버튼 */
  .close {
    justify-content: center;
    align-items: center;
    
    width: 70px;
    right: 10px;
    top: 10px;
    
    margin-left: 10px;
    margin-right: 30px;
    margin-bottom: 20px;
    
    background: gray;
  }

  .submit {
    justify-content: center;
    align-items: center;

    width: 70px;
    right: 10px;
    top: 10px;

    margin-bottom: 20px;
  }
  
  .alert {
    font-size: 20px;
    font-weight: bold;
    color: red;
    background: none;
  }
  
  div {
    display: flex;
  }
  
  input {
    height: 40px;
  }

  input, textarea {
    margin-top: 20px;
    margin-left: 30px;
    background: whitesmoke;
    width: 420px;
    border: 1px solid #20c997;
    border-radius: 8px;
    
    font-size: 20px;
    padding: 10px;
  }

  textarea {
    margin-bottom: 50px;
    resize: none;
  }
  
  input, textarea:focus {
    outline: none;
  }
`;

function Modal({setModalOpen, submit, hidden, children}) {
    return (
        <ModalBlock>
            {children}
            <button className="submit" onClick={() => submit()} hidden={hidden === null}>
                작성
            </button>
            <button className="close" onClick={() => setModalOpen(false)}>
                닫기
            </button>
        </ModalBlock>
    );
}

export default Modal;
