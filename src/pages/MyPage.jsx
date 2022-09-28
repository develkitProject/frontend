/* eslint-disable no-unsafe-optional-chaining */
import React, { useState } from 'react';
import styled from 'styled-components';
import useGetUser from '../common/hooks/useGetUser';
import {
  useGetWorkspacesQuery,
  useGetUserInfoQuery,
} from '../redux/modules/workspaces';
import SpaceCard from '../components/SpaceCard';
import MyPage2 from './MyPage2';

function MyPage() {
  const { user } = useGetUser();
  const [tab, setTab] = useState(false);
  const { data, error, isLoading } = useGetWorkspacesQuery();
  const workspaces = data?.data;
  const { data: userData } = useGetUserInfoQuery();
  const now = new Date();
  const createdData = userData?.data.createdAt.split(' ')[0];
  const stYear = Number(createdData?.split('/')[0]);
  const stMonth = Number(createdData?.split('/')[1]);
  const stDay = Number(createdData?.split('/')[2]);

  const stDate = new Date(stYear, stMonth, stDay);
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const endDate = new Date(year, month, day);

  const btMs = endDate.getTime() - stDate?.getTime();
  const btDay = btMs / (1000 * 60 * 60 * 24);

  return (
    <StWrapper>
      <RowDiv>
        <TabDiv1>
          <MyPageSpan>마이페이지</MyPageSpan>
          <TabSpan
            onClick={() => {
              setTab(false);
            }}
            style={!tab ? { fontWeight: '600' } : null}
          >
            프로젝트 관리
          </TabSpan>
          <TabSpan
            onClick={() => {
              setTab(true);
            }}
            style={tab ? { fontWeight: '600' } : null}
          >
            회원정보
          </TabSpan>
        </TabDiv1>
        <TabDiv2>
          {!tab ? (
            <>
              <Intro>
                <Intro style={{ fontWeight: '700' }}>{user?.nickname}님</Intro>,
                오늘도 디벨킷에서 성장하고 있습니다 🙌
              </Intro>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <IntroBox>
                  <div>
                    <BoxSpan>참여중인 </BoxSpan>
                    <BoxSpan style={{ fontWeight: '500' }}>프로젝트</BoxSpan>
                  </div>
                  <div style={{ marginTop: '50px' }}>
                    <BoxNumSpan>{workspaces?.length}</BoxNumSpan>
                    <BoxSpan> 개</BoxSpan>
                  </div>
                </IntroBox>
                <IntroBox>
                  <div>
                    <BoxSpan style={{ fontWeight: '500' }}>디벨킷</BoxSpan>
                    <BoxSpan>과 함께</BoxSpan>
                  </div>
                  <div style={{ marginTop: '50px' }}>
                    <BoxNumSpan>{btDay}</BoxNumSpan>
                    <BoxSpan>일</BoxSpan>
                  </div>
                </IntroBox>
                <IntroBox>
                  <div>
                    <BoxSpan>총 </BoxSpan>
                    <BoxSpan style={{ fontWeight: '500' }}>게시글 </BoxSpan>
                    <BoxSpan>작성 수</BoxSpan>
                  </div>
                  <div style={{ marginTop: '50px' }}>
                    <BoxNumSpan>{userData?.data.documentNum}</BoxNumSpan>
                    <BoxSpan> 건</BoxSpan>
                  </div>
                </IntroBox>
              </div>
              <Intro style={{ marginTop: '50px', fontWeight: '500' }}>
                프로젝트 관리
              </Intro>

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
          ) : (
            <>
              <MyPage2 data={userData} />
            </>
          )}
        </TabDiv2>
      </RowDiv>
    </StWrapper>
  );
}

export default MyPage;

const StWrapper = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  font-weight: 600;
  font-size: 20px;
  min-height: 90vh;
`;

const RowDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const TabDiv1 = styled.div`
  width: 15%;
  height: 300px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const TabDiv2 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyPageSpan = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #333333;
  border-bottom: 2px solid black;
  height: 70px;
  display: flex;
  align-items: center;
`;

const TabSpan = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #333333;
  border-bottom: 2px solid #c6c6c6;
  height: 70px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;

const Intro = styled.span`
  width: 100%;
  font-size: 30px;
  font-weight: 500;
`;

const IntroBox = styled.div`
  width: 28%;
  height: 296px;
  font-weight: 500;
  font-size: 27px;
  border: 1px solid #999;
  margin-top: 50px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BoxSpan = styled.span`
  font-weight: 400;
  font-size: 27px;
`;

const BoxNumSpan = styled.span`
  color: #00a99d;
  font-size: 60px;
  font-weight: bold;
  letter-spacing: 0px;
  font-family: 'Montserrat';
`;

const StButton = styled.button`
  width: 200px;
  height: 30px;
  background-color: rgb(0, 169, 157);
  font-size: 20px;
  cursor: pointer;
  border: none;
  color: white;
`;
