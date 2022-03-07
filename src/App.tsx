import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Intro from "./pages/Intro";
import Question from "./pages/Question";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/quizs/*" element={<Question />}>
          <Route path=":id" />
        </Route>
        <Route path="/result" element={<Result />} />
        <Route path="/*" element={<div>not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
