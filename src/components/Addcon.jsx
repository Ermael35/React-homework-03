import React from "react";
import styled from "styled-components";


const Addcon = () => {
    return(
        <>
        <AddtodoContainer>
            <Buttoncontainer>
                <ButtonStyle>작성하기</ButtonStyle>
            </Buttoncontainer>
            <TitleContainer>
                <StyledTit>작성자</StyledTit>
                <NameInput type="text" />
            </TitleContainer>
            <TitleContainer>
                <StyledTit>제목</StyledTit>
                <TitleInput type="text" />
            </TitleContainer>
            <TitleContainer>
                <StyledTit>내용</StyledTit>
                <DescInput type="text" />
            </TitleContainer>
        </AddtodoContainer>
        </>
    )
}
const AddtodoContainer = styled.div`
    padding: 30px;
`

const Buttoncontainer = styled.div`
    display: flex;
    justify-content: flex-end;

`
const ButtonStyle = styled.button`
    text-decoration: none;
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 15px 30px;
    cursor: pointer;
    font-size: 16px;
`
const TitleContainer = styled.div`
    margin-bottom: 30px;
`
const StyledTit = styled.h1`
    font-size: 22px;
    font-weight: 300;
    margin-bottom: 10px;
`
const NameInput = styled.input`
    padding: 5px 300px;
`
const TitleInput = styled.input`
    padding: 5px 300px;
`
const DescInput = styled.input`
    padding: 100px 300px;
`

export default Addcon