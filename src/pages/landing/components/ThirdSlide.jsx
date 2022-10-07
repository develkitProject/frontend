import React from 'react';
import { SweetAlertHook } from '../../../common/elements/SweetAlert';

import ThirdBackground from '../../../common/img/ThirdBackground.png';
import ThirdImg from '../../../common/img/ThirdImg.png';

import * as St from '../style';

function ThirdSlide() {
  return (
    <St.Wrapper height="100vh">
      <St.ImgWrapper img={ThirdBackground}>
        <St.Main>
          <St.ThirdBody>
            <St.ImgBox>
              <St.ThirdImgTest img={ThirdImg} />
            </St.ImgBox>
            <St.ThirdMent>
              <St.MentContainer>
                <St.Ment>let</St.Ment>{' '}
                <St.Ment fontColor="#00A99D">D.Velkit</St.Ment>
                <St.Ment> = </St.Ment>
                <St.Ment fontColor="#F5D28C">“growth”</St.Ment>
                <St.Ment>;</St.Ment>
              </St.MentContainer>
              <St.SecondBodyMentTwo>
                <div>더 완벽한 프로젝트를 위해,</div>
                <div style={{ marginTop: '10px', fontWeight: '700' }}>
                  프로젝트 후기와 제안까지
                </div>
              </St.SecondBodyMentTwo>
              <St.CardMentContainer>
                <St.CardMentContent
                  style={{
                    marginTop: '25px',
                    color: '#BCBCBC',
                    fontWeight: '500',
                  }}
                >
                  프로젝트 협업이 완료된 후, 후기를 작성하여
                </St.CardMentContent>
                <St.CardMentContent
                  style={{ color: '#BCBCBC', fontWeight: '500' }}
                >
                  디벨킷에서 사이드 프로젝트 제안을 받을 수도 있습니다.
                </St.CardMentContent>
              </St.CardMentContainer>
              <St.Link
                onClick={() => {
                  SweetAlertHook(2000, 'error', '기능 준비중입니다!');
                }}
                style={{
                  marginTop: '60px',
                  marginLeft: '0',
                  textDecoration: 'underline',
                }}
              >
                커뮤니티 바로가기{' '}
              </St.Link>
            </St.ThirdMent>
            <St.Circle />
            <St.Velkit2 />
          </St.ThirdBody>
        </St.Main>
      </St.ImgWrapper>
    </St.Wrapper>
  );
}
export default React.memo(ThirdSlide);
