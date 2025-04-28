import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import Onboarding from "./components/onboarding";
import WithAuth from "./provider/with-auth";

export default function HigherOrderComponent() {
  const AuthenticatedDashboard = WithAuth(Dashboard);
  const AuthenticatedProfile = WithAuth(Profile);

  return (
    <main className="mx-auto p-4">
      <Router>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/dashboard" element={<AuthenticatedDashboard />} />
          <Route path="/profile" element={<AuthenticatedProfile />} />
        </Routes>
      </Router>
    </main>
  );
}
