import React from "react";
import { useEffect, useState } from "react";
import styled from 'styled-components'
import nextId from "react-id-generator";
import { useDispatch, useSelector } from 'react-redux'
import {addComment} from '../../redux/modules/comments'
import Com from './Com'
import {useParams} from "react-router-dom"
import { __getComments } from '../../redux/modules/comments';
const Comment = () => {
    const dispatch = useDispatch();
    // const [addcommen,setAddcommmen] = useState("")
    // const [addname,setAddName] = useState("")
    const initialState = {
          id:0,
          post:0,
          name:"",
          comm:""  
      };
      let {id} = useParams();
      const [review,setReview] = useState(initialState)
      
    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setReview({...review,id:nextId(),post: id, [name]:value})
    }
    const { isLoading, error, reviews} = useSelector((state) => state.commen.comments);
    useEffect(() => {
        dispatch(__getComments());
    }, [dispatch]);
    if (isLoading) {
        return <div>로딩 중....</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }
    let commentList = reviews.filter((comment)=>{
        return String(comment.post) === id;
        
    })
    
    
  return (
    <CommentLayout>
        <h1>눌러서 댓글보기</h1>
        <CommentContainer>
            <NameContainer>
            <Name>작성자</Name>
            <InputStyle type="text" name='name' value={review.name} onChange={onChangeHandler}/>
            </NameContainer>
            <NameContainer>
            <Name>내용</Name>
            <InputStyle type="text" name='comm' value={review.comm} onChange = {onChangeHandler}/>
            </NameContainer>
            <Button onClick={()=>{
                dispatch(addComment(review))
            }}>댓글 남기기</Button>
        </CommentContainer>
        <div>{commentList.map((commet)=>{
            console.log(commet)
            return(
               <Com key={commet.id} ment ={commet}/>
            )
        })} 
        </div>
    </CommentLayout>
  )
}

export default Comment

const CommentLayout = styled.div`
    border-top:1px solid #eee;
    padding: 30px;
`
const CommentContainer = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 12px;
    width: 100%;
    padding: 0px 50px 0px 0px;
    margin-bottom: 30px;
`
const InputStyle = styled.input`
    box-sizing: border-box;
    height: 46px;
    width: 100%;
    outline: none;
    border-radius: 8px;
    padding: 0px 12px;
    font-size: 14px;
    border: 1px solid rgb(238, 238, 238);
`
const Button = styled.button`
    width: 300px;
    height: 50px;
    border: none;
`
const NameContainer = styled.div`
    display: flex;
    width: 400px;
`
const Name = styled.p`
    width: 100px;
`