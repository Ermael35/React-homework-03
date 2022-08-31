import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        🎃
      </h1>

      <HeaderTit>3조의 투두리스트</HeaderTit>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: calc(100%-0px);
  border: 1px solid #eee;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const HeaderTit = styled.p`
  font-size: 22px;
`;
