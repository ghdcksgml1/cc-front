import React, {useState} from "react";
import styled from "styled-components";
import {TbLogout} from "react-icons/tb";

const MenuBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

function BoardMenuBar({nickname, company}) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const logout = () => {
        sessionStorage.clear();
        window.location.href = '/';
    }

    return (
        <MenuBar>
            <strong>USER :&nbsp;</strong>{nickname}&nbsp;&nbsp;|&nbsp;&nbsp;{company}
            &nbsp;&nbsp;&nbsp;
            <TbLogout color={isHovered ? '#20c997' : 'black'}
                      size={20}
                      onClick={logout}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}/>
        </MenuBar>
    );
}

export default BoardMenuBar;
