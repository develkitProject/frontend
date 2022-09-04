import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCookieToken, removeCookieToken } from '../Cookie';
import alarm from '../img/alarm.svg';
import logo from '../img/logo.png';
import profile from '../img/profile.png';
import Login from '../login';
import SignupModal from '../signup/SignupModal';

function Header() {
  const navigate = useNavigate();
  const cookies = getCookieToken();

  const [isOpen, setIsOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const onLoginButton = () => {
    setIsOpen(true);
  };

  const onSignupButton = () => {
    setSignupOpen(true);
  };

  const logout = () => {
    removeCookieToken();
    // removeUserData();
    window.location.href = '/';
  };

  return (
    <StHeaderDiv>
      <StDiv onClick={() => navigate('/')}>
        <StLogo alt='logo' src={logo} />
      </StDiv>

      <StDiv>
        <StMenuName>About</StMenuName>
        <StMenuName>Proejct</StMenuName>
        <StMenuName>Community</StMenuName>
        <StMenuName>FAQ</StMenuName>
      </StDiv>

      {!cookies ? (
        <StDiv>
          <StLogJoin fc='#00A99D' onClick={onLoginButton}>
            LOGIN
          </StLogJoin>
          <StLogJoin fc='white'>·</StLogJoin>
          <StLogJoin
            fc='white'
            onClick={() => onSignupButton()}
            setSignupOpen={setSignupOpen}
            SignupButton={onSignupButton}
          >
            JOIN
          </StLogJoin>
          {/* <StLogBtn onClick={onLoginButton}>LOGIN</StLogBtn> */}
          {isOpen && (
            <Login
              setSignupOpen={setSignupOpen}
              SignupButton={onSignupButton}
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
            ></Login>
          )}
          {signupOpen && (
            <SignupModal
              open={signupOpen}
              onClose={() => {
                setSignupOpen(false);
              }}
            ></SignupModal>
          )}
          <StLogJoin>JOIN</StLogJoin>
        </StDiv>
      ) : (
        <StDiv>
          <StAlarmImg src={alarm} />
          <StProfileImg src={profile} onClick={() => navigate('/mypage')} />
          <StLogBtn
            onClick={() => {
              logout();
            }}
            style={{ marginRight: '40px' }}
          >
            LOGOUT
          </StLogBtn>
        </StDiv>
      )}
    </StHeaderDiv>
  );
}

export default Header;

const StHeaderDiv = styled.div`
  align-items: center;
  flex-direction: row;
  background-color: #000000;
  width: 100%;
  height: 10vh;
  left: 0px;
  top: 0px;
  /* border-bottom: 1px solid white; */
  display: flex;
  justify-content: space-around;
`;

const StDiv = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8%;
  margin-right: 8%;
`;

const StLogo = styled.img`
  width: 198px;
  height: 42px;
  cursor: pointer;
`;

const StMenuName = styled.p`
  color: white;
  letter-spacing: -0.05em;
  font-size: 20px;
  font-weight: 400;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
`;

const StLogJoin = styled.p`
  color: ${(props) => props.fc};
  padding-left: 5px;
  padding-right: 5px;
  font-family: 'Montserrat';
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const StLogBtn = styled.button`
  margin-right: 10px;
  width: 120px;
  height: 40px;
  border-radius: 100px;
  background-color: #040404;
  color: white;
  font-size: 16px;
  border: 1px solid #d7d7d7;
  cursor: pointer; ;
`;

const StProfileImg = styled.img`
  padding: 1px;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  border: solid black 1px;
  border-radius: 70%;
  background-color: white;
  cursor: pointer;
`;

const StAlarmImg = styled.img`
  padding: 1px;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  border: solid black 1px;
  border-radius: 70%;
  background-color: white;
  cursor: pointer;
`;
