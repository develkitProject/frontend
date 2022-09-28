import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useGetInviteCodeQuery } from '../../redux/modules/workspaces';
import useOutSideClick from '../hooks/useOutSideClick';

function InvitationCodeModal({ onClose }) {
  const params = useParams();
  const id = Number(params.id);
  const modalRef = useRef(null);
  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useOutSideClick(modalRef, handleClose);
  const { data, error, isLoading } = useGetInviteCodeQuery(id);
  const invite_code = data?.data?.code;
  console.log(data);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(invite_code).then(() => {
        alert('코드를 복사했습니다.');
        handleClose();
      });
    } catch (e) {
      alert('코드복사에러: 브라우저(IE지원불가)를 확인해주세요');
    }
  };

  return (
    <ModalWrap ref={modalRef}>
      {error ? (
        <>
          <div>에러가 발생했습니다.</div>
          <div>자세한 사항은 관리자에게 문의해주세요</div>
        </>
      ) : isLoading ? (
        <>초대코드 정보를 불러오는 중입니다.</>
      ) : data ? (
        <>
          <StTitle>{data?.data.workspaceTitle} 초대코드</StTitle>
          <StCodeDiv>
            <StCode>{invite_code}</StCode>
          </StCodeDiv>
          <StButton onClick={copyCode}>초대코드 복사하기</StButton>
          <StMent>*코드를 복사하여 초대하고 싶은 회원에게 전달해주세요</StMent>
        </>
      ) : null}
    </ModalWrap>
  );
}

export default InvitationCodeModal;

const ModalWrap = styled.div`
  position: fixed;
  margin-top: 70px;
  margin-left: 20%;
  width: 460px;
  height: 250px;
  border-radius: 16px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #999999;
  z-index: 9999;
  font-family: 'Noto Sans KR';
  box-shadow: 3px 3px 3px rgba(85, 85, 85, 0.1);
`;

const StTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #212121;
  letter-spacing: -0.05em;
`;

const StCodeDiv = styled.div`
  margin-top: 15px;
  font-weight: 700;
  font-size: 20px;
  padding: 4px;
  background-color: #eef8f8;
`;

const StCode = styled.div`
  padding: 13px;
  font-weight: 500;
  font-size: 16px;
  color: #00a99d;
  letter-spacing: -0.05em;
`;

export const StButton = styled.button`
  padding: 10px 100px 10px 100px;
  border-radius: 8px;
  border: none;
  background-color: #00a99d;
  margin-top: 15px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

const StMent = styled.div`
  margin-top: 10px;
  font-weight: 400;
  font-size: 14px;
  color: #999999;
  letter-spacing: -0.05em;
`;
