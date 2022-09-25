import styled from 'styled-components';
import React, { useState } from 'react';
import search from '../asset/img/search.png';

function SearchBar({ id, onSearchHandle }) {
  const [type, setType] = useState('ContentTitle');
  const [field, setField] = useState('keyword');
  const handleSelect = (e) => {
    setType(e.target.value);
    if (e.target.value === 'Writer') {
      setField('writer');
    } else {
      setField('keyword');
    }
  };

  const [keyword, setKeyword] = useState('');
  const handleInput = (e) => {
    setKeyword(e.target.value);
  };
  const handleClick = () => {
    const obj = { id, type, keyword, field };
    onSearchHandle(obj);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <StWrapper>
      <StSearchContainer>
        <StSelect onChange={handleSelect}>
          <option value='ContentTitle'>제목+내용</option>
          <option value='Writer'>작성자</option>
        </StSelect>
        <StInput onChange={handleInput} onKeyPress={onKeyDown}></StInput>
        <StImgBox onClick={handleClick}>
          <StImg alt='search' src={search} />
        </StImgBox>
      </StSearchContainer>
    </StWrapper>
  );
}

export default SearchBar;

const StWrapper = styled.div`
  margin: 10px;
  align-items: center;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
`;

const StSearchContainer = styled.div`
  align-items: center;
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const StSelect = styled.select`
  align-items: center;
  background-color: #e6e6e6;
  border: 2px solid #dcdcdc;
  height: 40px;
  color: #424242;
  text-align: center;
  padding: 5px;
  border-radius: 5px 0 0 5px;
  font-size: 14px;
  :focus {
    outline: none;
  }
`;

const StInput = styled.input`
  align-items: left;
  border: 2px solid #dcdcdc;
  border-left: none;
  height: 26px;
  width: 200px;
  color: #424242;
  text-align: left;
  padding: 5px 10px 5px 10px;
  font-size: 14px;
  :focus {
    outline: none;
  }
`;

const StImgBox = styled.div`
  background-color: #00a99d;
  width: 55px;
  height: 40px;
  /* border: 1px solid #DCDCDC; */
  border-left: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const StImg = styled.img`
  width: 16px;
  align-self: center;
  padding: 5px;
`;
