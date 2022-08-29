import React from "react";
import styled from "styled-components";

const Header = () => {
    return(
        <HeaderContainer>
            <HomeIcon>🎃</HomeIcon>
            <HeaderTit>3조의 투두리스트</HeaderTit>
        </HeaderContainer>
    )
}



export default Header;
const HomeIcon = styled.h1`
    cursor:pointer;
    font-size: 30px;
`
const HeaderContainer = styled.div`
    min-width: 800px;
    border: 1px solid #eee;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
`
const HeaderTit = styled.p`
    font-size: 22px;
`