import React from 'react';

import scroll from '../../../common/img/scroll.svg';
import icon from '../../../common/img/icon1.png';
import Header from '../../../components/Header';
import 'animate.css';

import * as St from '../style';

function FirstSlide({
  setPath,
  path,
  onClickSubmit,
  cookies,
  onClickGuestLogin,
}) {
  return (
    <>
      <Header setPath={setPath} path={path} />
      <St.Wrapper height="100vh">
        <St.Main>
          <St.Wrap dp="flex">
            <St.Intro>
              <St.Ment>
                let <St.Ment fontColor="#00A99D">D_Velkit</St.Ment> ={' '}
                <St.Ment fontColor="#F5D28C">
                  “Develop Your Teamwork through D.VelKit!”;
                </St.Ment>
              </St.Ment>

              <St.IntroMent>
                <div style={{ marginBottom: '15px' }}>
                  성장하는 사람들을 위한
                </div>
                <div>
                  프로젝트 협업 서비스,{' '}
                  <span style={{ color: '#00A99D' }}>디벨킷</span>
                </div>
              </St.IntroMent>
              <St.Start>
                <St.Icon src={icon} />
                <St.Link style={{ marginTop: '70px' }} onClick={onClickSubmit}>
                  디벨킷 시작하기
                </St.Link>
              </St.Start>
              {!cookies && (
                <St.Start
                  style={{
                    marginTop: '30px',
                    fontWeight: '700',
                    lineHeight: '33px',
                  }}
                >
                  <St.Icon src={icon} />
                  <St.Link
                    style={{
                      margin: '30px 0px 0px 10px',
                      color: '#21dccf',
                      fontSize: '1.6rem',
                    }}
                    onClick={onClickGuestLogin}
                  >
                    임시계정으로 체험하기
                  </St.Link>
                </St.Start>
              )}
            </St.Intro>
            <St.Twinklestar />
            <St.Velkit />
          </St.Wrap>
          <St.Scroll>
            <St.ScrollImg alt="scroll" src={scroll} />
            <div className="animate__shakeY">scroll down</div>
          </St.Scroll>
        </St.Main>
      </St.Wrapper>
    </>
  );
}

export default React.memo(FirstSlide);
