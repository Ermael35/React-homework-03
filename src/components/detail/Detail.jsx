import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/";
import { deleteTodo } from "../../redux/modules/todo";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getTodos } from "../../redux/modules/todo";

import Postmodal from "../postmodal/Postmodal";

const Detail = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [modal, setModal] = useState(false);
  let { id } = useParams();
  // const todos = useSelector((state) => state.todos);
  const { isLoading, error, todos } = useSelector((state) => state.todos);
  let todo = todos.find((todo) => {
    return String(todo.id) === id;
  });
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

  const close = () => {
    setModal(false);
  };

  return (
    <>
      {modal ? <Postmodal post={todo} close={close} /> : null}
      <div style={{ backgroundColor: "orange", color: "#fff" }}>게시글</div>
      <DetailContainer>
        <DetailBackButton>
          <DetailButton onClick={() => navigate(-1)}>이전으로</DetailButton>
        </DetailBackButton>
        <DetailTit>{todo?.title}</DetailTit>
        <p>{todo?.body}</p>
        <p>{todo?.writer}</p>
        <div>
          <DetailButtons
            onClick={() => {
              setModal(true);
            }}
          >
            수정하기
          </DetailButtons>
          <DetailButtons
            onClick={() => {
              dispatch(deleteTodo(todo.id));
              navigate("/", { replace: true });
            }}
          >
            삭제하기
          </DetailButtons>
        </div>
      </DetailContainer>
    </>
  );
};

export default Detail;

const DetailContainer = styled.div`
  padding: 30px;
`;
const DetailBackButton = styled.div`
  display: flex;
  justify-content: end;
`;
const DetailButton = styled.button`
  width: 150px;
  height: 40px;
  border: none;
`;
const DetailButtons = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  margin: 10px;
`;
const DetailTitle = styled.h1`
  font-size: 24px;
`;
const DetailBack = styled.div`
  font-size: 26px;
  border: 1px solid #eee;
  width: 150px;
  height: 40px;
  text-align: center;
  padding: 5px;
`;
const DetailTit = styled.h1`
  font-size: 26px;
  margin-bottom: 20px;
`;
const DetailDesc = styled.p`
  font-size: 16px;
`;
