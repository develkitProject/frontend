import styled from 'styled-components';
import SideMenu from '../components/SideMenu';

function WorkSpaceDetail() {

  return (
    <StWrapper>
        <SideMenu></SideMenu>

        <Projects>
            <div>
                디벨킷 프로젝트
                팀원초대하기
            </div>
            <div>
                공지사항
            </div>
            <div>
                일정관리
            </div>
        </Projects>

    </StWrapper>
  );
}

export default WorkSpaceDetail;

const StWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Projects = styled.div`

`;


