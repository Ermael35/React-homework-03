import React from 'react'
import { useEffect } from "react";
import { useDispatch } from "react-redux/";
import { deleteComment} from '../../Redux/modules/commentSlice';
import { __getTodos } from'../../Redux/modules/todos';

const Com = ({ment}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(__getTodos());
      }, [dispatch]);
    return (
    <>
        <div className='list' key={ment.id}>
            <h4>{ment.name}</h4>
            <p>{ment.comm}</p>
            <button onClick={()=>{
            }}>수정하기</button>
            <button onClick={()=>{
              dispatch(deleteComment(ment.id))
              console.log(ment.id)
            }}>
            삭제하기</button>
        </div>
    </>
    )
}

export default Com