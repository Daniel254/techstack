import { useEffect, useState } from "react";

export const useFetch = (requestFn, deps) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  const fetchFn = () => {
    setLoading(true);
    requestFn()
      .then((data) => {
        setData(data.data);
        setError(null);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return {
    isLoading,
    error,
    data,
    fetchFn,
  };
};
