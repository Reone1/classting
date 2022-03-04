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
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="/result" element={<Result />} />
        <Route path="/*" element={<div>not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const Post = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};
export default App;
