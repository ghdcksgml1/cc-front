import React from "react";
import LoginHead from "../component/Login/LoginHead";
import LoginList from "../component/Login/LoginList";
import LoginBoard from "../component/Login/LoginBoard";

function Login() {
    return (
        <LoginBoard>
            <LoginHead></LoginHead>
            <LoginList></LoginList>
        </LoginBoard>
    );
}

export default Login;
