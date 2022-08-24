import { Routes, Route } from "react-router-dom";
import App from "../App";
import { Tasks, NotFound } from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Tasks />} />
        {/* <Route path="contacto" element={<Contact />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
