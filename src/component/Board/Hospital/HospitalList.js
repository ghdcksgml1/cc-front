import React, {useEffect, useState} from "react";
import styled from "styled-components";
import HospitalItem from "./HospitalItem";
import {companyFindName, companyList, companyReviewCreate} from "../../../fetch";
import Modal from "../../Common/Modal";
import HospitalTop from "./HospitalTop";
import StarWrap from "../../Common/StarWrap";

const HospitalListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  
  padding-top: 40px;
  padding-left: 40px;
  margin-bottom: 20px;
  
  button {
    font-size: 20px;
    font-weight: bold;
    border: none;
    background: rgb(32, 201, 151);
    color: white;
    width: 160px;
    height: 40px;
    border-radius: 10px;
  }
  
  strong {
    font-size: 20px;
  }
  
  select {
    font-size: 20px;
    font-weight: bold;
    
    height: 30px;
    border: 1px solid rgb(32, 201, 151);
    border-radius: 10px;
    
    color: gray;
    margin-bottom: 20px;
  }
  
  h2 {
    text-align: center;
  }
  
  #modal {
    text-align: right;
  }
  
  #hospitalReview {
    margin-right: 30px;
    height: 70px;
  }
  
  #hospitalReviewTitle {
    margin-right: 30px;
    height: 20px;
  }
  
  #hospitalRate {
    justify-content: center;
  }
`;

function HospitalList({user}) {
    const [companys, setCompanys] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        companyList(1)
            .then((response) => { return response.data })
            .catch((error) => {window.location.href="/board"})
            .then((data) => {setCompanys(data)})
    },[]);

    const reviewCreate = async () => {
        try {
            // 사용자의 회사를 찾아내는 API를 받아오기
            const response = await companyFindName(user.company)

            companyReviewCreate({
                "userId": user.id,
                "userCompanyName": user.company,
                "userNickname": user.email,
                "reviewCompanyId": await response.data.id,
                "reviewTitle": document.querySelector('#hospitalReviewTitle').value,
                "reviewContent": document.querySelector('#hospitalReview').value,
                "reviewStar": document.querySelector('#selected').value
            })

            window.location.href = '/board'
        } catch (error) {
            alert("병원 관계자가 아닙니다.")
        }
    }

    return (
        <>
            <HospitalTop setModalOpen={setModalOpen}/>
            <HospitalListBlock>
                {
                    companys.map((company) => (
                        <HospitalItem company={company}/>
                    ))
                }
                <div id="modal">
                    {modalOpen && <Modal
                        setModalOpen={setModalOpen}
                        submit={reviewCreate}
                    >
                        <h2><p>{`${user.company}의 리뷰 작성하기`}</p></h2>
                        <input id="hospitalReviewTitle" type="text" placeholder="리뷰 제목을 입력해주세요."/>
                        <textarea id="hospitalReview" placeholder="리뷰를 입력해주세요."/>
                        <div id="hospitalRate">
                            <strong>평점 :&nbsp;</strong>
                            <select id="selected">
                                <option value="5">매우 좋음</option>
                                <option value="4">좋음</option>
                                <option value="3" selected>보통</option>
                                <option value="2">나쁨</option>
                                <option value="1">매우나쁨</option>
                            </select>
                        </div>
                    </Modal>}
                </div>
            </HospitalListBlock>
        </>
    );
}

export default HospitalList;
