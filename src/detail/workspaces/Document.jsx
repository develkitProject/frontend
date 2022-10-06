import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useGetDocQuery } from '../../redux/modules/docs';
import Board from './document/Board';
import DocsWrite from './document/DocsWrite';
import DocsEdit from './document/DocsEdit';
import DocDetail from './document/DocDetail';
import BlackButton from '../../common/elements/BlackButton';
import { StContent, StIntroContainer, StTitle } from '../style';

export default function Document({ id, tab, stateId, onDocumentHandle }) {
  const { data, error, isLoading, refetch } = useGetDocQuery(id);
  const doc = data?.data;

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
              text="글쓰기"
              onClick={() => {
                onDocumentHandle('write');
              }}
            />
          </>
        ) : (
          <>
            <BlackButton
              text="리스트 돌아가기"
              onClick={() => {
                onDocumentHandle('list');
              }}
            />
          </>
        )}
      </StIntroContainer>

      {tab === 'list' ? (
        <>
          <Board
            error={error}
            isLoading={isLoading}
            data={data}
            document={doc}
            onDocumentHandle={onDocumentHandle}
            refetch={refetch}
            id={id}
          />
        </>
      ) : tab === 'write' ? (
        <>
          <DocsWrite onDocumentHandle={onDocumentHandle} id={id} />
        </>
      ) : tab === 'detail' ? (
        <>
          <DocDetail
            stateId={stateId}
            onDocumentHandle={onDocumentHandle}
            id={id}
          />
        </>
      ) : tab === 'edit' ? (
        <>
          <DocsEdit
            stateId={stateId}
            onDocumentHandle={onDocumentHandle}
            id={id}
          />
        </>
      ) : null}
    </>
  );
}
