import { render, screen } from "@testing-library/react";
import Title from "../Title";

const testChildText = "testing Title";
it("Title component Test", () => {
  render(<Title>{testChildText}</Title>);

  expect(screen.getAllByText(testChildText)).not.toBeNull;
});
