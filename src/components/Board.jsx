import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useGetDocQuery } from '../redux/modules/workspaces';
import { useEffect } from 'react';

function Board() {

  const params = useParams();
  const id = Number(params.id);
  const { data, error, isLoading, refetch } = useGetDocQuery(id);
  const doc = data?.data;

  useEffect(() => {
    refetch();
  }, [doc, refetch]);

  return (
    <StWrapper>
      <StTitle fc='#333333'>일정관리</StTitle>
      <StTableContainer>
        <StThead>
          <StTable style={{ borderBottom: 'none' }}>
            <div>No</div>
            <div>업무명</div>
            <div>작성자</div>
            <div>등록일</div>
            <div>수정일</div>
          </StTable>
        </StThead>
        <StTbody>
        {error ? (
       <>에러가 발생했습니다.</>
       ) : isLoading ? (
        <>회원 정보를 불러오는 중입니다.</>
        ) : data ? (
        <>
      {doc?.map((data, i) => {
      return(
          <StTable key={id}>
            <div>{doc[i].id}</div>
            <div style={{textAlign: "left", overflow: "hidden"}}>{doc[i].title}</div>
            <div>{doc[i].nickname}</div>
            <div>{doc[i].createdAt.slice(0, -13)}</div>
            <div>{doc[i].modifiedAt.slice(0, -13)}</div>
          </StTable>
          )})}</>):null}
        </StTbody>
      </StTableContainer>
    </StWrapper>
  );
}

export default Board;

const StWrapper = styled.div`
  width: 96%;
  min-height: 400px;
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #333333;
  font-size: 16px;
  letter-spacing: -0.8px;
`;

const StTitle = styled.p`
  color: ${(props) => props.fc};
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -1.2px;
`;

const StTableContainer = styled.div`
  margin-top: 28px;
  width: 100%;
  min-height: 100px;
  align-items: left;
`;

const StTable = styled.div`
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  display: grid;
  border-bottom: 1px solid #c6c6c6;
  overflow: hidden;
`;

const StThead = styled.div`
  background-color: #00a99d;
  border-radius: 8px;
  height: 50px;
  color: white;
  align-items: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const StTbody = styled.div`
  height: 50px;
  color: #333333;
  align-items: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: normal;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StBtnStatus = styled.button`
  color: #333333;
  width: 75px;
  height: 30px;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  border-radius: 16px;
  border: none;
  letter-spacing: -0.8px;
  background-color: ${(props) => props.fc};
`;