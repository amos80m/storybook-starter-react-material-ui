import { useState, useEffect } from 'react';

export default function useFetcher(action) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    loadData();
  }, [action]);

  async function loadData() {
    try {
      setLoading(true);
      const actionData = await action();
      setData(actionData);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  return [data, loading, error];
}