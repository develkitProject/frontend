import { useState, useCallback } from 'react';

const questionsData = [
  {
    key: 'first',
    title: '1번 질문',
    isOpen: false,
  },
  {
    key: 'second',
    title: '2번 질문',
    isOpen: false,
  },
  {
    key: 'third',
    title: '3번 질문',
    isOpen: false,
  },
  {
    key: 'fourth',
    title: '4번 질문',
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
            : question
        )
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
            : question
        )
      );
    };

  return {
    questions,
    handleShowQuestions,
    handleCloseQuestions,
  };
}
