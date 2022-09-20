import styled from 'styled-components';
import { useGetNoticeQuery } from '../../redux/modules/workspaces';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoticeList from './notice/NoticeList';
import BlackButton from '../../common/elements/BlackButton';
import NoticeWrite from './notice/NoticeWrite';

export default function Notice() {
  const params = useParams();
  const id = Number(params.id);
  const [tab, setTab] = useState(1);
  const { data, error, isLoading, refetch } = useGetNoticeQuery(id);
  const notice = data?.data;
  const onListHandle = () => {
    setTab(1);
  };

  const onWriteHandle = () => {
    setTab(2);
  };

  return (
    <>
      <StIntroContainer>
        <div>
          <StTitle>공지사항</StTitle>
          <StContent>프로젝트 관련 주요 공지사항입니다</StContent>
        </div>

        {tab === 1 ? (
          <>
            <BlackButton text='글쓰기' onClick={onWriteHandle}></BlackButton>
          </>
        ) : tab === 2 ? (
          <>
            <BlackButton
              text='리스트 보기'
              onClick={onListHandle}
            ></BlackButton>
          </>
        ) : null}
      </StIntroContainer>

      {tab === 1 ? (
        <div>
          <NoticeList
            error={error}
            isLoading={isLoading}
            data={data}
            notice={notice}
          ></NoticeList>
        </div>
      ) : tab === 2 ? (
        <div>
          <NoticeWrite onListHandle={onListHandle}></NoticeWrite>
        </div>
      ) : null}
    </>
  );
}

const StWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
`;

const Projects = styled.div`
  width: 65%;
  min-height: 90vh;
  margin-left: 50px;
  margin-top: 60px;
  margin-bottom: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const StIntroContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  min-height: 12vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #c6c6c6;
`;

const StTitle = styled.p`
  color: #333333;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1.5px;
`;

const StContent = styled.p`
  margin-top: 10px;
  color: #333333;
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -1px;
`;
