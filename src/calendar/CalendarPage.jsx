import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SideMenu from '../components/SideMenu';
import CalendarApp from './CalendarApp';
import BlackButton from '../common/elements/BlackButton';
import { useGetSchedulesQuery } from '../redux/modules/workspaces';
import CalendarModal from '../common/Modal/CalendarModal';

export default function ClaendarPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [date, setDate] = useState([]);
  const id = Number(params.id);
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <StWrapper>
      <SideMenu />

      <Projects>
        {' '}
        <StIntroContainer>
          <div>
            <StTitle>일정관리</StTitle>
            <StContent>프로젝트 팀원들의 일정을 관리해보세요.</StContent>
          </div>
          <BlackButton text="일정만들기" onClick={onOpenModal} />
        </StIntroContainer>
        <CalendarApp id={id} />
        {isOpen && <CalendarModal onClose={onCloseModal} id={id} />}
      </Projects>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
`;

const Projects = styled.div`
  width: 65%;
  height: 100%;
  margin-left: 50px;
  margin-top: 4%;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  justify-content: center;
`;

const StIntroContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  min-height: 12vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #c6c6c6;
`;

const StButton = styled.button`
  background-color: #000000;
  margin-left: 30px;
  width: 20%;
  height: 35px;
  border-radius: 8px;
  border: 0px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  /* letter-spacing: -1px; */
  cursor: pointer;
`;

const StTitle = styled.p`
  color: #333333;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1.5px;
`;

const StContent = styled.p`
  margin-top: 10px;
  color: #333333;
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -1px;
`;
