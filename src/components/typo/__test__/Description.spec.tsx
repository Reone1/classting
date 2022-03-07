import { render, screen } from "@testing-library/react";
import Description from "../Description";

const testDescription = "testing Description";
it("Description component Test", () => {
  render(<Description desc={testDescription} />);

  expect(screen.getAllByText(testDescription)).not.toBeNull;
});
