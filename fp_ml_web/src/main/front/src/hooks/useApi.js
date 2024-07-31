import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cancelTokenSource = useRef(null);

  const fetchData = useCallback(async (force = false) => {
    if (data && !force) return { data, loading: false, error: null };

    if (cancelTokenSource.current) {
      cancelTokenSource.current.cancel('Operation canceled due to new request.');
    }

    cancelTokenSource.current = axios.CancelToken.source();

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(url, { cancelToken: cancelTokenSource.current.token });
      setData(response.data);
      setLoading(false);
      return { data: response.data, loading: false, error: null };
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Request canceled', err.message);
      } else {
        setError(err);
        setLoading(false);
      }
      return { data: null, loading: false, error: err };
    }
  }, [url, data]);

  useEffect(() => {
    return () => {
      if (cancelTokenSource.current) {
        cancelTokenSource.current.cancel('Operation canceled by the user.');
      }
    };
  }, []);

  return { data, loading, error, fetchData };
};

export default useApi;