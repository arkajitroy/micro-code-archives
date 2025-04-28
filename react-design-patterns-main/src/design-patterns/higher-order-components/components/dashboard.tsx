import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <main>
      <h3 className="text-2xl">Welcome to the Dashboard</h3>
      <p>Authenticated Page</p>
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg my-2"
        onClick={() => navigate("/")}
      >
        BACK TO HOME
      </button>
    </main>
  );
}
