import TopButton from '../../common/elements/TopButton';
import FaqContents from './components/FaqContent';
import FaqIcon from './components/FaqIcon';

import * as S from './style';
import useShowFaq from './hooks/useShowFaq';

export default function FAQPage() {
  const { questions, handleShowQuestions, handleCloseQuestions } = useShowFaq();
  
  const contents = {
    first: <FaqContents.First />,
    second: <FaqContents.Second />,
    third: <FaqContents.Thrid />,
    fourth: <FaqContents.Fourth />,
  };

  return (
    <S.Container>
      <TopButton />
      <S.Ment fontColor="white">
        let <S.Ment fontColor="#00A99D">D_Velkit</S.Ment> =
        <S.Ment fontColor="#F5D28C"> “FAQ”;</S.Ment>
      </S.Ment>
      <S.FaqTitle>자주 묻는 질문</S.FaqTitle>
      <S.QuestionBox>
        {questions.map(({ title, key, isOpen }) => (
          <div key={key}>
            {!isOpen ? (
              <S.Questions onClick={handleShowQuestions({ key })}>
                <FaqIcon.QuestionIcon />
                <S.QuestionTitle>{title}</S.QuestionTitle>
                <FaqIcon.ArrowDown />
              </S.Questions>
            ) : (
              <S.Questions onClick={handleCloseQuestions({ key })}>
                <FaqIcon.QuestionIcon />
                <S.QuestionTitle>{title}</S.QuestionTitle>
                <FaqIcon.ArrowUp />
              </S.Questions>
            )}
            {isOpen && (
              <>
                <S.QuestionContentsWrapper>
                  { contents[key as keyof typeof contents] }
                </S.QuestionContentsWrapper>
                <S.BottomLine />
              </>
            )}
          </div>
        ))}
      </S.QuestionBox>
      <div style={{ marginBottom: '100px' }} />
    </S.Container>
  );
}
