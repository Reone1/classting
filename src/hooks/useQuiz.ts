import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuiz } from "../apis/data";
import { Quizs } from "../types/data";

const useQuiz = () => {
  const { id } = useParams();
  const [quizs, setQuizs] = useState<Quizs | null>(null);
  const [answers, setAnswers] = useState<Array<string>>([]);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    localStorage.clear();
  }, []);

  useEffect(() => {
    if (quizs === null) {
      getQuiz({}).then((res) => {
        localStorage.setItem("quizs", JSON.stringify(res.data.results));
        setQuizs(res.data.results);
      });
    }
  }, [quizs]);

  useEffect(() => {
    setChecked(false);
    setCorrect(null);
  }, [id]);

  useEffect(() => {
    if (answers.length !== 0) {
      localStorage.setItem("answers", JSON.stringify(answers));
    }
  }, [answers]);

  useEffect(() => {
    if (checked) {
      setCorrect(
        (quizs as Quizs)[Number(id) - 1].correct_answer === answers.slice(-1)[0]
      );
    }
  }, [checked]);

  const setInput = useCallback((input: string) => {
    setAnswers((state) => {
      return [...state, input];
    });
    setChecked(true);
  }, []);

  return {
    quizs,
    checked,
    isCorrect,
    setInput,
  };
};

export default useQuiz;
