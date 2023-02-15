import React, { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useOutSideClick from '../hooks/useOutSideClick';
import { useGetWorkSpacesJoinMutation } from '../../redux/modules/workspaces';
import { getCookieToken } from '../../Cookie';
import { SweetAlertHook } from '../elements/SweetAlert';

function CodeConfirmModal({ onClose, spaceData }) {
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const headers = {
    Authorization: getCookieToken(),
  };
  const [getWorkSpacesJoin, { error }] = useGetWorkSpacesJoinMutation();
  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useOutSideClick(modalRef, handleClose);

  const onJoin = async () => {
    try {
      const result = await getWorkSpacesJoin(spaceData.id).unwrap();
      SweetAlertHook(2000, 'success', '가입되었습니다!');
      navigate(`/workspace/main/${spaceData.id}`);
    } catch (error) {
      alert('이미 가입된 워크스페이스입니다!');
    }
  };

  return (
    <Overlay>
      <ModalWrap ref={modalRef}>
        {spaceData ? (
          <>
            <StMentDiv>
              <StTitle fontWeight="bold" fontSize="24px" fontColor="#00a99d">
                다음 프로젝트에 가입하시겠습니까?
              </StTitle>
              <StTitle fontSize="14px" fontColor="#626262">
                아래 정보를 확인하시어 가입을 희망하시는 프로젝트가 맞는 경우
                <span style={{ fontWeight: '600' }}> “가입하기” </span>버튼을
                눌러주세요
              </StTitle>
            </StMentDiv>
            <StInfoDiv>
              <StImg img={spaceData.imageUrl} />
              <StInfoDetail>
                <StInfoMent>{spaceData.title}</StInfoMent>
                <StInfoMent>{spaceData.content}</StInfoMent>
                <StInfoMent>
                  담당자: {spaceData.createdBy.nickname} (
                  {spaceData.createdAt.split(' ')[0]})
                </StInfoMent>
              </StInfoDetail>
            </StInfoDiv>
            <StButtonBox>
              <StButton
                fontColor="white"
                buttonColor="#00a99d"
                onClick={onJoin}
              >
                가입하기
              </StButton>
              <StButton
                fontColor="#424242"
                buttonColor="#D9D9D9"
                onClick={onClose}
              >
                취소
              </StButton>
            </StButtonBox>
          </>
        ) : (
          <StTitle fontWeight="bold" fontSize="22px" fontColor="#00a99d">
            잘못된 초대코드입니다.
            <br />
            초대코드를 다시 한번 확인해주세요
          </StTitle>
        )}
      </ModalWrap>
    </Overlay>
  );
}

export default CodeConfirmModal;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  height: 360px;
  border-radius: 20px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #00a99d;
  z-index: 9999;
  font-family: 'Noto Sans KR';
  box-shadow: 3px 3px 3px rgba(85, 85, 85, 0.1);
`;

const StMentDiv = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StTitle = styled.div`
  letter-spacing: -1px;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  margin-top: 10px;
`;

const StInfoDiv = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StImg = styled.div`
  margin-top: 8px;
  width: 150px;
  height: 135px;
  background-image: url(${(props) => props.img});
  background-size: 100% 100%;
  border-radius: 20px;
`;

const StInfoDetail = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const StInfoMent = styled.div`
  width: 300px;
  margin-top: 6px;
  margin-bottom: 6px;
  background-color: #eef8f8;
  font-weight: 500;
  font-size: 16px;
  color: #424242;
  letter-spacing: -0.05em;
  padding: 10px 10px 10px 10px;
  overflow: hidden;
`;

const StButtonBox = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
`;

export const StButton = styled.button`
  width: 170px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px 30px 10px 30px;
  border-radius: 8px;
  border: none;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.buttonColor};
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;
