import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div>
      <h3 className="text-2xl">Welcome to Profile Page</h3>
      <p>Authenticated Page</p>
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg my-2"
        onClick={() => navigate("/")}
      >
        BACK TO HOME
      </button>
    </div>
  );
}
