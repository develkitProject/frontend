import styled from 'styled-components';
import { useDeleteNoticeMutation, useGetNoticeQuery } from '../../../redux/modules/workspaces';
import React, { useState, useEffect } from 'react';
import { getCookieToken } from '../../../Cookie';
import { useParams } from 'react-router-dom';
import WorkSpaceErrorModal from '../../../common/Modal/error';
import useGetUser from '../../../common/hooks/useGetUser';
import NoticeEdit from './NoticeEdit';

function NoticeList({ error, isLoading, data, notice}) {

  const [tab, setTab] = useState(1);
  const [stateId, setStateId] = useState(0);

  const onListHandle = () => {
    setTab(1);
  };

  const onEditHandle = (noticeId) => {
    console.log(noticeId)
    setStateId(noticeId);
    setTab(3);
  };

  const params = useParams();
  const id = Number(params.id);

  const { user } = useGetUser();
  const userInfo = user?.nickname;

  const [deleteNotices] = useDeleteNoticeMutation();
  const deleteNotice = (dataId) => {
    const data = {
      id,
      dataId,
    }
    if (window.confirm('정말 지우시겠습니까?')) {
      deleteNotices(data);
    } else {
      return;
    }
  };

  return (
    <>

{tab === 1 ? (
      <StWrapper>
        {error ? (
          <>에러가 발생하였습니다. 관리자에게 문의해주세요</>
        ) : isLoading ? (
          <>데이터를 불러오는 중입니다</>
        ) : data ? (
          <>
            {notice?.map((data, i) => {
              const writerInfo= data.nickname;
              return (
                <StNoticeContainer key={data.id}>
                  {/* <StTitle fontColor='#00a99d' style={{marginTop: "30px"}}>공지사항</StTitle> */}
                  <StNoticeBox>
                    <StInfoDiv>
                      <StProfileImg/>
                      <StNameDate>
                        <span style={{fontWeight: "600"}}>{data.nickname}</span>
                        <span>{data.createdAt.slice(0, -13)} <span style={{fontSize: "15px"}}>｜</span> {data.createdAt.slice(10, -4)} </span>
                      </StNameDate>
                    </StInfoDiv>
                    <StContentBox>
                      <StTitle fontColor='#333333'>{data.title}</StTitle>
                      <StContent style={{marginTop: "16px"}} className='imgWrapper'>
                        <div dangerouslySetInnerHTML={{ __html: data.content }} />
                      </StContent>
                    </StContentBox>
                    {userInfo === writerInfo ? (
                     <StEditDelete>
                      <div onClick={()=>onEditHandle(data.id)} style={{ color: '#00A99D'}}>
                       수정
                      </div>
                      <StVerticalBar>｜</StVerticalBar>
                      <div onClick={()=>{deleteNotice(data.id)}}>
                       삭제
                      </div>
                    </StEditDelete>
                    ):null}
                  </StNoticeBox>
                </StNoticeContainer>
              );
            })}
          </>
        ) : null}
        <div style={{ marginTop: '5%' }}></div>
      </StWrapper>
):tab === 3?(<NoticeEdit stateId={stateId}/>)

:null}
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

const StNoticeContainer = styled.div`
  padding: 5px 35px 20px 35px;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #eef8f8;
  margin: 5px;
  margin-bottom: 15px;
`;

const StNoticeBox = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const StInfoDiv = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: row;
  align-items: left;
  color: #999999;
  font-weight: 500;
  font-size: 16px;
`;

const StProfileImg = styled.div`
  width: 41px;
  height: 40px;
  border-radius: 70%;
  margin-top: 3px;
  background-color: black;
`;

const StNameDate = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  color: #999999;
  font-size: 18px;
  letter-spacing: -0.5px;
  font-weight: 500;
  line-height: 22px;
`;

const StContentBox = styled.div`
  margin-top: 26px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const StTitle = styled.p`
  color: ${(props) => props.fontColor};
  text-align: left;
  font-size: 20px;
  font-weight: bold;
`;

const StContent = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  white-space: pre-wrap;
  overflow: hidden;
`;

const StEditDelete = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: #999999;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;

const StVerticalBar = styled.div`
  margin: 0 2px 0 2px;
  font-size: 15px;
  color: #999999;
  letter-spacing: -0.05em;
  font-weight: 200;
  cursor: none;
`;
