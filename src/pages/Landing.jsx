import React from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Landing() {
  const navigate = useNavigate();

  const moveLogin = () => {
    navigate('/login');
  };
  return (
    <StWrapper>
      <StMain>
            <StIntro>
              <StMent>let <StMent fc="#00A99D">D.Velkit</StMent> = <StMent fc="#F5D28C">“Devlop Your Teamwork through D.VelKit!”;</StMent></StMent>
              <StIntroMent>
                <div style={{marginBottom:"15px"}}>성장하는 사람들을 위한</div>
                <div>프로젝트 협업 서비스, <span style={{color:"#00A99D"}}>디벨킷</span></div>
              </StIntroMent>
              <div>
                <div>화살표</div>
                <div onClick={moveLogin}>디벨킷 시작하기</div>
              </div>
            </StIntro>



            <div>
              <div>마우스</div>
              <div>scroll down</div>
            </div>
      </StMain>  

      <StBar> 
        <div>
          옆에 세로 따라다니는
        </div>
      </StBar>
    </StWrapper>
  );
}

export default Landing;

const StWrapper = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-weight: 600;
  font-size: 20px;
  background: #000000;
`;

const StMain = styled.div`
  color: white;
  width: 100%;
  margin-left: 8%;
  margin-right: 8%;
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
`;

const StIntro = styled.div`
  color: white;
  margin-top: 10%;
  margin-left: 2%;
  width: 95%;
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
`;

const StMent = styled.span`
  color: ${props =>props.fc};
  font-family: 'Consolas';
  font-size: 22px;
  font-weight: 400;
`;

const StIntroMent = styled.div`
  color: ${props =>props.fc};
  margin-top: 4%;
  font-size: 54px;
  font-weight: 500;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
`;


const StBar = styled.div`
  color: white;
  width: 20%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 600;
  font-size: 20px;
`;

