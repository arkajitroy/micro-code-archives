import { FallbackProps } from "react-error-boundary";
import { Button } from "../ui/button";

export default function ErrorFallbackPage({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Something Went Wrong!</h1>
      <p className="text-gray-700 mb-4">{error.message}</p>
      <Button onClick={resetErrorBoundary} className="bg-blue-600 hover:bg-blue-700 text-white">
        Try Again
      </Button>
    </div>
  );
}
