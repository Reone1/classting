import { useMemo, useState } from "react";
import Button from "../components/buttons/Button";
import DefaultLayout from "../components/Layout";
import { Quizs } from "../types/data";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Title, Legend, Tooltip } from "chart.js";
Chart.register(ArcElement, Legend, Tooltip, Title);

const divStyle: React.CSSProperties = {
  marginTop: "20px",
  textAlign: "center",
};

const Result = () => {
  const [open, setOpen] = useState(false);
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
    return (count / quizs.length) * 100;
  }, [quizs, answers]);

  const chartData = useMemo(() => {
    return {
      labels: ["정답", "오답"],
      datasets: [
        {
          label: "정오답 비율",
          data: [10 * (ratio / 100), (100 - ratio) / 10],
          backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
          hoverOffset: 4,
        },
      ],
    };
  }, [ratio]);

  return !answers ? (
    <DefaultLayout>not answers data</DefaultLayout>
  ) : (
    <DefaultLayout>
      <div>
        <Doughnut data={chartData} />
        <div style={divStyle}>ratio : {ratio} %</div>
      </div>
      <section>
        <h2>
          내가 틀린 문제{" "}
          <span
            className="open-button"
            onClick={() => setOpen((state) => !state)}
          >
            &gt;
          </span>
        </h2>
        <div
          style={{
            display: open ? "block" : "none",
          }}
        >
          {quizs
            .map((el, idx) => {
              return (
                <div key={idx}>
                  {idx + 1}
                  {".      "}
                  <span
                    dangerouslySetInnerHTML={{ __html: el.question }}
                  ></span>
                  <ul>
                    <li>문제의 정답 : {el.correct_answer}</li>
                    <li>내가 고른 정답: {answers[idx]}</li>
                  </ul>
                </div>
              );
            })
            .filter((el, i) => {
              return quizs[Number(el.key)].correct_answer !== answers[i];
            })}
        </div>
      </section>
      <div style={divStyle}>
        <Button text="Restart" />
      </div>
    </DefaultLayout>
  );
};

export default Result;
