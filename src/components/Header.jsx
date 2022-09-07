import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCookieToken, removeCookieToken } from '../Cookie';
import alarm from '../asset/img/alarm.svg';
import logo from '../asset/img/logo.png';
import Login from '../login';
import SignupModal from '../signup/SignupModal';
import useGetUser from '../hooks/useGetUser';

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

  const moveMain = () => {
    navigate('/');
  };
  const moveProject = () => {
    navigate('/workspace');
  };

  const logout = () => {
    removeCookieToken();
    // removeUserData();
    window.location.href = '/';
  };
  const { user } = useGetUser();

  return (
    <>
      <StHeaderDiv>
        <div
          style={{
            width: '50%',
            display: 'flex',
            marginLeft: '50px',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <StLogo alt='logo' src={logo} onClick={moveMain} />

          {/* <StDiv style={!matches ? { display: 'none' } : null}> */}
          <StMenuDiv>
            <StMenuName onClick={moveMain}>About</StMenuName>
            <StMenuName onClick={moveProject}>Proejct</StMenuName>
            <StMenuName>Community</StMenuName>
            <StMenuName>FAQ</StMenuName>
            {/* </StDiv> */}
          </StMenuDiv>
        </div>

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
            <StLogJoin>JOIN</StLogJoin>
          </StDiv>
        ) : (
          <StDiv>
            <StAlarmImg src={alarm} />
            <StProfileImg
              src={user.profileImageUrl}
              onClick={() => navigate('/mypage')}
            />

            <StLogBtn
              style={{ width: '10px', height: '10px', color: 'black' }}
              onClick={() => {
                logout();
              }}
            >
              LOGOUT
            </StLogBtn>
          </StDiv>
        )}
      </StHeaderDiv>
      {isOpen && (
        <Login
          setSignupOpen={setSignupOpen}
          onSignupButton={onSignupButton}
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
    </>
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
  justify-content: space-between;
  min-height: 100px;
`;

const StDiv = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-left: 8%;
  margin-right: 50px;
`;

const StLogo = styled.img`
  width: 198px;
  height: 42px;
  cursor: pointer;
`;

const StMenuName = styled.span`
  color: white;
  letter-spacing: -0.05em;
  font-size: 20px;
  font-weight: 400;
  margin-left: 60px;
  margin-right: 15px;
  font-family: 'Montserrat';
  font-weight: 600;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
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
  width: 50px;
  height: 50px;
  border-radius: 70%;
  /* background-color: white; */
  cursor: pointer;
`;

const StAlarmImg = styled.img`
  padding: 1px;
  margin-right: 20px;
  width: 20px;
  height: 20.5px;
  border: solid black 1px;
  /* border-radius: 70%; */
  /* background-color: white; */
  cursor: pointer;
`;

const StMenuDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
