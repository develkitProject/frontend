import React from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CardProfile from '../common/elements/CardProfile';

function SpaceCard({ data, error, isLoading, width }) {
  const navigate = useNavigate();

  return (
    <>
      {error ? (
        <>
          <div>에러가 발생했습니다.</div>
          <div>자세한 사항은 관리자에게 문의해주세요</div>
        </>
      ) : isLoading ? (
        <>정보를 불러오는 중입니다.</>
      ) : data ? (
        <>
          <StSpaceCard direction="row" width={width} key={data.workspaces.id}>
            <StCardImage
              data={data.workspaces}
              onClick={() => {
                navigate(`/workspace/main/${data.workspaces.id}`);
              }}
            />
            <StFooterBox>
              <StFooterDiv>
                <StFooter>
                  <SpaceName fontSize="22">{data.workspaces.title}</SpaceName>
                  <SpaceDate>
                    {data.workspaces.createdAt.slice(0, -13)}
                  </SpaceDate>
                  <SpaceGoal weight="500">
                    {data.workspaces.content}
                    {/* 목표{' '} */}
                    {/* <SpaceGoal
                weight='200'
                style={{ marginLeft: '10px', fontWeight: '400' }}
              >
                
              </SpaceGoal> */}
                  </SpaceGoal>
                </StFooter>
                <CardProfile data={data.workspaces} />
              </StFooterDiv>
              <hr
                style={{
                  width: '95%',
                  height: '0.5px',
                  backgroundColor: '#dddddd',
                }}
              />
              <StFooter>
                <StDiv>
                  <SpaceName style={{ color: '#00a99d', marginRight: '10px' }}>
                    공지
                  </SpaceName>

                  {data?.notices === null ? (
                    <SpaceName
                      style={{
                        color: '#999999',
                        marginRight: '10px',
                        fontWeight: '400',
                      }}
                    >
                      등록된 공지사항이 없습니다.
                    </SpaceName>
                  ) : (
                    <>
                      <SpaceName
                        style={{
                          color: '#999999',
                          marginRight: '10px',
                          fontWeight: '500',
                        }}
                      >
                        {data?.notices?.createdAt.slice(0, -13)}
                      </SpaceName>
                      <SpaceName style={{ color: 'black', fontWeight: '400' }}>
                        {data?.notices.title}
                      </SpaceName>
                    </>
                  )}
                </StDiv>
                <StDiv>
                  <SpaceName style={{ color: '#00a99d', marginRight: '10px' }}>
                    일정
                  </SpaceName>
                  {data?.workspaces?.scheduleCreatedAt === null ? (
                    <SpaceName
                      style={{
                        color: '#999999',
                        marginRight: '10px',
                        fontWeight: '400',
                      }}
                    >
                      등록된 일정이 없습니다.
                    </SpaceName>
                  ) : (
                    <>
                      <SpaceName
                        style={{
                          color: '#999999',
                          marginRight: '10px',
                          fontWeight: '500',
                        }}
                      >
                        {data?.workspaces?.scheduleCreatedAt.slice(0, -13)}
                      </SpaceName>
                      <SpaceName style={{ color: 'black', fontWeight: '400' }}>
                        {data?.workspaces?.scheduleContent}
                      </SpaceName>
                    </>
                  )}
                </StDiv>

                <StDiv>
                  <SpaceName style={{ color: '#00a99d', marginRight: '10px' }}>
                    문서
                  </SpaceName>
                  {data?.workspaces?.documentCreatedAt === null ? (
                    <SpaceName
                      style={{
                        color: '#999999',
                        marginRight: '10px',
                        fontWeight: '400',
                      }}
                    >
                      등록된 문서가 없습니다.
                    </SpaceName>
                  ) : (
                    <>
                      <SpaceName
                        style={{
                          color: '#999999',
                          marginRight: '10px',
                          fontWeight: '500',
                        }}
                      >
                        {data?.workspaces?.documentCreatedAt.slice(0, -13)}
                      </SpaceName>
                      <SpaceName style={{ color: 'black', fontWeight: '400' }}>
                        {data?.workspaces?.documentTitle}
                      </SpaceName>
                    </>
                  )}
                </StDiv>
              </StFooter>
            </StFooterBox>
          </StSpaceCard>
        </>
      ) : null}
    </>
  );
}

export default SpaceCard;

const StSpaceCard = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  margin: 10px 10px 10px 10px;
  width: ${(props) => props.width};
  height: 300px;
  border-radius: 16px;
  /* margin-left: 20px; */
  margin-bottom: 30px;
  background-color: white;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.1);
`;

const StCardImage = styled.div`
  cursor: pointer;
  width: 40%;
  height: 100%;
  border-radius: 16px 16px 16px 16px;
  background-image: url(${(props) => props.data.imageUrl});
  background-size: 100% 100%;
  position: relative;
  background-blend-mode: multiply;
  &:hover {
    background-color: #978888;
    z-index: 9;
  }
`;

const StFooterBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: left;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 10px;
`;

const StFooterDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StFooter = styled.div`
  margin-left: 20px;
  width: 80%;
  height: 50%;
  display: flex;
  align-items: left;
  text-align: left;
  flex-direction: column;
  position: relative;
  font-size: 17px;
  line-height: 18px;
`;

const StDiv = styled.div`
  margin-top: 10px;
  /* overflow: hidden; */
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SpaceName = styled.span`
  font-size: ${(props) => props.fontSize}px;
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  letter-spacing: -0.05em;
`;

const SpaceDate = styled.span`
  margin-top: 10px;
  font-size: 16px;
  height: 17px;
  font-weight: 500;
  font-family: 'Montserrat';
  color: #999;
`;

const SpaceGoal = styled.span`
  margin-top: 35px;
  font-size: 18px;
  height: 23px;
  font-weight: ${(props) => props.weight};
  font-family: 'Noto Sans KR', sans-serif;
  color: #999;
`;
