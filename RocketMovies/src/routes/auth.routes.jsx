import { Route, Routes } from "react-router-dom";

import { SingIn } from "../page/SingIn";
import { SingUp } from "../page/SingUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SingUp />} />
      <Route path="/register" element={<SingIn />} />
    </Routes>
  );
}
