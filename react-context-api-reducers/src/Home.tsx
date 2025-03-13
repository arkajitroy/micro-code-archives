import React from "react";
import { useAuthContext } from "./context/useAuthContext";
import { IUser } from "./types";
import { login, logout } from "./context/actions";

const Home: React.FC = () => {
  const { state, dispatch } = useAuthContext();

  const handleLoginClick = () => {
    const user: IUser = { firstName: "John", lastName: "Doe", role: "SUPER-ADMIN" };
    const token = "dfs56ds56f5.65sdf564dsf.645sdfsd4f56";
    dispatch(login(user, token));
  };

  const handleLogoutClick = () => dispatch(logout());

  return (
    <div>
      <h1>Home Page</h1>
      {state.isAuthenticated ? (
        <div>
          <h3>Welcome {state.user?.firstName}</h3>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLoginClick}>Login</button>
      )}
    </div>
  );
};

export default Home;
