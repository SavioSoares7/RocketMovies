import { Route, Routes } from "react-router-dom";

import { CreateMovie } from "../page/CreateMovie";
import { Home } from "../page/Home";
import { MoviePreview } from "../page/MoviePreview";
import { Profile } from "../page/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createMovie" element={<CreateMovie />} />
      <Route path="/moviePreview/:id" element={<MoviePreview />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
