import React, { useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import useOutSideClick from '../hooks/useOutSideClick';
import SecondCard1 from '../../asset/img/SecondCard1.png'
import { useGetInviteCodeInfoMutation } from '../../redux/modules/workspaces';

const CodeConfirmModal = ({ onClose }) => {
  const modalRef = useRef(null);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useOutSideClick(modalRef, handleClose);

  const { data, error, isLoading, refetch } = useGetInviteCodeInfoMutation();

  // useEffect(() => {
  //   refetch();
  // }, [data, refetch]);


  console.log(data)



  return (
    <ModalWrap ref={modalRef}>
      {/* {error ? (
        <>
        <div>에러가 발생했습니다.</div>
        <div>자세한 사항은 관리자에게 문의해주세요</div>
        </>
      ) : isLoading ? (
        <>초대코드 정보를 불러오는 중입니다.</>
      ) : data ? (
        <> */}
        <StMentDiv>
          <StTitle 
          fontWeight='bold' fontSize='24px' fontColor='#00a99d'>
            다음 프로젝트에 가입하시겠습니까?</StTitle>
          <StTitle fontSize='14px' fontColor='#626262'>
            아래 정보를 확인하시어 가입을 희망하시는 프로젝트가 맞는 경우 
            <span style={{fontWeight: "600"}}> “가입하기” </span>버튼을 눌러주세요</StTitle>
        </StMentDiv>
        <StInfoDiv>
            <StImg img={SecondCard1}></StImg>
            <StInfoDetail>
              <StInfoMent>디벨킷 프로젝트</StInfoMent>
              <StInfoMent>하루에 한번씩 4조를 응원해주는 프로젝트</StInfoMent>
              <StInfoMent>담당자: 갓호성 (개설일: 2022/09/24)</StInfoMent>
            </StInfoDetail>

        </StInfoDiv>
        <StButtonBox>
          <StButton fontColor="white" buttonColor="#00a99d">가입하기</StButton>
          <StButton fontColor="#424242" buttonColor="#D9D9D9"
           onClick={handleClose}>취소</StButton>
        </StButtonBox>
        {/* </>
      ) : null} */}
    </ModalWrap>
  );
};

export default CodeConfirmModal;

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
  border: 1.5px solid #00A99D;
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
  height: 125px;
  background-image: url(${(props) => props.img});
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
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #EEF8F8;
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