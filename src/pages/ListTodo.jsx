import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout"

const ListTodo = () => {
    return(
        <todo-container>
            <Layout/>
            <Sttodo><h1>내 할일</h1></Sttodo>     

            <StBox>
               할일 넣을 곳
            </StBox>

            <StBox>
            할일 넣을 곳
            </StBox>
            
            <StBox>
            할일 넣을 곳
            </StBox>

        </todo-container>
    )
};

export default ListTodo;

const Sttodo = styled.div`
    text-align: left;
    margin: 50px auto 5px 35px;
`

const StBox = styled.div`
  width: 95%;
  height: 90px;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin: 15px auto;
`;