import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

function Address({ data_1, error_1, isLoading_1 }) {
  const member = data_1?.data;

  return (
    <StWrapper>
      {error_1 ? (
        <>에러가 발생했습니다.</>
      ) : isLoading_1 ? (
        <>회원 정보를 불러오는 중입니다.</>
      ) : data_1 ? (
        <>
          {member?.map((data, i) => {
            return (
              <StAddressContainer key={data?.user.id}>
                <StAddress>
                  <StMemberTitle>
                    {data?.user.username === data?.user.workspaceCreator
                      ? '팀장'
                      : '팀원'}
                  </StMemberTitle>
                  <StProfileImg src={data?.user.profileImage} />
                  <StNameContainer>
                    <StNickName>{data?.user.nickname}</StNickName>
                    <StUserName>{data?.user.username}</StUserName>
                  </StNameContainer>
                </StAddress>
              </StAddressContainer>
            );
          })}
        </>
      ) : null}
    </StWrapper>
  );
}

export default Address;

const StWrapper = styled.div`
  width: 100%;
  min-width: 1000px;
  display: flex;
  justify-content: space-evenly;
  color: #333333;
  font-size: 16px;
  letter-spacing: -0.8px;
  align-items: center;
  flex-wrap: wrap;
`;

const StAddressContainer = styled.div`
  margin: 1%;
  width: 40%;
  min-width: 400px;
  height: 140px;
  background-color: #eef8f8;
  display: flex;
  box-shadow: 0 4px 60px 0 rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.1);
`;

const StAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
`;

const StMemberTitle = styled.div`
  width: 60px;
  font-weight: 500;
  font-size: 20px;
  line-height: 10px;
  color: #00a99d;
  letter-spacing: -0.05em;
`;

const StProfileImg = styled.img`
  width: 80px;
  height: 70px;
  border-radius: 70%;
  margin-left: 10px;
`;

const StNameContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  color: #333333;
  flex-wrap: wrap;
`;

const StNickName = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 5px;
`;

const StUserName = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;
