import styled from 'styled-components';

import CreateCard from '../components/CreateCard';
import SpaceCard from '../components/SpaceCard';

function WorkSpace() {
  return (
    <StWrapper>
      <CreateCard />
      <SpaceCard />
    </StWrapper>
  );
}

export default WorkSpace;

const StWrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #fafafa;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
