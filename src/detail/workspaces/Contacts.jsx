import BlackButton from '../../common/elements/BlackButton';
import styled from 'styled-components';
import Address from '../../components/Address';

export default function Contacts({ id }) {

  return (
    <>
      <StIntroContainer>
        <div>
          <StTitle>주소록</StTitle>
          <StContent>주소록입니다</StContent>
        </div>

        <BlackButton
          text='회원초대하기'
          onClick={() => {
            alert('모달창 생성여부확인');
          }}
        ></BlackButton>
      </StIntroContainer>
      <div>
        <Address />
      </div>
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

const StButton = styled.button`
  background-color: #000000;
  width: 150px;
  height: 35px;
  border-radius: 8px;
  border: 0px;
  color: #fff;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 500;
  /* letter-spacing: -1px; */
  cursor: pointer;
`;

const StTitle = styled.p`
  color: #333333;
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: -1.5px;
`;

const StContent = styled.p`
  margin-top: 10px;
  color: #333333;
  text-align: left;
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: -1px;
`;
