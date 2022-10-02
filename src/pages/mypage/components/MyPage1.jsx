/* eslint-disable no-unsafe-optional-chaining */
import React from 'react';
import SpaceCard from '../../../components/SpaceCard';

import * as S from '../style';

function MyPage1({ data, error, isLoading, user }) {
  const workspaces = data?.data;
  const now = new Date();
  const createdData = user?.data.createdAt.split(' ')[0];
  const stYear = Number(createdData?.split('/')[0]);
  const stMonth = Number(createdData?.split('/')[1]);
  const stDay = Number(createdData?.split('/')[2]);
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const stDate = new Date(stYear, stMonth, stDay);
  const endDate = new Date(year, month, day);
  const btMs = endDate.getTime() - stDate?.getTime();
  const btDay = btMs / (1000 * 60 * 60 * 24);

  return (
    <S.Wrapper>
      <>
        <S.Intro>
          <S.Intro style={{ fontWeight: '700' }}>
            {user?.data.nickname}님
          </S.Intro>
          , 오늘도 디벨킷에서 성장하고 있습니다 🙌
        </S.Intro>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <S.IntroBox>
            <div>
              <S.BoxSpan>참여중인 </S.BoxSpan>
              <S.BoxSpan style={{ fontWeight: '500' }}>프로젝트</S.BoxSpan>
            </div>
            <div style={{ marginTop: '50px' }}>
              <S.BoxNumSpan>{workspaces?.length}</S.BoxNumSpan>
              <S.BoxSpan> 개</S.BoxSpan>
            </div>
          </S.IntroBox>
          <S.IntroBox>
            <div>
              <S.BoxSpan style={{ fontWeight: '500' }}>디벨킷</S.BoxSpan>
              <S.BoxSpan>과 함께</S.BoxSpan>
            </div>
            <div style={{ marginTop: '50px' }}>
              <S.BoxNumSpan>{btDay.toString()}</S.BoxNumSpan>
              <S.BoxSpan>일</S.BoxSpan>
            </div>
          </S.IntroBox>
          <S.IntroBox>
            <div>
              <S.BoxSpan>총 </S.BoxSpan>
              <S.BoxSpan style={{ fontWeight: '500' }}>게시글 </S.BoxSpan>
              <S.BoxSpan>작성 수</S.BoxSpan>
            </div>
            <div style={{ marginTop: '50px' }}>
              <S.BoxNumSpan>{user?.data.documentNum}</S.BoxNumSpan>
              <S.BoxSpan> 건</S.BoxSpan>
            </div>
          </S.IntroBox>
        </div>
        <S.Intro style={{ marginTop: '50px', fontWeight: '500' }}>
          프로젝트 관리
        </S.Intro>

        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            {workspaces?.map((data, i) => {
              return (
                <div style={{ width: '100%' }} key={data.workspaces.id}>
                  <SpaceCard data={data} width="100%" />
                </div>
              );
            })}
          </>
        ) : null}
      </>
    </S.Wrapper>
  );
}

export default MyPage1;
