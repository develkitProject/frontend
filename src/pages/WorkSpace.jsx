import styled from 'styled-components';

import CreateCard from '../components/CreateCard';
import SpaceCard from '../components/SpaceCard.jsx';

function WorkSpace() {
  return (
    <StWrapper>
      <CardWrapper>
        <CreateCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
      </CardWrapper>
    </StWrapper>
  );
}

export default WorkSpace;

const StWrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 150px;
`;
