import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { getCookieToken, removeCookieToken } from '../Cookie';
import alarm from '../asset/img/alarm.svg';
import logo from '../asset/img/logo.png';
import Login from '../login';
import SignupModal from '../signup/SignupModal';
import MyProfileModal from '../common/Modal/MyProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoginModal, setIsSignUpModal } from '../redux/modules/global';
import {
  selectIsLoginModal,
  selectIsSignUpModal,
} from '../redux/modules/global/selectors';
import { useGetUserInfoQuery } from '../redux/modules/workspaces';

function Header({ path, setPath }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = getCookieToken();

  const [profileOpen, setProfileOpen] = useState(false);

  const [user, setUser] = useState('');

  const isLogin = useSelector(selectIsLoginModal);
  const isSignUp = useSelector(selectIsSignUpModal);

  const { data } = useGetUserInfoQuery();

  // const { user } = useMemo(() => {
  //   return useGetUser();
  // }, []);

  const userData = data?.data;

  const openLoginModal = () => {
    dispatch(setIsLoginModal(true));
  };

  const openSignUpModal = () => {
    dispatch(setIsSignUpModal(true));
  };

  const handleClose = () => {
    setProfileOpen(false);
  };

  const moveMain = () => {
    navigate('/');
    setPath(1);
  };
  const moveProject = () => {
    setPath(2);
    navigate('/workspace');
  };
  const moveFAQ = () => {
    setPath(4);
    navigate('/faq');
  };

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
            <StMenuName
              onClick={moveMain}
              style={path === 1 ? { opacity: '1' } : null}
            >
              About
            </StMenuName>
            <StMenuName
              onClick={moveProject}
              style={path === 2 ? { opacity: '1' } : null}
            >
              Proejct
            </StMenuName>
            <StMenuName
              onClick={() => {
                alert('기능 준비중입니다!');
              }}
            >
              Community
            </StMenuName>
            <StMenuName onClick={moveFAQ}>FAQ</StMenuName>
            {/* </StDiv> */}
          </StMenuDiv>
        </div>

        {!cookies ? (
          <StDiv>
            <StLogJoin fc='#00A99D' onClick={openLoginModal}>
              LOGIN
            </StLogJoin>
            <StLogJoin fc='white'>·</StLogJoin>
            <StLogJoin
              fc='white'
              onClick={openSignUpModal}
              SignupButton={openSignUpModal}
            >
              JOIN
            </StLogJoin>
            <StLogJoin>JOIN</StLogJoin>
          </StDiv>
        ) : (
          <StDiv>
            <StAlarmImg src={alarm} />
            <StProfileImg
              src={userData?.profileImageUrl}
              onClick={() => {
                setProfileOpen(profileOpen === false ? true : false);
              }}
            />
            {profileOpen ? (
              <MyProfileModal userData={userData} onClose={handleClose} />
            ) : null}
          </StDiv>
        )}
      </StHeaderDiv>
      {isLogin && (
        <Login onSignupButton={openSignUpModal} open={isLogin}></Login>
      )}
      {isSignUp && <SignupModal open={isSignUp}></SignupModal>}
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
  position: relative;
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
  letter-spacing: -0.05em;
  font-size: 20px;
  font-weight: 400;
  margin-left: 60px;
  margin-right: 15px;
  font-family: 'Montserrat';
  font-weight: 600;
  color: white;
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
