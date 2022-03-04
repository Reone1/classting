import Button from "../components/buttons/Button";
import DefaultLayout from "../components/Layout";

const Intro = () => {
  return (
    <DefaultLayout>
      <h1 style={{ textAlign: "center" }}>Classting test Quizs!</h1>
      문제는 총 10문제이고 다양한 영역의 문제가 출제됩니다.
      <div style={{ textAlign: "center", margin: "20px" }}>
        <Button />
      </div>
    </DefaultLayout>
  );
};

export default Intro;
