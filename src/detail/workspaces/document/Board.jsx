import styled from 'styled-components';
import React, { useState } from 'react';
import { useGetDocQuery } from '../../../redux/modules/workspaces';
import { useGetDocSearchQuery } from '../../../redux/modules/workspaces';
import { useNavigate, useParams } from 'react-router-dom';
import SearchBar from '../../../components/SearchBar';

function Board({ onDocumentHandle, error, isLoading, data }) {
  const params = useParams();
  const id = Number(params.id);
  const doc = data?.data;
  const [state, setState] = useState(null);
  const { data: searchData } = useGetDocSearchQuery(state, {
    // eslint-disable-next-line eqeqeq
    skip: state == undefined,
  });
  const docs = searchData?.data;
  const [searchDocs, setSearchDocs] = useState(0);

  const onSearchHandle = (obj) => {
    setSearchDocs(1);
    setState(obj);
  };

  return (
    <StWrapper>
      <StTitle fc='#333333'>문서관리</StTitle>
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
            <>문서를 불러오는 중입니다.</>
          ) : data ? (
            <>
              {searchDocs === 0 ? (
                <>
                  {doc?.map((data, i) => {
                    return (
                      <StTable
                        key={data.id}
                        onClick={() => {
                          onDocumentHandle('detail', data.id);
                        }}
                      >
                        <div>{data.id}</div>
                        <div style={{ textAlign: 'left', overflow: 'hidden' }}>
                          {data.title}
                        </div>
                        <div>{data.nickname}</div>
                        <div>{data.createdAt.slice(0, -13)}</div>
                        <div>{data.modifiedAt.slice(0, -13)}</div>
                      </StTable>
                    );
                  })}
                </>
              ) : (
                <>
                  {docs?.map((data, i) => {
                    return (
                      <StTable
                        key={data.id}
                        onClick={() => {
                          onDocumentHandle('detail', data.id);
                        }}
                      >
                        <div>{data.id}</div>
                        <div style={{ textAlign: 'left', overflow: 'hidden' }}>
                          {data.title}
                        </div>
                        <div>{data.nickname}</div>
                        <div>{data.createdAt.slice(0, -13)}</div>
                        <div>{data.modifiedAt.slice(0, -13)}</div>
                      </StTable>
                    );
                  })}
                </>
              )}
            </>
          ) : null}
        </StTbody>
      </StTableContainer>
      <SearchBar id={id} onSearchHandle={onSearchHandle} />
    </StWrapper>
  );
}

export default Board;

const StWrapper = styled.div`
  width: 96%;
  min-height: 400px;
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 5px;
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
  align-items: left;
  min-height: 600px;
  //문서가 길어지면 안보이는 게 있어서 pagination이 필요함
`;

const StTable = styled.div`
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  display: grid;
  border-bottom: 1px solid #c6c6c6;
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
