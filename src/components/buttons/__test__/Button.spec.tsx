import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Button from "../Button";

const ButtonText = "testing Button";
describe("Button component Test", () => {
  it("default Text", () => {
    render(
      <BrowserRouter>
        <Button />
      </BrowserRouter>
    );

    expect(screen.getByText("Start")).not.toBeNull;
  });
  it("Custom Text", () => {
    render(
      <BrowserRouter>
        <Button text={ButtonText} />
      </BrowserRouter>
    );

    expect(screen.getByText(ButtonText)).not.toBeNull;
  });
});
