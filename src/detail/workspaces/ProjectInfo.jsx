import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NoticeList from './notice/NoticeList';
import BlackButton from '../../common/elements/BlackButton';
import {
  useDeleteWorkSpacesMutation,
  useGetWorkspaceInfoQuery,
  useQuitWorkSpaceMutation,
} from '../../redux/modules/workspaces';

export default function ProjectInfo({ id, user }) {
  const navigate = useNavigate();
  const params = useParams();

  const { data, error, isLoading, refetch } = useGetWorkspaceInfoQuery(id);
  const info = data?.data;
  const leaderInfo = data?.data?.createUserEmail;
  const userInfo = user?.username;

  const [deleteWorkSpaces] = useDeleteWorkSpacesMutation();
  const deleteWorkSpace = (id) => {
    if (window.confirm('정말 지우시겠습니까?')) {
      deleteWorkSpaces(id);
      navigate('/workspace');
    } else {
      return;
    }
  };

  const [quitWorkSpaces] = useQuitWorkSpaceMutation();
  const quitWorkSpace = (id) => {
    if (window.confirm('정말 탈퇴하시겠습니까?')) {
      quitWorkSpaces(id);
      navigate('/workspace');
    } else {
      return;
    }
  };

  return (
    <>
      <StIntroContainer>
        <div>
          <StTitle fontSize='24'>프로젝트 정보</StTitle>
          <StContent>
            프로젝트 정보 확인 및 탈퇴 (팀장의 경우 프로젝트 수정 및 삭제 가능)
          </StContent>
        </div>
        {userInfo === leaderInfo ? (
          <BlackButton text='정보수정하기'></BlackButton>
        ) : null}
      </StIntroContainer>
      <StBodyContainer>
        {error ? (
          <>에러가 발생했습니다.</>
        ) : isLoading ? (
          <>프로젝트 정보를 불러오는 중입니다.</>
        ) : data ? (
          <>
            <StImg img={info.imageUrl}></StImg>
            <StInfoContainer>
              <StTitle fontSize='18'>프로젝트 이름</StTitle>
              <StContent>{info.title}</StContent>
              <StTitle fontSize='18' style={{ marginTop: '20px' }}>
                프로젝트 소개
              </StTitle>
              <StContent>{info.content}</StContent>
            </StInfoContainer>
            <StInfoContainer>
              <StTitle fontSize='18'>프로젝트 생성일자</StTitle>
              <StContent>{info.createdAt.slice(0, -13)}</StContent>
              <StTitle fontSize='18' style={{ marginTop: '20px' }}>
                프로젝트 팀원
              </StTitle>
              <StContent>{info.userNumInWorkSpace}명</StContent>
              {userInfo === leaderInfo ? (
                <StDelete
                  onClick={() => {
                    deleteWorkSpace(id);
                  }}
                >
                  프로젝트 삭제
                </StDelete>
              ) : (
                <StDelete
                  onClick={() => {
                    quitWorkSpace(id);
                  }}
                >
                  프로젝트 탈퇴
                </StDelete>
              )}
            </StInfoContainer>
          </>
        ) : null}
      </StBodyContainer>
    </>
  );
}

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

const StBodyContainer = styled.div`
  margin-top: 30px;
  margin-left: 40px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const StTitle = styled.p`
  color: #333333;
  text-align: left;
  font-size: ${(props) => props.fontSize}px;
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
  line-height: 20px;
`;

const StImg = styled.div`
  width: 400px;
  height: 250px;
  background-image: url(${(props) => props.img});
  background-size: 100% 100%;
  border-radius: 20px;
`;

const StInfoContainer = styled.div`
  width: 25%;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StDelete = styled.p`
  margin-top: 10px;
  color: #999999;
  text-align: right;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -1px;
  cursor: pointer;
  display: flex;
  margin-top: 100px;
  align-self: right;
  margin-left: 100px;
  text-decoration-line: underline;
`;
