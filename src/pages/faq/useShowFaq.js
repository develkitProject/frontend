import { useState, useCallback } from 'react';

const questionsData = [
  {
    key: 'first',
    title: '회원가입을 해야만 디벨킷 사이트를 이용할 수 있나요?',
    isOpen: false,
  },
  {
    key: 'second',
    title: '프로젝트 관리(생성 및 초대)는 어떻게 하나요?',
    isOpen: false,
  },
  {
    key: 'third',
    title: '프로젝트는 어디에서 수정하거나 삭제할 수 있나요?',
    isOpen: false,
  },
  {
    key: 'fourth',
    title: '회원정보를 수정할 수 있나요? 또한 어떻게 탈퇴할 수 있나요?',
    isOpen: false,
  },
];

export default function useShowFaq() {
  const [questions, setQuestions] = useState(questionsData);

  const handleShowQuestions =
    ({ key }) =>
    () => {
      setQuestions(
        questions.map((question) =>
          question.key === key
            ? {
                ...question,
                isOpen: true,
              }
            : question,
        ),
      );
    };

  const handleCloseQuestions =
    ({ key }) =>
    () => {
      setQuestions(
        questions.map((question) =>
          question.key === key
            ? {
                ...question,
                isOpen: false,
              }
            : question,
        ),
      );
    };

  return {
    questions,
    handleShowQuestions,
    handleCloseQuestions,
  };
}
