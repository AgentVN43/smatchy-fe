import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import TeamPage from "../pages/team/team";
import InvestorsPage from "../pages/investors";
import EventsPage from "../pages/event";
import ContactPage from "../pages/contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/investors" element={<InvestorsPage />} />
      <Route path="events" element={<EventsPage />} />
      <Route path="contact" element={<ContactPage />} />

      {/* <Route path="/posts/:slug" element={<Navigate to=".." replace />} />
      <Route path="/pages/:slug" element={<Navigate to=".." replace />} />

      <Route path="/:slug" element={<DynamicContent />} /> */}
      {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
    </Routes>
  );
}
