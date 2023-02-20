import React from 'react';

import styled from 'styled-components';

interface IProps {
  data: {
    content: string;
    createdAt: string;
    createdBy: {
      id: number;
      nickname: string;
      profileImage: string;
      social: string;
      username: string;
    };
    documentCreatedAt: string;
    documentTitle: string;
    id: number;
    imageUrl: string;
    scheduleContent: string;
    scheduleCreatedAt: string;
    title: string;
  };
}

function CardProfile({ data }: IProps) {
  return <StDiv image={data.createdBy.profileImage} />;
}

export default CardProfile;

const StDiv = styled.div<{ image: string }>`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  right: 0;
  bottom: 0;
  border-radius: 500px;
  margin-right: 20px;
  align-items: right;
`;
