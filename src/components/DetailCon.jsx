import React from 'react'
import styled from 'styled-components'

const DetailCon = () => {
  return (
    <DetailContainer>
        <DetailIdBox>
            <DetailId>id</DetailId>
            <DetailBack>이전으로</DetailBack>
        </DetailIdBox>
        <div>
            <span>수정하기</span>
        </div>
    </DetailContainer>
  )
}

export default DetailCon


const DetailContainer = styled.div`
    padding: 30px;
`
const DetailIdBox = styled.div`
    display: flex;
    justify-content: space-between;
`
const DetailId = styled.h1`
    font-size: 24px;
`
const DetailBack = styled.div`
    font-size: 26px;
    border: 1px solid #eee;
    width: 150px;
    height: 40px;
    text-align: center;
    padding: 5px;
`