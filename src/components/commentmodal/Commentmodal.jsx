import { useState } from "react";
import { useDispatch } from "react-redux/";
import { updateComment } from "../../redux/modules/comments";
import styled from "styled-components";
const Commentmodal = ({ ment, close }) => {
  let dispatch = useDispatch();
  const initialState = {
    id: ment.id,
    post: ment.post,
    name: ment.name,
    comm: ment.comm,
  };

  const [ment1, setMent] = useState(initialState);
  const [desc, setDesc] = useState(ment1.comm);
  const [desc2, setDesc2] = useState(ment1.name);
  console.log(ment1);
  return (
    <>
      <div className="black-bg show-modal">
        <div className="white-bg">
          <h4>댓글 수정하기</h4>
          <LabelContainer>
            <div>
              <Label>제목</Label>
              <Input
                className="input"
                type="text"
                name="desc"
                value={desc2}
                onChange={(e) => {
                  setDesc2(e.target.value);
                }}
              />
            </div>
            <div>
              <Label>내용</Label>
              <Input
                className="input"
                type="text"
                name="desc2"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>
            <Button
              className="btn btn-danger"
              onClick={() => {
                dispatch(updateComment({ ...ment1, name: desc2, comm: desc }));
                close();
              }}
            >
              수정하기
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => {
                close();
              }}
            >
              닫기
            </Button>
          </LabelContainer>
        </div>
      </div>
    </>
  );
};

export default Commentmodal;

const LabelContainer = styled.div`
  display: flex;
`;
const Label = styled.label`
  margin-left: 10px;
`;
const Button = styled.button`
  border: none;
  width: 100px;
  height: 20px;
  margin-left: 10px;
`;
const Input = styled.input`
  border: 1px solid #eee;
  height: 20px;
  margin-left: 10px;
`;
