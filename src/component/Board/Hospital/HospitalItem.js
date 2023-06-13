import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Star from "../../Common/Star";
import defaultImage from "../../../images/company.png"
import StarWrap from "../../Common/StarWrap";
import Modal from "../../Common/Modal";
import {companyReviewList} from "../../../fetch";

const HospitalItemBlock = styled.div`
  display: flex;
  width: 250px;
  height: 80px;
  border: 1px solid #dfe1e4;
  border-radius: 4px;

  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;

  margin-right: 30px;
  margin-bottom: 20px;

  &:hover {
    background: #adefc1;
    opacity: 0.7;
  }

  .star {
    display: flex;
    width: 168px;
    margin-top: 10px;
  }

  .companyImage {
    width: 60px;
    height: 60px;
  }

  .companyName {
    margin-top: 10px;
  }

  .detail {
    margin-left: 20px;
  }
`;

const ModalBlock = styled.div`
  height: 700px;
  overflow: auto;
  
  #reviewContent {
    display: block;
    
    background: white;
    border: 1px solid #dfe1e4;
    width: 420px;
    padding: 10px;
    margin-top: 20px;
    margin-left: 30px;
    margin-bottom: 20px;
  }
  
  #infor {
    padding-top: 10px;
    margin-left: 30px;
    display: block;
  }
  
  #reviewImg {
    margin-top: 20px;
    margin-left: 30px;
  }
  
  #title {
    display: flex;
    font-weight: bold;
    font-size: 20px;
    align-items: baseline;
  }
  
  span {
    color: rgb(153, 201, 32);;
    font-size: 16px;
  }
`;

function HospitalItem({company}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([]);

    // 리뷰 가져오기
    const reviewList = async () => {
        try {
            const rws = await companyReviewList(company.id)
            setReviews(rws.data)
        } catch (error) {
            alert('가져온 리뷰가 없습니다.');
        }
    }

    return (
        <>
            <HospitalItemBlock onClick={() => {
                reviewList();
                setModalOpen(true);
            }}>
                <img src={company.image === null ? defaultImage : company.image} alt={"image"} className="companyImage"/>
                <div className="detail">
                    <div className="companyName">
                        {company.name}
                    </div>
                    <div className="star">
                        <StarWrap rate={company.star.toFixed(1)}/>&nbsp;&nbsp;
                        <div className="rating">{company.star.toFixed(1)}</div>
                    </div>
                </div>
            </HospitalItemBlock>
            <ModalBlock id="modal">
                {modalOpen && <Modal
                    setModalOpen={setModalOpen}
                    hidden={null}
                >
                    <div>
                        <img id="reviewImg" src={company.image === null ? defaultImage : company.image} width="100px" height="100px"/>
                        <div>
                            <div id="infor">
                                <h2><p>{`${company.name}의 리뷰`}</p></h2>
                                <div id="reviewRating">
                                    <StarWrap rate={company.star.toFixed(1)}/>&nbsp;&nbsp;
                                    <div className="rating">{`${company.star.toFixed(1)} (${company.reviewCount})`}</div>
                                </div>
                            </div>

                        </div>
                    </div>


                    {
                        reviews.map((review) => (
                            <div id="reviewContent">
                                <div id="title">
                                    {review.title} &nbsp;&nbsp;<span>{review.writerNickname}</span>&nbsp;&nbsp;&nbsp;
                                    <StarWrap rate={review.star}/>
                                </div>
                                <div id="content">
                                    {review.content}
                                </div>
                            </div>
                        ))
                    }
                </Modal>}
            </ModalBlock>
        </>
    );
}

export default HospitalItem;
