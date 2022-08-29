import React from 'react'
import { useDispatch } from "react-redux/";
import { deleteComment } from '../../Redux/modules/commentSlice';
const Com = ({ment}) => {
    let dispatch = useDispatch();
      
    return (
    <>
        <div className='list' key={ment.id}>
            <h4>{ment.name}</h4>
            <p>{ment.comm}</p>
            <button onClick={()=>{
            }}>수정하기</button>
            <button onClick={()=>{
              dispatch(deleteComment(ment.id))
            }}>
            삭제하기</button>
        </div>
    </>
    )
}

export default Com