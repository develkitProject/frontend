import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import {
  useGetDocListMutation,
  useGetDocSearchQuery,
} from '../../../redux/modules/docs';
import SearchBar from '../../../components/SearchBar';

function Board({ onDocumentHandle, error, isLoading, data, id, refetch }) {
  // eslint-disable-next-line prefer-const

  const [state, setState] = useState(null);
  const [prevDocs, setPrevDocs] = useState([]);
  const [searchDocs, setSearchDocs] = useState(0);
  const { data: searchData } = useGetDocSearchQuery(state, {
    // eslint-disable-next-line eqeqeq
    skip: state == undefined,
  });
  const [getDocList] = useGetDocListMutation();

  const doc = data?.data;
  const docs = searchData?.data;

  useEffect(() => {
    setPrevDocs(doc);
  }, [data]);

  const onSearchHandle = (obj) => {
    setSearchDocs(1);
    setState(obj);
  };

  const onFetchDocs = (direction) => {
    const lastDoc = prevDocs[prevDocs.length - 1];
    const firstDoc = prevDocs[0];
    let list;
    if (direction === 'Recent') {
      list = {
        id,
        cursorId: firstDoc.id,
        direction: 'Recent',
      };
    } else {
      list = {
        id,
        cursorId: lastDoc.id,
        direction: 'Previous',
      };
    }
    getDocList(list).then((res) => {
      if (direction === 'Recent' && res.data.data.length === 0) {
        alert('첫페이지입니다!');
      } else if (direction === 'Previous' && res.data.data.length === 0)
        alert('마지막페이지입니다!');
      else {
        setPrevDocs(() => res.data.data);
      }
    });
  };

  return (
    <>
      <StWrapper>
        <StTitle fontColor="#333333">문서관리</StTitle>
        <StTableContainer>
          <StThead>
            <StTable style={{ borderBottom: 'none' }}>
              <div>No.</div>
              <div>제목</div>
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
                    {prevDocs?.map((data, i) => {
                      return (
                        <StTable
                          key={data.id}
                          onClick={() => {
                            onDocumentHandle('detail', data.id);
                          }}
                        >
                          <div>{data.id}</div>
                          <div
                            style={{
                              textAlign: 'left',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {data.title}
                          </div>
                          <div>{data.nickname}</div>
                          <div>{data.createdAt.slice(0, -13)}</div>
                          <div>{data.modifiedAt.slice(0, -13)}</div>
                        </StTable>
                      );
                    })}
                  </>
                ) : searchDocs === 1 ? (
                  <>
                    {docs?.length !== 0 ? (
                      docs?.map((data, i) => {
                        return (
                          <StTable
                            key={data.id}
                            onClick={() => {
                              onDocumentHandle('detail', data.id);
                            }}
                          >
                            <div>{data.id}</div>
                            <div
                              style={{
                                textAlign: 'left',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              {data.title}
                            </div>
                            <div>{data.nickname}</div>
                            <div>{data.createdAt.slice(0, -13)}</div>
                            <div>{data.modifiedAt.slice(0, -13)}</div>
                          </StTable>
                        );
                      })
                    ) : (
                      <div>검색결과가 없습니다</div>
                    )}
                  </>
                ) : null}
              </>
            ) : null}
          </StTbody>
        </StTableContainer>
        <StPagination>
          <StChangePage
            onClick={() => {
              onFetchDocs('Recent');
            }}
          >
            {' '}
            ◀ 이전{' '}
          </StChangePage>
          <div style={{ margin: '0px 20px 0 20px' }} />
          <StChangePage
            onClick={() => {
              onFetchDocs('Previous');
            }}
          >
            {' '}
            다음 ▶
          </StChangePage>
        </StPagination>
      </StWrapper>
      <SearchBar
        id={id}
        onSearchHandle={onSearchHandle}
        setSearchDocs={setSearchDocs}
      />
    </>
  );
}

export default Board;

const StWrapper = styled.div`
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 30px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: #333333;
  font-size: 16px;
  letter-spacing: -0.8px;
`;

const StTitle = styled.p`
  color: ${(props) => props.fontColor};
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -1.2px;
`;

const StTableContainer = styled.div`
  margin-top: 28px;
  width: 100%;
  align-items: left;
  position: relative;
`;

const StTable = styled.div`
  grid-template-columns: 0.8fr 3.2fr 1fr 1fr 1fr;
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

const StPagination = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StChangePage = styled.div`
  cursor: pointer;
`;
