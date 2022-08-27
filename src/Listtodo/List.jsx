import React from "react";
import styled from "styled-components"


const List = () => {
    return(
        <Stlist>
            <Sttodo><h1>내 할일</h1></Sttodo>     

            <StBox>
                <Stcontents>
                    <h2>제목</h2>
                    <small>작성자: name</small>
                </Stcontents>

                <Stbutton onClick={()=>{}}>삭제</Stbutton>

            </StBox>
        </Stlist> 
    )
};

export default List;

const Stlist = styled.div`
    /* padding: 15px; */

`

const Sttodo = styled.div`
    margin: 40px auto 5px auto;
`

const StBox = styled.div`
  display: flex;
  justify-content: space-between;
  /* width:calc(100%-100px); */
  height: 82px;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding:15px;
  margin: 15px auto;
  align-items: center;
`;

const Stcontents = styled.div`
   margin-top: 0px;
   margin-bottom: 20px;
`

const Stbutton = styled.button`
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: white;
    height: 30px;
    width: 38px;
    margin-bottom: 40px; 
    cursor: pointer;
`