import styled from 'styled-components';

function Footer() {
  return (
    <StHeaderDiv>
      <StDiv>
        <p>개인정보 처리 방침</p>
        <p>이용약관</p>
        <p>이메일무단수집거부</p>
      </StDiv>

      <StDiv>
        <p>Copyright©D.Velkit co.,Ltd. All Rights Reserved.</p>
      </StDiv>
    </StHeaderDiv>
  );
}

export default Footer;

const StHeaderDiv = styled.div`
  align-items: center;
  flex-direction: row;
  background-color: #a3a3a3;
  width: 100%;
  height: 85px;
  left: 0px;
  top: 0px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const StDiv = styled.div`
  margin: 20px;
`;
