import React, {useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";
import {AiOutlineRight} from "react-icons/ai"
import {companyList, register} from "../../fetch"


const fadeIn = keyframes`
  from {
    opacity: 0.7;
  }
  to {
    opacity: 1;
  }
`;


const RegisterListBlock = styled.div`
  flex: 1;
  margin: 40px 32px;
  background: #eee;
  border-radius: 5px;
  overflow: auto;
  
  div{
    margin: 5px;
    width: calc(448px - 40px);
    height: 40px;
    background: white;
    border-radius: 5px;
    border: 1px solid #eee;
    box-shadow: 1px 1px 0 0 #ccc;
    padding-left: 15px;
    padding-top: 20px;
  }
  
  #inputBox {
    @keyframes flash {
      0% {
        background-color: rgba(255, 255, 0, 0);
        color: black;
      }
      100% {
        background-color: #20c997;
        color: white;
      }
    }
  }
  
  .item {
    font-weight: bold;
  }
  
  .item:hover {
    background: #20c997;
    color: white;
    
    animation: ${fadeIn} 0.5s ease-in-out;
  }
  
  input {
    
    width: 370px;
    border: none;
    font-size: 20px;
  }
  
  input:focus {
    outline: none;
  }
`;



function RegisterList() {
    const [company, setCompany] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const [hospitalList, setHospitalList] = useState([]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        companyList(1)
            .then((response) => { return response.data })
            .then((content) => {setHospitalList(content)})
        const company = document.querySelector('#company');
        setCompany(company)
    }, []);
    const companySubmit = async () => {
        try {

            const response = await register(
                {
                    "platformId": sessionStorage.getItem('platformId'),
                    "platformType": sessionStorage.getItem('platformType'),
                    "company": company.value
                }
            );

            sessionStorage.setItem('token', response.data.token);
            window.location.href="/board";
        } catch (error) {
            alert("회원가입에 실패했습니다.")
            window.location.href = '/';
        }
    }

    const companyClick = (e) => {
        const text = e.target.innerText;
        company.value = text;
        const inputBox = document.querySelector('#inputBox');
        inputBox.style.animation = 'flash 0.2s';
        company.style.animation = 'flash 0.2s';

        // 0.5초 후에 애니메이션 스타일을 초기화
        setTimeout(() => {
            inputBox.style.animation = '';
            company.style.animation = '';
        }, 700);
    };


    return (
        <RegisterListBlock>
            <div id="inputBox">
                <input id="company" placeholder="병원명을 입력하세요." readOnly={true}/>
                <AiOutlineRight
                    color={isHovered ? '#20c997' : 'black'}
                    size={20}
                    onClick={companySubmit}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </div>
            {
                hospitalList.map((hospital) => (
                    <div className="item" onClick={companyClick}>{hospital.name}</div>
                ))
            }
        </RegisterListBlock>
    );
}

export default RegisterList;
