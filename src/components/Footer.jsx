import styled from 'styled-components';
import logo from '../asset/img/logo.png';
import { useNavigate} from 'react-router-dom';

function Footer() {

  const navigate = useNavigate();

  const moveMain = () => {
    navigate('/');
  };
  const moveProject = () => {
    navigate('/workspace');
  };


  return (
    <StFooterDiv>
      <StFooterWrapper>
       <StDivLeft>
        <StMenuDiv>
              <StMenuName onClick={moveMain}>About</StMenuName>
              <StMenuName onClick={moveProject}>Proejct</StMenuName>
              <StMenuName>Community</StMenuName>
              <StMenuName>FAQ</StMenuName>
              <StMenuName>Team</StMenuName>
        </StMenuDiv>

        <StInfoDiv>

          <StInfoDetail>
            <StInfoName cs="pointer">개인정보 처리 방침</StInfoName>
            <StInfoName>|</StInfoName>
            <StInfoName cs="pointer">이용약관</StInfoName>
            <StInfoName>|</StInfoName>
            <StInfoName cs="pointer">법적고지</StInfoName>
            <StInfoName>|</StInfoName>
            <StInfoName cs="pointer">이메일무단수집거부</StInfoName>
          </StInfoDetail>

          <StCopyright>
            <p>Copyright, D.vel kit.All rights reserved.</p>
          </StCopyright>
        </StInfoDiv>

      </StDivLeft>

        <StDivRight>
          <StLogo alt='logo' src={logo} />
        </StDivRight>
      </StFooterWrapper>
    </StFooterDiv>
  );
}

export default Footer;

const StFooterDiv = styled.div`
  align-items: center;
  flex-direction: row;
  background-color: #1B1B1B;
  color: #999999;
  width: 100%;
  height: 170px;
  left: 0px;
  top: 0px;
  position: relative;
  display: flex;
`;

const StFooterWrapper = styled.div`
  width: 100%;
  margin: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StDivLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const StMenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const StMenuName = styled.span`
  color: white;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.05em;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  margin-right: 25px;
`;

const StInfoDiv = styled.div`
  margin-top: 25px;
  color: #535353;
`;

const StInfoDetail = styled.div`
  display: flex;
  flex-direction: row;
`;

const StInfoName = styled.p`
  margin-right: 8px;
  cursor: ${(props) => props.cs};;

`;

const StCopyright = styled.p`
  margin-top: 10px;

`;

const StDivRight = styled.div`
  display: flex;
  align-items: center;
`;


const StLogo = styled.img`
  width: 140px;
  height: 30px;
`;



