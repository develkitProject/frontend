import styled from 'styled-components';

function Address() {
  return (
    <StWrapper>
      <StAddressContainer>
        <StAddress>

        </StAddress>
      </StAddressContainer>
    </StWrapper>
  );
}

export default Address;

const StWrapper = styled.div`
  width: 96%;
  min-height: 40vh;
  margin-left: 2%;
  margin-top: 3%;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: row;
  align-items: left;
  color: #333333;
  font-size: 16px;
  letter-spacing: -0.8px;
`;

const StAddressContainer = styled.div`
  margin-top: 3%;
  width: 100%;
  min-height: 15vh;
  align-items: left;
`;

const StAddress = styled.div`
`;
