import { useMemo } from "react";
import Button from "../components/buttons/Button";
import DefaultLayout from "../components/Layout";
import { Quizs } from "../types/data";

const Result = () => {
  const answers = useMemo<string[]>(() => {
    return JSON.parse(localStorage.getItem("answers") as string);
  }, []);

  const quizs = useMemo<Quizs>(() => {
    return JSON.parse(localStorage.getItem("quizs") as string);
  }, []);

  const ratio = useMemo(() => {
    let count = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === quizs[i].correct_answer) count++;
    }
    console.log(quizs);
    return (count / quizs.length) * 100;
  }, [quizs, answers]);

  return !answers ? (
    <DefaultLayout>not answers data</DefaultLayout>
  ) : (
    <DefaultLayout>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <div>quizs</div>

          {quizs.map((el) => (
            <div>{el.correct_answer}</div>
          ))}
        </div>
        <div>
          <div>answers</div>
          {answers.map((el) => (
            <div>{el}</div>
          ))}
        </div>
        <div>
          <div>iscorrect</div>
          {quizs.map((el, index) => {
            const isCorrect = el.correct_answer === answers[index];
            return <div>{isCorrect ? "true" : "false"}</div>;
          })}
        </div>

        <div>
          <div>incorrect Quizs</div>
          {quizs
            .map((el, idx) => {
              return (
                <div key={idx}>
                  {idx + 1}
                  <div dangerouslySetInnerHTML={{ __html: el.question }}></div>
                </div>
              );
            })
            .filter((el, i) => {
              return quizs[Number(el.key)].correct_answer !== answers[i];
            })}
        </div>
        <div> ratio : {ratio} %</div>
        <Button text="Restart" />
      </div>
    </DefaultLayout>
  );
};

export default Result;
