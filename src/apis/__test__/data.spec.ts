import { getQuiz } from "../data";

describe("api test", () => {
  it("data", async () => {
    const { data } = await getQuiz({});

    expect(data.results.length).toEqual(10);
  });
});
