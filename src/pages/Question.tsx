import { useCallback } from "react";
import { useParams } from "react-router-dom";
import NextButton from "../components/buttons/NextButton";
import DefaultLayout from "../components/Layout";
import Quiz from "../components/quiz";
import Feedback from "../components/typo/FeedBack";
import useQuiz from "../hooks/useQuiz";

const Question = () => {
  const { id } = useParams();
  const { quizs, checked, setInput, isCorrect } = useQuiz();

  const onChangeHandler: (e: React.FormEvent<HTMLFormElement>) => void =
    useCallback((e) => {
      setInput((e.target as any).value);
    }, []);

  return !quizs ? (
    <DefaultLayout>loding..</DefaultLayout>
  ) : (
    <DefaultLayout>
      {quizs
        .filter((_, idx) => idx === Number(id) - 1)
        .map((el) => (
          <div key={id}>
            <Quiz
              id={id as string}
              quiz={el}
              checked={checked}
              onChangeHandler={onChangeHandler}
            />
            <div style={{ textAlign: "center" }}>
              {checked && (
                <Feedback
                  isCorrect={isCorrect}
                  correctAnswer={el.correct_answer}
                />
              )}
              {checked && <NextButton idx={id as string} />}
            </div>
          </div>
        ))}
    </DefaultLayout>
  );
};

export default Question;
