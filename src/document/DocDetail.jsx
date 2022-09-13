import styled from 'styled-components';
import SideMenu from '../components/SideMenu'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetDocDetailQuery } from '../redux/modules/workspaces';
import Board from './Board';

function DocDetail() {
    const navigate = useNavigate();
    const params = useParams();
    const workspaces = Number(params.id);
    const docid = Number(params.docid);
    const { data, error, isLoading, refetch } = useGetDocDetailQuery({workspaces, docid});
    const document = data?.data

    useEffect(() => {
      refetch();
    }, [data, refetch]);

  return (
    <StWrapper>
      <SideMenu />
      <DocContainer>
        <Projects>
          <StIntroContainer>
              <StIntroMent>프로젝트 관련 일일보고 및 계획 등</StIntroMent>
              <StTitle>{document?.title}</StTitle>
              <StInfoContainer>
                <StProfileImg>{document?.profileImg}</StProfileImg>
                <StNickname>{document?.nickname}</StNickname>
                <StCreatedAt>{document?.createdAt.slice(0, -7)}</StCreatedAt>
              </StInfoContainer>
          </StIntroContainer>
          <StContentContainer>
            <StContent><div dangerouslySetInnerHTML={{ __html: document?.content} }/></StContent>
          </StContentContainer>
        </Projects>
        <BoardContainer>
          <Board/>
        </BoardContainer>
      </DocContainer>
    </StWrapper>
  );
}

export default DocDetail;

const StWrapper = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
`;

const DocContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
`;

const Projects = styled.div`
  width: 100%;
  min-height: 90vh;
  margin-left: 50px;
  margin-top: 45px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 30px;
`;

const StIntroContainer = styled.div`
  margin: 20px;
  min-height: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px #c6c6c6;
`;

const StIntroMent = styled.div`
  margin: 10px;
  font-size: 16px;
  color: #C6C6C6;
  letter-spacing: -0.05em;
`;

const StTitle = styled.p`
  margin: 20px;
  color: #000000;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: -0.05em;
`;

const StInfoContainer= styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
`;

const StProfileImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 70%;
  margin: 0 10px 0px 20px;
  background-color: black;
`;

const StNickname = styled.div`
  margin-left: 2px;
  font-size: 18px;
  color: #000000;
  letter-spacing: -0.05em;
  font-weight: 500;
`;

const StCreatedAt = styled.div`
  margin-left: 28px;
  font-size: 18px;
  color: #B4B4B4;
  letter-spacing: -0.05em;
  font-weight: 400;
`;

const StContentContainer = styled.div`
  margin-left: 20px;
  min-height: 12vh;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const StContent = styled.p`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  color: #000000;
  text-align: left;
  font-weight: 400;
  letter-spacing: -0.05em;
`;

const BoardContainer = styled.div`
  margin-left: 50px;
`;




