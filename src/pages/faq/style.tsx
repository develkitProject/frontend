import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 800px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FaqTitle = styled.h1`
  color: white;
  font-weight: 500;
  font-size: 52px;
  text-align: center;
  margin-top: 10px;
`;

export const QuestionBox = styled.ul`
  border-top: 1px solid #d9d9d9;
  max-width: 1000px;
  margin-top: 100px;
`;

export const Questions = styled.li`
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  height: 80px;
  padding: 0 30px;
  cursor: pointer;
`;

export const QuestionTitle = styled.h4`
  color: white;
  width: 1000px;
  text-align: left;
  margin-left: 20px;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.01em;
`;

export const QuestionContentsWrapper = styled.div`
  color: white;
  width: 1000px;
  margin: 30px auto;
  margin-left: 80px;
  font-size: 22px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: -0.01em;
`;

export const BottomLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 1000px;
`;

export const Ment = styled.span<{fontColor: string}>`
  color: ${(props) => props.fontColor};
  font-family: 'Consolas';
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  margin-top: 50px;
`;
