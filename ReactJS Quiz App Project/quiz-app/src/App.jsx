import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react'
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import LeaderBoard from "./pages/LeaderBoard";
const Result = lazy(() => import("./pages/Result")) 

function App() {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<div className="text-center text-primary mt-5 fs-4">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
