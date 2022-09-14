import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useGetMainWorkSpacesQuery } from '../../redux/modules/workspaces';
import useOutSideClick from '../hooks/useOutSideClick';

const InvitationCodeModal = ({ onClose }) => {
  const params = useParams();
  const id = Number(params.id);

  const modalRef = useRef(null);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useOutSideClick(modalRef, handleClose);

  const { data, error, isLoading } = useGetMainWorkSpacesQuery(id);
  const invite_code = data?.data?.workspaces?.invite_code;

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
        <>에러가 발생했습니다.</>
      ) : isLoading ? (
        <>초대코드 정보를 불러오는 중입니다.</>
      ) : data ? (
        <>
          <StTitle>'{data?.data?.workspaces?.title}' 초대코드</StTitle>
          <StCodeDiv>
            <StCode>{invite_code}</StCode>
          </StCodeDiv>
          <StButton onClick={copyCode}>초대코드 복사하기</StButton>
          <StMent>*코드를 복사하여 초대하고 싶은 팀원에게 전달해주세요</StMent>
        </>
      ) : null}
    </ModalWrap>
  );
};

export default InvitationCodeModal;

const ModalWrap = styled.div`
  position: fixed;
  margin-top: 70px;
  margin-left: 20%;
  width: 460px;
  height: 220px;
  border-radius: 16px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #999999;
  z-index: 9999;
  box-shadow: 3px 3px 3px rgba(85, 85, 85, 0.1);
`;

const StTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #626262;
  letter-spacing: -0.05em;
`;

const StCodeDiv = styled.div`
  margin-top: 10px;
  font-weight: 700;
  font-size: 20px;
  background-color: #eef8f8;
`;

const StCode = styled.div`
  padding: 13px;
  font-weight: 700;
  font-size: 20px;
  color: #333333;
  letter-spacing: -0.05em;
`;

export const StButton = styled.button`
  padding: 10px 100px 10px 100px;
  border-radius: 8px;
  border: none;
  background-color: #00a99d;
  margin-top: 20px;
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
