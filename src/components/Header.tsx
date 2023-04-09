import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getCookieToken, removeCookieToken } from '../Cookie';
import alarm from '../common/img/alarm.svg';
import logo from '../common/img/logo.png';
import Login from '../account/login';
import SignupModal from '../account/signup';
import MyProfileModal from '../common/modal/MyProfileModal';
import { setIsLoginModal, setIsSignUpModal } from '../redux/modules/global';
import {
  selectIsLoginModal,
  selectIsSignUpModal,
} from '../redux/modules/global/selectors';
import { useGetUserInfoQuery } from '../redux/modules/user';
import { SweetAlertHook } from '../common/elements/SweetAlert';

function Header({ path, setPath }: {
  path: number;
  setPath: (path: number) => void;
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = getCookieToken();
  const location = useLocation().pathname;

  const [profileOpen, setProfileOpen] = useState(false);

  const isLogin = useSelector(selectIsLoginModal);
  const isSignUp = useSelector(selectIsSignUpModal);
  const { data } = useGetUserInfoQuery(cookies, {
    skip: cookies === undefined,
  });

  useEffect(() => {
    if (location === '/') {
      setPath(1);
    } else if (location === '/faq') {
      setPath(4);
    } else if (location === '/event') {
      setPath(5);
    } else {
      setPath(2);
    }
  }, []);

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

  const onMoveHandle = (path: number, page: string) => {
    setPath(path);
    navigate(page);
  };

  const handleAlarm = () => {
    SweetAlertHook(2000, 'error', '기능 구현 중 입니다.');
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
          <StLogo
            alt="logo"
            src={logo}
            onClick={() => {
              onMoveHandle(1, '/');
            }}
          />

          <StMenuDiv>
            <StMenuName
              onClick={() => {
                onMoveHandle(1, '/');
              }}
              style={{opacity: `${path === 1} ? '1' : null`}}
            >
              About
            </StMenuName>
            <StMenuName
              onClick={() => {
                onMoveHandle(2, '/workspace');
              }}
              style={{opacity: `${path === 2} ? '1' : null`}}
            >
              Project
            </StMenuName>
            <StMenuName
              onClick={() => {
                onMoveHandle(4, '/faq');
              }}
              style={{opacity: `${path === 4} ? '1' : null`}}
            >
              FAQ
            </StMenuName>
            <StMenuName
              onClick={() => {
                onMoveHandle(5, '/event');
              }}
              style={{opacity: `${path === 5} ? '1' : null`}}
            >
              Event
            </StMenuName>
          </StMenuDiv>
        </div>

        {!cookies ? (
          <StDiv>
            <StLogJoin fontColor="#00A99D" onClick={openLoginModal}>
              LOGIN
            </StLogJoin>
            <StLogJoin fontColor="white">·</StLogJoin>
            <StLogJoin
              fontColor="white"
              onClick={openSignUpModal}
            >
              JOIN
            </StLogJoin>
            <StLogJoin>JOIN</StLogJoin>
          </StDiv>
        ) : (
          <StDiv>
            {/* <StAlarmImg src={alarm} onClick={handleAlarm} /> */}
            <StProfileImg
              src={userData?.profileImageUrl}
              onClick={() => {
                setProfileOpen(profileOpen === false);
              }}
            />
            {profileOpen ? (
              <MyProfileModal userData={userData} onClose={handleClose} />
            ) : null}
          </StDiv>
        )}
      </StHeaderDiv>
      {isLogin && <Login />}
      {isSignUp && <SignupModal/>}
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

const StLogJoin = styled.p<{fontColor?: string}>`
  color: ${(props) => props.fontColor};
  padding-left: 5px;
  padding-right: 5px;
  font-family: 'Montserrat';
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const StProfileImg = styled.img`
  padding: 1px;
  margin-right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 70%;
  cursor: pointer;
`;

const StAlarmImg = styled.img`
  padding: 1px;
  margin-right: 20px;
  width: 20px;
  height: 20.5px;
  border: solid black 1px;
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
