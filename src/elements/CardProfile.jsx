import React from 'react';

import styled from 'styled-components';

function CardProfile({ data }) {
  return <StDiv />;
}

export default CardProfile;

const StDiv = styled.div`
  width: 40px;
  height: 40px;
  background-image: url('https://hanghae99.spartacodingclub.kr/static/images/ot/hanghae_ceo.png');
  background-size: cover;
  right: 0;
  bottom: 0;
  margin-right: 20px;
  align-items: right;
`;
/* url(${(props) => props.data.imageUrl}) */
