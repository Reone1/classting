import { memo } from "react";
const Feedback = ({
  isCorrect,
  correctAnswer,
}: {
  isCorrect: boolean | null;
  correctAnswer: string;
}) => {
  if (isCorrect === null) return null;

  return (
    <div style={{ color: isCorrect ? "green" : "skyblue" }}>
      <div style={{ marginBottom: "14px" }}>
        {isCorrect ? "Brilliant" : "Try next Time, Answer Is "}
        {!isCorrect && (
          <span style={{ fontWeight: "bold", color: "black" }}>
            {correctAnswer}
          </span>
        )}
      </div>
    </div>
  );
};

export default memo(Feedback);
