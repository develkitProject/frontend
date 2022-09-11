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
      {error ? (
       <>에러가 발생했습니다.</>
       ) : isLoading ? (
        <>회원 정보를 불러오는 중입니다.</>
        ) : data ? (
        <>
      {member?.map((data, i) => {
      return(
        <StAddressContainer key={id}>
          <StAddress>
            <StMemberTitle>팀원</StMemberTitle>
            <StProfileImg src={member[i].user.profileImage} />
            <StNameContainer>
              <StNickName>{member[i].user.nickname}</StNickName>
              <StUserName>{member[i].user.username}</StUserName>
            </StNameContainer>
          </StAddress>
        </StAddressContainer>)
      })}</>):null}
    </StWrapper>
  );
}

export default Address;

const StWrapper = styled.div`
  width: 96%;
  min-height: 40vh;
  margin-left: 2%;
  margin-top: 3%;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: row;
  align-items: left;
  color: #333333;
  font-size: 16px;
  letter-spacing: -0.8px;
  flex-wrap: wrap;
`;

const StAddressContainer = styled.div`
  margin: 1%;
  width: 48%;
  height: 17vh;
  background-color: #EEF8F8;
`;

const StAddress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 12%;
`;

const StMemberTitle = styled.div`
  width: 13%;
  margin-top: 8%;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 29px;
  color: #00A99D;
  letter-spacing: -0.05em;
  align-self: center;
`;


const StProfileImg = styled.img`
  margin-top: 10%;
  width: 14%;
  height: 14%;
  border-radius: 70%;
`;

const StNameContainer = styled.div`
 width: 65%;
  margin-left: 5%;
  margin-top: 7%;
  display: flex;
  flex-direction: column;
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