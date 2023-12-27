import { createContext, useState } from "react";

const ApiContext = createContext();

const Provider = ({ children }) => {
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const setResponse = (response) => {
    setApiResponse(response);
  };

  const setLoadingState = (isLoading) => {
    setLoading(isLoading);
  };

  const setErrorState = (isError) => {
    setError(isError);
  };

  const valueToShare = {
    setResponse,
    apiResponse,
    setLoadingState,
    loading,
    setErrorState,
    error,
  };

  return (
    <ApiContext.Provider value={valueToShare}>{children}</ApiContext.Provider>
  );
};

export { Provider };
export default ApiContext;
