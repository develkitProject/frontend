import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { getCookieToken } from '../Cookie';
import {
  useGetWorkspacesQuery,
  useDeleteWorkSpacesMutation,
} from '../redux/modules/workspaces';
import CreateCard from '../components/CreateCard';
import SpaceCard from '../components/SpaceCard';
import SpaceHeader from '../components/SpaceHeader';
import WorkSpaceErrorModal from '../common/Modal/error';
import CreateSpaceModal from '../common/Modal/CreateSpaceModal';

function WorkSpace() {
  const { data, error, isLoading, refetch } = useGetWorkspacesQuery();
  const [deleteWorkSpaces] = useDeleteWorkSpacesMutation();
  const workspaces = data?.data;
  const cookies = getCookieToken();
  const [createOpen, setCreateOpen] = useState(false);
  const [deleteButton, setDeletebutton] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [data, refetch]);

  return (
    <>
      {!cookies ? (
        <WorkSpaceErrorModal onClose={handleClose} open={isOpen} />
      ) : (
        <StWrapper>
          <SpaceHeader />
          <CardWrapper>
            <CreateCard createOpen={createOpen} setCreateOpen={setCreateOpen} />
            {error ? (
              <>에러가 발생하였습니다.</>
            ) : isLoading ? (
              <>Loading...</>
            ) : data ? (
              <>
                {workspaces?.map((data, i) => {
                  return (
                    <div style={{ width: '70%' }} key={data.workspaces.id}>
                      <SpaceCard
                        data={data}
                        width="100%"
                        deleteButton={deleteButton}
                        deleteWorkSpaces={deleteWorkSpaces}
                      />
                    </div>
                  );
                })}
              </>
            ) : null}
          </CardWrapper>
          {}
        </StWrapper>
      )}
      {createOpen && (
        <CreateSpaceModal
          onClose={() => {
            setCreateOpen(false);
          }}
        />
      )}
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
  padding-bottom: 30px;
`;

const CardWrapper = styled.div`
  width: 90%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;
