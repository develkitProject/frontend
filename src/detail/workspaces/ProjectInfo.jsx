import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BlackButton from '../../common/elements/BlackButton';
import {
  useDeleteWorkSpacesMutation,
  useGetWorkspaceInfoQuery,
  useQuitWorkSpaceMutation,
} from '../../redux/modules/workspaces';
import UpdateSpaceModal from '../../common/modal/UpdateSpaceModal';
import { StContent, StIntroContainer, StTitle } from '../style';
import { SweetAlertConfirmHook } from '../../common/elements/SweetAlertConfirm';

export default function ProjectInfo({ id, user }) {
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetWorkspaceInfoQuery(id);
  const info = data?.data;
  const leaderInfo = data?.data?.createUserEmail;
  const userInfo = user?.username;
  const [updateOpen, setUpdateOpen] = useState(false);

  const handleClose = () => {
    setUpdateOpen(false);
  };
  const [deleteWorkSpaces] = useDeleteWorkSpacesMutation();

  const delProjectFunc = () => {
    deleteWorkSpaces(id);
    navigate('/workspace');
  };

  const deleteWorkSpace = () => {
    // eslint-disable-next-line no-empty
    if (
      SweetAlertConfirmHook('정말 프로젝트를 삭제하시겠습니까?', delProjectFunc)
    ) {
      // eslint-disable-next-line no-empty
    }
  };

  const [quitWorkSpaces] = useQuitWorkSpaceMutation();

  const quitWorkspaceFunc = (id) => {
    quitWorkSpaces(id);
    navigate('/workspace');
  };

  const quitWorkSpace = (id) => {
    // eslint-disable-next-line no-empty
    if (
      SweetAlertConfirmHook('정말 탈퇴하시겠습니까?', quitWorkspaceFunc, id)
    ) {
      // eslint-disable-next-line no-empty
    }
  };

  return (
    <>
      <StIntroContainer>
        <div>
          <StTitle>프로젝트 정보</StTitle>
          <StContent>
            프로젝트 정보 확인 및 탈퇴 (팀장의 경우 프로젝트 수정 및 삭제 가능)
          </StContent>
        </div>
        {userInfo === leaderInfo ? (
          <BlackButton
            onClick={() => {
              setUpdateOpen(true);
            }}
            text="정보수정하기"
          />
        ) : null}
      </StIntroContainer>
      {updateOpen ? <UpdateSpaceModal onClose={handleClose} /> : null}
      <StBodyContainer>
        {error ? (
          <>에러가 발생했습니다.</>
        ) : isLoading ? (
          <>프로젝트 정보를 불러오는 중입니다.</>
        ) : data ? (
          <>
            <StImg img={info.imageUrl} />
            <StInfoContainer>
              <StTitle style={{ fontSize: '18px' }}>프로젝트 이름</StTitle>
              <StContent>{info.title}</StContent>
              <StTitle style={{ fontSize: '18px', marginTop: '20px' }}>
                프로젝트 소개
              </StTitle>
              <StContent>{info.content}</StContent>
            </StInfoContainer>
            <StInfoContainer>
              <StTitle style={{ fontSize: '18px' }}>프로젝트 생성일자</StTitle>
              <StContent>{info.createdAt.slice(0, -13)}</StContent>
              <StTitle style={{ fontSize: '18px', marginTop: '20px' }}>
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

const StBodyContainer = styled.div`
  margin-top: 30px;
  margin-left: 40px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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
