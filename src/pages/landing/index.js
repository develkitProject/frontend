import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FullPage, Slide } from 'react-full-page/lib';
import 'animate.css';
import WorkSpaceErrorModal from '../../common/modal/error';
import SignupModal from '../../account/signup';
import { setIsSignUpModal } from '../../redux/modules/global';
import { selectIsSignUpModal } from '../../redux/modules/global/selectors';

import TopButton from '../../common/elements/TopButton';
import FirstSlide from './components/FirstSlide';
import SecondSlide from './components/SecondSlide';
import ThirdSlide from './components/ThirdSlide';
import FourthSlide from './components/FourthSlide';
import useModalOverlay from '../../account/signup/hooks/useModalOverlay';
import useGuestLogin from './hooks/useGuestLogin';

function Landing({ path, setPath }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { guestLogin, cookies } = useGuestLogin();
  const isSignUp = useSelector(selectIsSignUpModal);

  const {
    isOpen: isOpenErrorModal,
    open: openErrorModal,
    close: closeErrorModal,
  } = useModalOverlay();

  const openSignUpModal = () => {
    dispatch(setIsSignUpModal(true));
  };

  const goEventPage = () => {
    navigate('/event');
  };

  const onStartSubmit = () => {
    if (!cookies) {
      openErrorModal();
    } else {
      navigate('/workspace');
      setPath(2);
    }
  };

  const SlideComponents = [
    <FirstSlide
      setPath={setPath}
      path={path}
      onClickSubmit={onStartSubmit}
      cookies={cookies}
      onClickGuestLogin={guestLogin}
    />,
    <SecondSlide />,
    <ThirdSlide />,
    <FourthSlide
      onClickSignUpModal={openSignUpModal}
      onClickEventPage={goEventPage}
    />,
  ];

  return (
    <FullPage controls controlsProps={{ className: 'slide-navigation' }}>
      <TopButton />
      {SlideComponents.map((item, i) => (
        <Slide key={i}>{item}</Slide>
      ))}
      {isOpenErrorModal && (
        <WorkSpaceErrorModal
          open={isOpenErrorModal}
          onClose={closeErrorModal}
        />
      )}
      {isSignUp && <SignupModal open={isSignUp} />}
    </FullPage>
  );
}

export default Landing;
