import React, {useState} from "react";
import styled from "styled-components";
import reviewImg from "../../../images/hospital_top.png"

const HospitalTopBlock = styled.div`
  display: flex;
  
  height: 180px;
  background: #ebf7fa;
  
  padding-top: 30px;
  padding-left: 60px;
  
  #hospitalTopTitle {
    display: initial;
    font-weight: bold;
    font-size: 24px;
  }
  
  #hospitalTopContent {
    font-size: 16px;
    color: #94969b;;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
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
  
  button:hover {
    opacity: 70%;
  }
`;

const ReviewImage = styled.img`
  margin-left: 35px;
  width: 340px;
`;

function HospitalTop({setModalOpen}) {

    return (
        <HospitalTopBlock>
            <div>
                <div id="hospitalTopTitle">
                    내 병원 리뷰하기
                </div>

                <div id="hospitalTopContent">
                    회원님의 리뷰는 이용자들이 병원을<br/> 검토하는데 도움이 됩니다.
                </div>
                <button
                    onClick={() => {setModalOpen(true)}}
                >
                    리뷰작성
                </button>
            </div>
            <div>
                <ReviewImage src={reviewImg}/>
            </div>
        </HospitalTopBlock>
    );
}

export default HospitalTop;
