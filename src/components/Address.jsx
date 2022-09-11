import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useGetMemberListQuery } from '../redux/modules/workspaces';
import { useEffect } from 'react';

function Address() {
  const params = useParams();
  const id = Number(params.id);
  const { data, error, isLoading, refetch } = useGetMemberListQuery(id);
  const member = data?.data;

  useEffect(() => {
    refetch();
  }, [data, refetch]);

  return (
    <StWrapper>
      {/* {error ? (
        <>에러가 발생했습니다.</>
      ) : isLoading ? (
        <>회원 정보를 불러오는 중입니다.</>
      ) : data ? (
        <>
          {member?.map((data, i) => {
            return ( */}
      <StAddressContainer>
        <StAddress>
          <StMemberTitle>팀원</StMemberTitle>
          <StProfileImg src={member[0].user.profileImage} />
          <StNameContainer>
            <StNickName>{member[0].user.nickname}</StNickName>
            <StUserName>{member[0].user.username}</StUserName>
          </StNameContainer>
        </StAddress>
      </StAddressContainer>
      <StAddressContainer>
        <StAddress>
          <StMemberTitle>팀원</StMemberTitle>
          <StProfileImg src={member[0].user.profileImage} />
          <StNameContainer>
            <StNickName>{member[0].user.nickname}</StNickName>
            <StUserName>{member[0].user.username}</StUserName>
          </StNameContainer>
        </StAddress>
      </StAddressContainer>
      {/* );
          })} */}
      {/* </>
      ) : null} */}
    </StWrapper>
  );
}

export default Address;

const StWrapper = styled.div`
  width: 100%;
  /* min-height: 40vh; */
  margin-top: 30px;
  margin-bottom: 10vh;
  display: flex;
  justify-content: space-evenly;
  color: #333333;
  font-size: 16px;
  letter-spacing: -0.8px;
  flex-wrap: wrap;
`;

const StAddressContainer = styled.div`
  margin: 1%;
  width: 45%;
  min-width: 450px;
  height: 180px;
  background-color: #eef8f8;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 783px) {
    width: 200px;
  }
`;

const StAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
`;

const StMemberTitle = styled.div`
  width: 60px;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 10px;
  color: #00a99d;
  letter-spacing: -0.05em;
`;

const StProfileImg = styled.img`
  width: 110px;
  height: 90px;
  border-radius: 70%;
  margin-left: 30px;
`;

const StNameContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  color: #333333;
`;

const StNickName = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  margin-bottom: 1%;
`;

const StUserName = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.3rem;
`;
