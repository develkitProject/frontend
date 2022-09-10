import styled from 'styled-components';
import { useGetNoticeQuery } from '../redux/modules/workspaces';
import React, { useEffect } from 'react';
import { getCookieToken } from '../Cookie'
import { useParams } from 'react-router-dom';
import WorkSpaceErrorModal from '../common/Modal/error'

function Notice() {
  const params = useParams();
  const id = Number(params.id);
  const {data, error, isLoading, refetch} = useGetNoticeQuery(id)
  const notice = data?.data
  const cookies = getCookieToken();

  useEffect(() => {
    refetch();
  }, [data, refetch]);

  return (
    <>
    {!cookies? (<WorkSpaceErrorModal/>
    ):(
      <StWrapper>

      {error ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : data ? (
              <>
            {notice?.map((data, i) => {
              return(
                <StNoticeContainer>
                <StTitle fc="#00a99d">공지사항</StTitle>
                  <StNoticeBox key={notice.id}>
                      <StTitle fc="#333333">{data.title}</StTitle>
                      <StContent> {data.content}</StContent>
                      <StInfoDiv>
                        <p>{data.nickname} ｜</p>
                        <p>{data.createdAt} ｜</p>
                        <p>읽음 7 </p>
                      </StInfoDiv>
                  </StNoticeBox>
                  </StNoticeContainer>
              )
              })}</>):null}
              <div style={{marginTop: "5%"}}></div>

      </StWrapper>
    )}
        </>
  );
}

export default Notice;

const StWrapper = styled.div`
  width: 96%;
  min-height: 30vh;
  margin-left: 2%;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #333333;
  font-size: 16px;
  letter-spacing: -0.8px;
`;

const StTitle = styled.p`
 color: ${(props) => props.fc};
 text-align: left;
 font-size: 1.3rem;
 font-weight: bold;
 letter-spacing: -1.2px;
 margin-bottom: 15px;
`;

const StNoticeContainer = styled.div`
  padding: 3%;
  width: 90%;
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #eef8f8;
  margin: 5px;
`;


const StNoticeBox = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;


const StContent = styled.div`
  width: 100%;
  min-height: 5vh;
  max-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-weight: 500;
  white-space:pre-wrap;
`;

const StInfoDiv = styled.div`
  margin-top: 2.5%;
  display: flex;
  flex-direction: row;
  align-items: left;
  color: #999999;
  font-size: 16px;
  letter-spacing: -0.8px;
  font-weight: 500;
  font-size: 0.9rem;
`;