import styled from 'styled-components';
import { useState } from 'react';
import BlackButton from '../../common/elements/BlackButton';
import Address from './address/Address';
import InvitationCodeModal from '../../common/modal/InvitationCodeModal';

export default function Contacts({ data_1, error_1, isLoading_1 }) {
  const [invitationCodeOpen, setInvitationCodeOpen] = useState(false);

  const handleClose = () => {
    setInvitationCodeOpen(false);
  };
  const handleClick = () => {
    setInvitationCodeOpen(invitationCodeOpen === false);
  };

  return (
    <>
      <StIntroContainer>
        <div>
          <StTitle>주소록</StTitle>
          <StContent>프로젝트 전체 회원 정보</StContent>
        </div>

        <BlackButton text="초대코드 확인" onClick={handleClick} />
      </StIntroContainer>
      {invitationCodeOpen ? (
        <InvitationCodeModal onClose={handleClose} />
      ) : null}
      <div>
        <Address data_1={data_1} error_1={error_1} isLoading_1={isLoading_1} />
      </div>
    </>
  );
}

export const StIntroContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  min-height: 12vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #c6c6c6;
`;

export const StTitle = styled.div`
  color: #333333;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1.5px;
`;

export const StContent = styled.div`
  margin-top: 10px;
  color: #333333;
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -1px;
  line-height: 20px;
`;
