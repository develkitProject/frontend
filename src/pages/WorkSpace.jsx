import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { getCookieToken } from '../Cookie';
import {
  useGetWorkspacesQuery,
  useDeleteWorkSpacesMutation,
} from '../redux/modules/workspaces';
import useModalOverlay from '../account/signup/hooks/useModalOverlay';
import Circle from '../common/elements/Circle';
import CreateCard from '../components/CreateCard';
import SpaceCard from '../components/SpaceCard';
import SpaceHeader from '../components/SpaceHeader';
import WorkSpaceErrorModal from '../common/modal/error';
import CreateSpaceModal from '../common/modal/CreateSpaceModal';

function WorkSpace() {
  const { data, error, isLoading } = useGetWorkspacesQuery();
  const workspaces = data?.data;
  const [workSpaces, setWorkSpaces] = useState();
  const cookies = getCookieToken();
  const { isOpen, open, close } = useModalOverlay();

  useEffect(() => {
    setWorkSpaces(workspaces);
  }, [data]);

  return (
    <>
      {!cookies ? (
        <WorkSpaceErrorModal />
      ) : (
        <StWrapper>
          <SpaceHeader />
          <CardWrapper>
            <CreateCard openDialog={open} />
            {error ? (
              <>에러가 발생하였습니다.</>
            ) : isLoading ? (
              <>
                <div style={{ width: '70%' }}>
                  <Circle style={{ width: '100%' }} />
                </div>
              </>
            ) : data ? (
              <>
                {workSpaces
                  ?.slice(0)
                  .reverse()
                  .map((data, i) => {
                    return (
                      <div style={{ width: '70%' }} key={data.workspaces.id}>
                        <SpaceCard data={data} width="100%" />
                      </div>
                    );
                  })}
              </>
            ) : null}
          </CardWrapper>
          {}
        </StWrapper>
      )}
      {isOpen && <CreateSpaceModal onClose={close} />}
    </>
  );
}

export default WorkSpace;

const StWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 200px;
`;

const CardWrapper = styled.div`
  width: 90%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;
