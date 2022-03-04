import axios from "axios";
import { QuizResponse } from "../types/data";

export const getQuiz = async () =>
  await axios.get<QuizResponse>("https://opentdb.com/api.php", {
    params: {
      type: "multiple",
      amount: 10,
    },
  });
