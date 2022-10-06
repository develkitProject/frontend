import styled from 'styled-components';
import { useState } from 'react';
import BlackButton from '../../common/elements/BlackButton';
import Address from './address/Address';
import InvitationCodeModal from '../../common/modal/InvitationCodeModal';
import { StContent, StIntroContainer, StTitle } from '../style';

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
