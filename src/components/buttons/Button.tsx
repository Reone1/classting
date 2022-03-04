import { Link } from "react-router-dom";
import "./button.css";

const StartButton = ({ text = "Start" }: { text?: string }) => {
  return (
    <Link className="button" to={"/quizs/1"}>
      {text}
    </Link>
  );
};

export default StartButton;
