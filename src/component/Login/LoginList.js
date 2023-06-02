import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import LoginItem from "./LoginItem";
import kakao_image from "../../images/kakao_login_medium_wide.png"
import { loginPage } from "../../fetch";

const LoginListBlock = styled.div`
  flex: 1;
  padding: 40px 32px;
  margin: 0 auto;
`;

const kakaoLoginPage = async () => {
    const response = await loginPage();
    return response.data.loginPage;
}

function LoginList() {
    const [kakaoLoginPageUrl, setKakaoLoginPageUrl] = useState('');

    useEffect(() => {
        const fetchLoginPage = async () => {
            const page = await kakaoLoginPage();
            setKakaoLoginPageUrl(page)
        }
        fetchLoginPage();
    }, []);

    return (
        <LoginListBlock>
            <LoginItem src={kakao_image} url={kakaoLoginPageUrl}/><br/>
            <LoginItem text={"게스트로 로그인"} url={"board"}/><br/>
        </LoginListBlock>
    );
}

export default LoginList;
