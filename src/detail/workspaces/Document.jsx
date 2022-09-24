import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetDocQuery } from '../../redux/modules/workspaces';
import React, { useEffect, useState } from 'react';
import Board from './document/Board';
import DocsWrite from './document/DocsWrite';
import DocsEdit from './document/DocsEdit';
import DocDetail from './document/DocDetail';
import BlackButton from '../../common/elements/BlackButton';
import SearchBar from '../../components/SearchBar';

export default function Document() {
  const params = useParams();
  const id = Number(params.id);
  const [tab, setTab] = useState('list');
  const [stateId, setStateId] = useState(0);
  const { data, error, isLoading, refetch } = useGetDocQuery(id);
  const doc = data?.data;

  const onDocumentHandle = (tabpoint, docsid) => {
    setTab(tabpoint);
    setStateId(docsid);
  };

  return (
    <>
      <StIntroContainer>
        <div>
          <StTitle>문서</StTitle>
          <StContent>프로젝트 관련 일일보고 및 계획 등</StContent>
        </div>

        {tab === 'list' ? (
          <>
            <BlackButton
              text='글쓰기'
              onClick={() => {
                onDocumentHandle('write');
              }}
            ></BlackButton>
          </>
        ) : tab === 'write' ? (
          <>
            <BlackButton
              text='리스트 보기'
              onClick={() => {
                onDocumentHandle('list');
              }}
            ></BlackButton>
          </>
        ) : null}
      </StIntroContainer>

      {tab === 'list' ? (
        <div>
          <Board
            error={error}
            isLoading={isLoading}
            data={data}
            document={doc}
            onDocumentHandle={onDocumentHandle}
          ></Board>
          <SearchBar id={id} />
        </div>
      ) : tab === 'write' ? (
        <div>
          <DocsWrite onDocumentHandle={onDocumentHandle}></DocsWrite>
        </div>
      ) : tab === 'detail' ? (
        <>
          <DocDetail
            doc={doc}
            stateId={stateId}
            onDocumentHandle={onDocumentHandle}
          ></DocDetail>
        </>
      ) : tab === 'edit' ? (
        <>
          <DocsEdit
            stateId={stateId}
            onDocumentHandle={onDocumentHandle}
          ></DocsEdit>
        </>
      ) : null}
    </>
  );
}

const StIntroContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  min-height: 12vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #c6c6c6;
`;

const StTitle = styled.p`
  color: #333333;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1.5px;
`;

const StContent = styled.p`
  margin-top: 10px;
  color: #333333;
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -1px;
`;
