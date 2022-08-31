import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux/";
import { deleteTodo } from "../redux/modules/todo";
import { __getTodos } from "../redux/modules/todo";
import { useEffect } from "react";

const List = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { isLoading, error, todos } = useSelector((state) => state.todos);
  // const { todos } = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <Stlist>
      <Sttodo>
        <h1>내 할일</h1>
      </Sttodo>

      {todos.map((todo) => {
        return (
          <StBox key={todo.id}>
            <Stcontents>
              <h2 onClick={() => navigate("/detail/" + todo.id)}>{todo.title}</h2>
              <small>작성자: {todo.writer}</small>
            </Stcontents>

            <Stbutton
              onClick={() => {
                dispatch(deleteTodo(todo.id));
              }}
            >
              삭제
            </Stbutton>
          </StBox>
        );
      })}
    </Stlist>
  );
};

export default List;

const Stlist = styled.div`
  padding: 15px;
`;

const Sttodo = styled.div`
  margin: 40px auto 5px auto;
`;

const StBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100%-100px);
  height: 78px;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 15px;
  margin: 15px auto;
  align-items: center;
`;

const Stcontents = styled.div`
  margin-top: 0px;
  margin-bottom: 20px;
`;

const Stbutton = styled.button`
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: white;
  height: 30px;
  width: 38px;
  margin-bottom: 40px;
  cursor: pointer;
`;
