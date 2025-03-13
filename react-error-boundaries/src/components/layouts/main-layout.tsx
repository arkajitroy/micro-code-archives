import { PropsWithChildren } from "react";
import { Link, Outlet } from "react-router-dom";

export const MainLayout = ({ children }: PropsWithChildren) => (
  <div className="min-h-screen p-4">
    <nav className="flex gap-4 mb-4">
      <Link to="/" className="font-bold">
        Home
      </Link>
      <Link to="/users" className="font-bold">
        Users
      </Link>
      <Link to="/products" className="font-bold">
        Products
      </Link>
    </nav>
    {children}
    <Outlet />
  </div>
);
