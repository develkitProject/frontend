import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { getCookieToken, removeCookieToken } from '../Cookie';
import alarm from '../img/alarm.svg';
import logo from '../img/logo.png';
import profile from '../img/profile.png';
import LoginModal from '../Modal/LoginModal';
import SignupModal from '../Modal/SignupModal';

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
    window.location.href = '/login';
  };

  return (
    <StHeaderDiv>
      <StDiv onClick={() => navigate('/')}>
        <StLogo alt='logo' src={logo} />
        <StName onClick={() => navigate('/')}>D.Velkit</StName>
      </StDiv>

      {!cookies ? (
        <StDiv>
          <StLogBtn onClick={onLoginButton}>LOGIN</StLogBtn>
          {isOpen && (
            <LoginModal
              setSignupOpen={setSignupOpen}
              onSignupButton={onSignupButton}
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
            ></LoginModal>
          )}
          {signupOpen && (
            <SignupModal
              open={signupOpen}
              onClose={() => {
                setSignupOpen(false);
              }}
            ></SignupModal>
          )}
          <StJoinBtn
            onClick={onSignupButton}
            setSignupOpen={setSignupOpen}
            onSignupButton={onSignupButton}
          >
            JOIN
          </StJoinBtn>
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
  background-color: #040404;
  width: 100%;
  height: 10vh;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: space-between;
`;

const StDiv = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
`;

const StLogo = styled.img`
  margin-left: 40px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const StName = styled.p`
  color: white;
  font-size: 26px;
  font-weight: 500;
  margin-left: 15px;
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

const StJoinBtn = styled.button`
  margin-right: 40px;
  width: 120px;
  height: 40px;
  border-radius: 100px;
  background-color: #244ddd;
  color: white;
  font-size: 16px;
  border: solid #244ddd 1px;
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
