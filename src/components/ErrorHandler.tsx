import React from "react";
import { useCallback } from "react";

const ErrorHandler = () => {
  const [error, setError] = React.useState<string | null>(null);

  const handleError = useCallback((error: any) => {
    if (error.name === "TypeError" && error.message.includes("NetworkError")) {
      setError("Network Error");
    } else if (error === null) {
      setError(null);
    } else {
      setError("Invalid API Error");
    }
  }, []);

  return { error, handleError };
};

export default ErrorHandler;
