// src/App.tsx
import MainLayout from "../layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import { Games } from "../pages/Games";
import { Score } from "../pages/Score";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/Games" element={<Games />} />
        <Route path="/Score" element={<Score />} />
      </Routes>
    </MainLayout>
  );
}

export default App;