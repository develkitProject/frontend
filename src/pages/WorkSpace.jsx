import styled from 'styled-components';
import { getCookieToken} from '../Cookie';

import CreateCard from '../components/CreateCard';
import SpaceCard from '../components/SpaceCard.jsx';
import SpaceHeader from '../components/SpaceHeader';
import WorkSpaceErrorModal from '../workspace/error'

function WorkSpace() {
  const cookies = getCookieToken();

  return (
    <>
    {!cookies ? (<WorkSpaceErrorModal/>)
    :(
    <StWrapper>
      <SpaceHeader/>
      <CardWrapper>
        <CreateCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
      </CardWrapper>
    </StWrapper>)}
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
`;

const CardWrapper = styled.div`
  width: 90%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;
