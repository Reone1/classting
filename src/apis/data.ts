import axios from "axios";
import { QuizResponse } from "../types/data";

export const getQuiz = async ({
  type = "multiple",
  amount = 10,
}: {
  type?: string;
  amount?: number;
}) =>
  await axios.get<QuizResponse>("https://opentdb.com/api.php", {
    params: {
      type,
      amount,
    },
  });
