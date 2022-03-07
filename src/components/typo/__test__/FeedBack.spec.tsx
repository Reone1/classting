import { render, screen } from "@testing-library/react";
import FeedBack from "../FeedBack";

const feedbackTestString = "feedbackTestString";

describe("Feedback component Test", () => {
  it("if Not contain any answer, Do not display. ", async () => {
    const wrapper = render(
      <FeedBack isCorrect={null} correctAnswer={feedbackTestString} />
    );
    expect(wrapper).toBeNull;
  });

  it("isCorrect is 'false'", async () => {
    render(<FeedBack isCorrect={false} correctAnswer={feedbackTestString} />);
    expect(screen.findByText("Brilliant")).not.toBeNull;
    expect(screen.findByText(feedbackTestString)).toBeNull;
  });

  it("isCorrect is 'false'", async () => {
    render(<FeedBack isCorrect={true} correctAnswer={feedbackTestString} />);
    expect(screen.findByText("Try next Time, Answer Is ")).not.toBeNull;
    expect(screen.findByText(feedbackTestString)).not.toBeNull;
  });
});
