import React from 'react';

import styled from 'styled-components';

function CardProfile({ data }) {
  return <StDiv data={data} />;
}

export default CardProfile;

const StDiv = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.data.createdBy.profileImage});
  background-size: cover;
  right: 0;
  bottom: 0;
  border-radius: 500px;
  margin-right: 20px;
  align-items: right;
`;
