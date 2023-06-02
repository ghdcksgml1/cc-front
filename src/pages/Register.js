import React, {useEffect} from "react";
import { useLocation } from 'react-router-dom';
import RegisterBoard from "../component/Register/RegisterBoard";
import RegisterHead from "../component/Register/RegisterHead";
import RegisterList from "../component/Register/RegisterList";
import { authenticate } from "../fetch";

function Register() {


    useEffect(() => {
        const location = window.location;
        const queryParams = new URLSearchParams(location.search);
        const code = queryParams.get('code');
        registerCheck(code);
    }, []);

    const registerCheck = async (code) => {
        try {
            const response = await authenticate(code);
            const data = response.data;
            if (data.platformId) {
                sessionStorage.setItem('platformId', data.platformId)
                sessionStorage.setItem('platformType', data.platformType)
            } else if (data.token) {
                sessionStorage.setItem('token', data.token)
                window.location.href = '/board';
            } else {
                throw DOMException;
            }
        } catch (error) {
            // alert("올바르지 못한 코드 값 입니다.")
            // window.location.href = '/';
        }
    }

    return (
      <RegisterBoard>
          <RegisterHead></RegisterHead>
          <RegisterList></RegisterList>
      </RegisterBoard>
    );
}

export default Register;
