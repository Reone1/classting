import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NextButton from "../NextButton";

describe("NextButton Tesxt", () => {
  it("next Quiz button", async () => {
    window.history.pushState({}, "1", "/quizs/1");
    const { getByText, unmount } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/quizs/*" element={<div>quiz</div>}>
            <Route path=":id" element={<div>quiz</div>} />
          </Route>

          <Route path="/result" element={<div>result </div>} />
        </Routes>
        <NextButton idx="1" />
      </BrowserRouter>
    );
    await act(async () => {
      const button = getByText(/Next/);
      fireEvent.click(button);
    });
    expect(screen.getByText("quiz")).not.toBeNull;
    unmount();
  });
  it("show Result Button", async () => {
    window.history.pushState({}, "1", "/quizs/1");
    const { getByText, unmount } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/quizs/*" element={<div>quiz</div>}>
            <Route path=":id" element={<div>element</div>} />
          </Route>

          <Route path="/result" element={<div>result</div>} />
        </Routes>
        <NextButton idx="10" />
      </BrowserRouter>
    );
    await act(async () => {
      const button = getByText(/Next/);
      fireEvent.click(button);
    });
    expect(screen.getByText("result")).not.toBeNull;
    unmount();
  });
});
