import styled from 'styled-components';
import React, { useState } from 'react';
import CodeConfirmModal from '../common/Modal/CodeConfirmModal';
import { useGetInviteCodeInfoMutation } from '../redux/modules/workspaces';

function SpaceHeader() {

  const [codeConfirm] = useGetInviteCodeInfoMutation();

  const [inviteCodeConfirm, setInviteCodeConfirm] = useState(false)
  let [code, setCode] = useState('');

  const onChange = (e) => {
    setCode(e.target.value);
  };

  const handleClose = () => {
    setInviteCodeConfirm(false);
  };

  const handleSubmit = () => {    
    if (code) {
      codeConfirm({code});
      setInviteCodeConfirm(inviteCodeConfirm === false ? true : false);

      } else {
           window.alert('코드를 입력해주세요');
         }
       }



  return (
    <StHeaderDiv>
      <StMent>
        스마트한 프로젝트 관리의 시작,
        <StMent style={{ fontWeight: '600' }}> 디벨킷</StMent>
      </StMent>
      <StSearch>
        <StInput
          onChange={onChange}
          placeholder='초대코드 입력하고 프로젝트 참여하기'
        ></StInput>
        <StGo
          onClick={handleSubmit}
        >
          Go.
        </StGo>
      </StSearch>
      {inviteCodeConfirm ? (
          <CodeConfirmModal onClose={handleClose} />
        ) : null}
    </StHeaderDiv>

  );
}

export default SpaceHeader;

const StHeaderDiv = styled.div`
  align-items: center;
  background-color: #00a99d;
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StMent = styled.span`
  max-width: 100%;
  color: white;
  font-size: 28px;
  margin-top: 20px;
`;

const StSearch = styled.div`
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 35%;
  position: relative;
`;

const StInput = styled.input`
  width: 100%;
  height: 45%;
  border-radius: 12px;
  margin-top: 30px;
  border: none;
  box-shadow: 0 0 10px 0 #00a99d;
  padding: 5px 25px 5px 25px;
  font-size: 1.2em;
  font-weight: 400;
  color: #999999;
  &:focus {
    outline: none;
  }
  box-sizing: border-box;
  display: inline;
`;

const StGo = styled.button`
  font-family: Montserrat;
  font-size: 1.2em;
  font-weight: 700;
  color: #00a99d;
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  margin-left: -65px;
  margin-top: 0;
  display: inline;
  cursor: pointer;
  /* @media screen and (max-width: 800px) {
    display: none;
  } */
`;
