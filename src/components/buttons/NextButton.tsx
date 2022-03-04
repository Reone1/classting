import { Link } from "react-router-dom";

const NextButton = ({ idx }: { idx: string }) => {
  return (
    <Link
      className="button"
      to={Number(idx) + 1 > 10 ? "/result" : Number(idx) + 1 + ""}
    >
      Next
    </Link>
  );
};

export default NextButton;
