import React, { useEffect, useState, useReducer } from 'react';
import styled from 'styled-components';
import useGetUser from '../hooks/useGetUser';
import {
  useGetWorkspacesQuery,
  useAddWorkSpacesMutation,
  useDeleteWorkSpacesMutation,
} from '../redux/modules/workspaces';

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

function MyPage1() {
  const { user } = useGetUser();
  const { data, error, isLoading } = useGetWorkspacesQuery();
  const [addWorkSpaces] = useAddWorkSpacesMutation();
  const [deleteWorkSpaces] = useDeleteWorkSpacesMutation();
  const workspaces = data?.data?.workSpaces;

  const [state, setState] = useReducer(reducer, {
    title: '',
    content: '',
  });
  const { title, content } = state;

  const onChange = (e) => {
    setState(e.target);
  };

  const handleSubmit = () => {
    addWorkSpaces(state);
    setState({ title: '', content: '' });
  };

  return (
    <StWrapper>
      <RowDiv>
        <TabDiv1>
          <MyPageSpan>마이페이지</MyPageSpan>
          <TabSpan>프로젝트 관리</TabSpan>
          <TabSpan>회원정보</TabSpan>
        </TabDiv1>
        <TabDiv2>
          <Intro>
            <Intro style={{ fontWeight: '700' }}>{user?.nickname}님</Intro>,
            오늘도 디벨킷에서 성장하고 있습니다 🙌
          </Intro>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <IntroBox>
              <div>
                <BoxSpan>참여중인 </BoxSpan>
                <BoxSpan style={{ fontWeight: '500' }}>프로젝트</BoxSpan>
              </div>
              <div style={{ marginTop: '50px' }}>
                <BoxSpan
                  style={{
                    color: '#00a99d',
                    fontSize: '60px',
                    fontWeight: 'bold',
                    letterSpacing: '0px',
                    fontFamily: 'Montserrat',
                  }}
                >
                  8
                </BoxSpan>
                <BoxSpan> 개</BoxSpan>
              </div>
            </IntroBox>
            <IntroBox>
              <div>
                <BoxSpan>참여한 </BoxSpan>
                <BoxSpan style={{ fontWeight: '500' }}>총 일정</BoxSpan>
              </div>
              <div style={{ marginTop: '50px' }}>
                <BoxSpan
                  style={{
                    color: '#00a99d',
                    fontSize: '60px',
                    fontWeight: 'bold',
                    letterSpacing: '0px',
                    fontFamily: 'Montserrat',
                  }}
                >
                  50
                </BoxSpan>
                <BoxSpan> 개</BoxSpan>
              </div>
            </IntroBox>
            <IntroBox>
              <div>
                <BoxSpan>총 </BoxSpan>
                <BoxSpan style={{ fontWeight: '500' }}>게시글 </BoxSpan>
                <BoxSpan>작성 수</BoxSpan>
              </div>
              <div style={{ marginTop: '50px' }}>
                <BoxSpan
                  style={{
                    color: '#00a99d',
                    fontSize: '60px',
                    fontWeight: 'bold',
                    letterSpacing: '0px',
                    fontFamily: 'Montserrat',
                  }}
                >
                  120
                </BoxSpan>
                <BoxSpan> 건</BoxSpan>
              </div>
            </IntroBox>
          </div>
          <Intro style={{ marginTop: '50px', fontWeight: '400' }}>
            프로젝트 관리
          </Intro>
          <StButton onClick={handleSubmit}>space 생성</StButton>
          <input
            id='title'
            placeholder='title'
            onChange={onChange}
            name='title'
          ></input>
          <input
            id='content'
            placeholder='content'
            onChange={onChange}
            name='content'
          ></input>
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <>
              {workspaces?.map((a, i) => {
                return (
                  <div key={i}>
                    <h3 style={{ marginTop: '30px' }}>{a.title}</h3>
                    <h3>{a.content}</h3>
                    <button onClick={() => deleteWorkSpaces(a.id)}>
                      지우기버튼
                    </button>
                  </div>
                );
              })}
            </>
          ) : null}
        </TabDiv2>
      </RowDiv>
    </StWrapper>
  );
}

export default MyPage1;

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
`;

const Intro = styled.span`
  width: 100%;
  font-size: 30px;
  font-weight: 500;
`;

const IntroBox = styled.div`
  width: 411px;
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

const StButton = styled.button`
  width: 200px;
  height: 30px;
  background-color: rgb(0, 169, 157);
  font-size: 20px;
  cursor: pointer;
  border: none;
  color: white;
`;
