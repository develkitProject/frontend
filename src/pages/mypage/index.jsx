/* eslint-disable no-unsafe-optional-chaining */
import React, { useState } from 'react';
import { useGetWorkspacesQuery } from '../../redux/modules/workspaces';
import { useGetUserInfoQuery } from '../../redux/modules/user';
import MyPage1 from './components/MyPage1';
import MyPage2 from './components/MyPage2';

import * as S from './style';

function MyPage() {
  const [tab, setTab] = useState(false);
  const { data, error, isLoading } = useGetWorkspacesQuery();
  const { data: user } = useGetUserInfoQuery();

  return (
    <S.Wrapper>
      <S.RowDiv>
        <S.TabDiv1>
          <S.MyPageSpan>마이페이지</S.MyPageSpan>
          <S.TabSpan
            onClick={() => {
              setTab(false);
            }}
            style={!tab ? { fontWeight: '600' } : null}
          >
            프로젝트 관리
          </S.TabSpan>
          <S.TabSpan
            onClick={() => {
              setTab(true);
            }}
            style={tab ? { fontWeight: '600' } : null}
          >
            회원정보
          </S.TabSpan>
        </S.TabDiv1>
        <S.TabDiv2>
          {!tab ? (
            <>
              <MyPage1
                data={data}
                error={error}
                isLoading={isLoading}
                user={user}
              />
            </>
          ) : (
            <>
              <MyPage2 user={user} />
            </>
          )}
        </S.TabDiv2>
      </S.RowDiv>
    </S.Wrapper>
  );
}

export default MyPage;
