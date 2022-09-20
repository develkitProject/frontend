import styled from 'styled-components';
import { useGetNoticeQuery } from '../../../redux/modules/workspaces';
import React, { useEffect } from 'react';
import { getCookieToken } from '../../../Cookie';
import { useParams } from 'react-router-dom';
import WorkSpaceErrorModal from '../../../common/Modal/error';

function NoticeList({ error, isLoading, data, notice }) {
  return (
    <>
      <StWrapper>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            {notice?.map((data, i) => {
              return (
                <StNoticeContainer key={data.id}>
                  <StTitle fc='#00a99d'>공지사항</StTitle>
                  <StNoticeBox>
                    <StTitle fc='#333333'>{data.title}</StTitle>
                    <StContent className='imgWrapper'>
                      <div dangerouslySetInnerHTML={{ __html: data.content }} />
                      {/* {data.content} */}
                      {/* 
                        {process.browser?(
                          <div dangerouslySetInnerHTML={{ 
                          __html: DOMPurify.sanitize(data.content)} }/>
                          ):(<div/>)} */}
                    </StContent>
                    <StInfoDiv>
                      <p>{data.nickname} ｜</p>
                      <p>{data.createdAt.slice(0, -13)} </p>
                    </StInfoDiv>
                  </StNoticeBox>
                </StNoticeContainer>
              );
            })}
          </>
        ) : null}
        <div style={{ marginTop: '5%' }}></div>
      </StWrapper>
    </>
  );
}

export default NoticeList;

const StWrapper = styled.div`
  width: 96%;
  margin-left: 18px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #333333;
  letter-spacing: -0.8px;
`;

const StTitle = styled.p`
  color: ${(props) => props.fc};
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -1.2px;
`;

const StNoticeContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #eef8f8;
  margin: 5px;
  margin-bottom: 15px;
`;

const StNoticeBox = styled.div`
  margin-top: 18px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const StContent = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 20px;
  line-height: 25px;
  font-weight: 500;
  white-space: pre-wrap;
  overflow: hidden;
`;

const StInfoDiv = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: row;
  align-items: left;
  color: #999999;
  font-size: 16px;
  letter-spacing: -0.8px;
  font-weight: 500;
  font-size: 16px;
`;
