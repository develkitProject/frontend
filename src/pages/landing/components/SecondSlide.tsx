import React from 'react';

import SecondCard1 from '../../../common/img/SecondCard1.png';
import SecondCard2 from '../../../common/img/SecondCard2.png';
import SecondCard3 from '../../../common/img/SecondCard3.png';
import 'animate.css';

import * as St from '../style';

function SecondSlide() {
  return (
    <St.Wrapper height="100vh">
      <St.Main>
        <St.SecondIntroDiv>
          <div>프로젝트 협업툴, 더 꼼꼼히 따져봐야 합니다.</div>
          <St.SecondMent>
            <div style={{ marginBottom: '1%' }}>
              웹기반 프로젝트 협업 서비스라고 다 똑같지 않습니다.
            </div>
            <div>
              디벨킷은 100% 무료 서비스로 높은 퀄리티의 맞춤 서비스를
              제공합니다.
            </div>
          </St.SecondMent>
        </St.SecondIntroDiv>

        <St.SecondBodyDiv>
          <St.SecondBodyMent>
            <St.Ment>let</St.Ment>{' '}
            <St.Ment fontColor="#00A99D">D.Velkit</St.Ment>
            <St.Ment> = </St.Ment>
            <St.Ment fontColor="#F5D28C">“Point!”</St.Ment>
            <St.Ment>;</St.Ment>
            <St.SecondBodyMentTwo>
              <div>프로젝트 협업의 새로운 시작</div>
              <div style={{ marginTop: '1%', fontWeight: '700' }}>
                업무관리가 더욱 쉽고 간편해집니다
              </div>
            </St.SecondBodyMentTwo>
          </St.SecondBodyMent>
          <St.CardContainer>
            <St.CardElement>
              <St.ImgContainer img={SecondCard1} />
              <St.CardMentContainer>
                <St.SecondBodyMentTwo
                  style={{ marginTop: '2%', fontWeight: '700' }}
                >
                  프로젝트 관리
                </St.SecondBodyMentTwo>
                <St.CardMentContent>
                  간편로그인과 함께 프로젝트 생성 후 문서를 쉽게 작성하고 원활한
                  관리로 성장하는 협업을 경험해보세요
                </St.CardMentContent>
              </St.CardMentContainer>
            </St.CardElement>

            <St.CardElement>
              <St.ImgContainer img={SecondCard2} />
              <St.CardMentContainer>
                <St.SecondBodyMentTwo
                  style={{ marginTop: '2%', fontWeight: '700' }}
                >
                  문서 아카이빙
                </St.SecondBodyMentTwo>
                <St.CardMentContent>
                  데이터를 효과적으로 보관할 수 있는 아카이빙 기능을 제공하여
                  별도 솔루션을 도입하지 않아도 됩니다.
                </St.CardMentContent>
              </St.CardMentContainer>
            </St.CardElement>

            <St.CardElement>
              <St.ImgContainer img={SecondCard3} />
              <St.CardMentContainer>
                <St.SecondBodyMentTwo
                  style={{ marginTop: '2%', fontWeight: '700' }}
                >
                  일정 관리
                </St.SecondBodyMentTwo>
                <St.CardMentContent>
                  디벨킷 유저들의 불필요한 학습 과정을 단축하고자 쉽고, 친화적인
                  UI/UX로 사용성을 높였습니다.
                </St.CardMentContent>
              </St.CardMentContainer>
            </St.CardElement>
          </St.CardContainer>
        </St.SecondBodyDiv>
      </St.Main>
    </St.Wrapper>
  );
}

export default React.memo(SecondSlide);
