import { Quiz } from "../../types/data";
import Description from "../typo/Description";
import Title from "../typo/Title";

const QuizComponent = ({
  id,
  quiz,
  checked,
  onChangeHandler,
}: {
  id: string;
  quiz: Quiz;
  checked: boolean;
  onChangeHandler: React.FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <div key={id}>
      <Title>Quiz {id}!</Title>
      <Description desc={quiz.question} />
      <form name={id} onChange={(e) => onChangeHandler(e)}>
        {quiz.incorrect_answers
          .concat(quiz.correct_answer)
          .sort()
          .map((answer: string) => (
            <div
              key={answer}
              style={{
                marginBottom: "7px",
                fontSize: "18px",
                fontWeight:
                  checked && answer === quiz.correct_answer
                    ? "bold"
                    : "inherit",
                color:
                  checked && answer === quiz.correct_answer
                    ? "green"
                    : "inherit",
              }}
            >
              <input
                type="radio"
                id={answer}
                name={id}
                value={answer}
                disabled={checked}
              />
              <label
                htmlFor={answer}
                dangerouslySetInnerHTML={{ __html: answer }}
              ></label>
            </div>
          ))}
      </form>
    </div>
  );
};
export default QuizComponent;
