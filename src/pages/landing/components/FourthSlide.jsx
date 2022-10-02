import React from 'react';

import Fourth1 from '../../../common/img/Fourth1.png';
import Fourth2 from '../../../common/img/Fourth2.png';

import Footer from '../../../components/Footer';
import * as St from '../style';

function FourthSlide({ onClickSignUpModal, onClickEventPage }) {
  return (
    <>
      <St.Wrapper height="80vh">
        <St.Main>
          <St.ThirdBody>
            <St.ImgBox>
              <St.FourthImg img={Fourth1}>
                <St.SecondBodyMentTwo
                  style={{ marginTop: '40px', marginLeft: '40px' }}
                >
                  <div>협업의 새로운 시작</div>
                  <div style={{ marginTop: '10px', fontWeight: '700' }}>
                    더 완벽한 프로젝트를 위해,
                  </div>
                  <St.Link
                    onClick={onClickSignUpModal}
                    style={{
                      marginTop: '100px',
                      marginLeft: '0',
                      textDecoration: 'underline',
                    }}
                  >
                    회원가입 바로가기{' '}
                  </St.Link>
                </St.SecondBodyMentTwo>
              </St.FourthImg>
            </St.ImgBox>

            <St.ImgBox>
              <St.FourthImg img={Fourth2}>
                <St.SecondBodyMentTwo
                  style={{ marginTop: '40px', marginLeft: '40px' }}
                >
                  <div>디벨킷의</div>
                  <div style={{ marginTop: '10px', fontWeight: '700' }}>
                    힙한 EVENT,
                  </div>
                  <St.Link
                    style={{
                      marginTop: '100px',
                      marginLeft: '0',
                      textDecoration: 'underline',
                    }}
                    onClick={onClickEventPage}
                  >
                    EVENT 바로가기{' '}
                  </St.Link>
                </St.SecondBodyMentTwo>
              </St.FourthImg>
            </St.ImgBox>
            <St.Velkit3 />
          </St.ThirdBody>
        </St.Main>
      </St.Wrapper>
      <Footer />
    </>
  );
}

export default React.memo(FourthSlide);
