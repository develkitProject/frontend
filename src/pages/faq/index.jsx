import FaqContents from './components/FaqContent';
import FaqIcon from './components/FaqIcon';

import * as S from './style';
import useShowFaq from './useShowFaq';

export default function FAQPage() {
  const { questions, handleShowQuestions, handleCloseQuestions } = useShowFaq();

  const Contents = {
    first: <FaqContents.First />,
    second: <FaqContents.Second />,
    third: <FaqContents.Thrid />,
    fourth: <FaqContents.Fourth />,
  };

  return (
    <S.Container>
      <S.Ment fontColor='white'>
        let <S.Ment fontColor='#00A99D'>D_Velkit</S.Ment> =
        <S.Ment fontColor='#F5D28C'> “FAQ”;</S.Ment>
      </S.Ment>
      <S.FaqTitle>자주 묻는 질문</S.FaqTitle>
      <S.QuestionBox>
        {questions.map(({ title, key, isOpen }) => (
          <div key={key}>
            <S.Questions>
              <FaqIcon.QuestionIcon />
              <S.QuestionTitle>{title}</S.QuestionTitle>
              {!isOpen ? (
                <FaqIcon.ArrowDown onClick={handleShowQuestions({ key })} />
              ) : (
                <FaqIcon.ArrowUp onClick={handleCloseQuestions({ key })} />
              )}
            </S.Questions>
            {isOpen && (
              <>
                <S.QuestionContentsWrapper>
                  {Contents[key]}
                </S.QuestionContentsWrapper>
                <S.BottomLine />
              </>
            )}
          </div>
        ))}
      </S.QuestionBox>
      <div style={{marginBottom: "100px"}}/>
    </S.Container>
  );
}
