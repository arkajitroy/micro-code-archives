import { BrowserRouter } from "react-router-dom";
import AppRoutes, { routes } from "./routes";

export default function App() {
  return (
    <main className="mx-auto p-4">
      <h3 className="text-2xl text-center font-bold text-blue-700">
        React Design Pattern
      </h3>

      <div className="flex flex-wrap gap-2 my-2">
        {routes.map((route) => (
          <div key={route.path} className="px-4 py-2 bg-slate-200 rounded-lg">
            <a href={route.path} className="text-blue-500 text-sm font-bold">
              {route.path}
            </a>
          </div>
        ))}
      </div>

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </main>
  );
}
