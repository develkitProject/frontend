import React from 'react';
import styled from 'styled-components';
import Event1 from '../asset/img/event1.png';
import Event2 from '../asset/img/event2.png';
import Event3 from '../asset/img/event3.png';
import TopButton from '../common/elements/TopButton';
import { StButton } from '../login/style';

export default function EventPage() {
  const handleSubmit = () => {
    window.open(
      'https://docs.google.com/forms/d/1EqZP0laRAz94PQi70xnY03LP8zYXiXwMURj9G83miPs/viewform?edit_requested=true#settings',
      '_blank',
    );
  };

  return (
    <Container>
      <TopButton />
      <Ment fontColor="white">
        let <Ment fontColor="#00A99D">D_Velkit</Ment> =
        <Ment fontColor="#F5D28C"> “EVENT!”;</Ment>
      </Ment>
      <FaqTitle>디벨킷의 HIP-한 런칭 이벤트!</FaqTitle>
      <StImgContainer style={{ marginTop: '50px' }} img={Event1} />
      <StImgContainer img={Event2} />
      <StImgContainer img={Event3} />
      <StMentContainer>
        안녕하세요! 디벨킷입니다😀
        <br />
        <br />
        디벨킷(D.velkit)은 개발자들을 위한 협업툴로
        <br />
        공지사항, 문서공유, 일정관리, 실시간 채팅 기능을 제공합니다
        <br />
        <br />
        ◽ 공지사항: 주요 공지사항을 모두모두 모아서 확인!
        <br />
        ◽ 문서공유: 파일공유, 문서수정, 수정자 확인 등 전부 가능해요!
        <br />
        ◽ 일정관리: 달력으로 한눈에 보는 일정체크!
        <br />
        ◽ 실시간 채팅: 채팅에 참여하고 있는 회원들을 확인!
        <br />
        <br />
        사이트 런칭을 맞이하여
        <br />
        다음과 같이 사이트 사용 피드백 이벤트를 진행합니다.
        <br />
        <br />
        ◽ 이벤트 기간: 2022-09-27 ~ 2022-10-01
        <br />
        ◽ 이벤트 대상: 디벨킷 홈페이지를 방문한 회원 및 비회원 누구나!
        <br />
        <br />
        사이트를 이용하신 후, 하단 버튼을 클릭하셔서 피드백을 남겨주시면 <br />
        다음과 같이 추첨하여 상품을 드립니다!
        <br />
        <br />
        ◽ 1등: &nbsp;배달의민족 5만원 상품권
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -1명 <br />
        ◽ 2등: &nbsp;배달의민족 2만원 상품권&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp; -3명
        <br />
        ◽ 3등: &nbsp;스타벅스
        아메리카노&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        -10명
        <br />
        ◽ 4등: &nbsp;배스킨라빈스 싱글레귤러&nbsp;&nbsp;&nbsp; -10명
        <br />
        <br />
        <div style={{ fontWeight: '500' }}>
          ⭐디벨킷은 <span style={{ color: '#00A99D' }}>PC 환경에 최적화</span>{' '}
          되어 있습니다. <span style={{ color: '#00A99D' }}>PC에서 </span>
          접속해주세요!⭐
        </div>
        <br />
      </StMentContainer>
      <StButton
        onClick={handleSubmit}
        style={{
          width: '600px',
          height: '60px',
          fontSize: '20px',
          marginBottom: '80px',
        }}
      >
        {' '}
        피드백 남기러 가기 📝
      </StButton>
    </Container>
  );
}

export const Container = styled.div`
  width: 100%;
  min-height: 800px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FaqTitle = styled.h1`
  color: white;
  font-weight: 500;
  font-size: 52px;
  text-align: center;
  margin-top: 10px;
`;

export const Ment = styled.span`
  color: ${(props) => props.fontColor};
  font-family: 'Consolas';
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  margin-top: 50px;
`;

const StImgContainer = styled.div`
  width: 800px;
  height: 800px;
  background: url(${(props) => props.img}) no-repeat;
  background-size: cover;
`;

export const StMentContainer = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  color: white;
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 0.03em;
  line-height: 26px;
  margin-top: 40px;
  margin-bottom: 40px;
  letter-spacing: -0.01em;
  border: 2px solid white;
  padding: 50px;
`;
