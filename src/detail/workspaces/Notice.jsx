import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetNoticeQuery } from '../../redux/modules/notices';
import NoticeList from './notice/NoticeList';
import BlackButton from '../../common/elements/BlackButton';
import NoticeWrite from './notice/NoticeWrite';
import NoticeEdit from './notice/NoticeEdit';
import { StContent, StIntroContainer, StTitle } from './Contacts';

export default function Notice({ user, id }) {
  const [tab, setTab] = useState('list');
  const [stateId, setStateId] = useState(0);
  const { data, error, isLoading, refetch } = useGetNoticeQuery(id);
  const notice = data?.data;

  const onNoticeHandle = (tabPoint, noticeId) => {
    setTab(tabPoint);
    setStateId(noticeId);
  };

  return (
    <>
      <StIntroContainer>
        <div>
          <StTitle>공지사항</StTitle>
          <StContent>프로젝트 관련 주요 공지사항입니다</StContent>
        </div>

        {tab === 'list' ? (
          <>
            <BlackButton
              text="글쓰기"
              onClick={() => {
                onNoticeHandle('write');
              }}
            />
          </>
        ) : (
          <>
            <BlackButton
              text="리스트 돌아가기"
              onClick={() => {
                onNoticeHandle('list');
              }}
            />
          </>
        )}
      </StIntroContainer>

      {tab === 'list' ? (
        <div>
          <NoticeList
            notice={notice}
            onNoticeHandle={onNoticeHandle}
            user={user}
            id={id}
            data={data}
            error={error}
            isLoading={isLoading}
          />
        </div>
      ) : tab === 'write' ? (
        <div>
          <NoticeWrite onNoticeHandle={onNoticeHandle} id={id} />
        </div>
      ) : tab === 'edit' ? (
        <div>
          <NoticeEdit
            onNoticeHandle={onNoticeHandle}
            stateId={stateId}
            id={id}
          />
        </div>
      ) : null}
    </>
  );
}
