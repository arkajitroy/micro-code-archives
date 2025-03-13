import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorFallbackPage from "@/components/error/error-fallback";
import { MainLayout } from "@/components/layouts/main-layout";
import { Products } from "./products";
import { Users } from "./users";
import { UserDetail } from "./users/user-details";

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackPage}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/users" />} />
            <Route
              path="/users"
              element={
                <ErrorBoundary FallbackComponent={ErrorFallbackPage}>
                  <Users />
                </ErrorBoundary>
              }
            />
            <Route
              path="/users/:id"
              element={
                <ErrorBoundary FallbackComponent={ErrorFallbackPage}>
                  <UserDetail />
                </ErrorBoundary>
              }
            />
            <Route
              path="/products"
              element={
                <ErrorBoundary FallbackComponent={ErrorFallbackPage}>
                  <Products />
                </ErrorBoundary>
              }
            />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
