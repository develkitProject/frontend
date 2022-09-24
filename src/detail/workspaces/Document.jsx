import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetDocQuery } from '../../redux/modules/workspaces';
import React, { useEffect, useState } from 'react';
import Board from './document/Board';
import DocsWrite from './document/DocsWrite';
import DocsEdit from './document/DocsEdit';
import DocDetail from './document/DocDetail';
import BlackButton from '../../common/elements/BlackButton';

export default function Document() {
  const params = useParams();
  const id = Number(params.id);
  const [tab, setTab] = useState(1);
  const [stateId, setStateId] = useState(0);
  const { data, error, isLoading, refetch } = useGetDocQuery(id);
  const doc = data?.data;

  const onListHandle = () => {
    setTab(1);
  };
  const onWriteHandle = () => {
    setTab(2);
  };
  const onDetailHandle = (docsid) => {
    setTab(3);
    setStateId(docsid);
  };

  const onEditHandle = (docsid) => {
    setTab(4);
    setStateId(docsid);
  };

  return (
    <>
      <StIntroContainer>
        <div>
          <StTitle>문서</StTitle>
          <StContent>프로젝트 관련 일일보고 및 계획 등</StContent>
        </div>

        {tab === 1 ? (
          <>
            <BlackButton text='글쓰기' onClick={onWriteHandle}></BlackButton>
          </>
        ) : tab === 2 ? (
          <>
            <BlackButton
              text='리스트 보기'
              onClick={onListHandle}
            ></BlackButton>
          </>
        ) : null}
      </StIntroContainer>

      {tab === 1 ? (
        <div>
          <Board
            error={error}
            isLoading={isLoading}
            data={data}
            document={doc}
            onDetailHandle={onDetailHandle}
          ></Board>
        </div>
      ) : tab === 2 ? (
        <div>
          <DocsWrite onListHandle={onListHandle}></DocsWrite>
        </div>
      ) : tab === 3 ? (
        <>
          <DocDetail
            doc={doc}
            stateId={stateId}
            onEditHandle={onEditHandle}
            onListHandle={onListHandle}
          ></DocDetail>
        </>
      ) : tab === 4 ? (
        <>
          <DocsEdit stateId={stateId} onListHandle={onListHandle}></DocsEdit>
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
