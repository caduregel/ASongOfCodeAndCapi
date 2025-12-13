// src/hooks/useFetch.js
import { useState, useEffect } from "react";

async function fetchFromApi(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error; // let the component handle errors if needed
  }
}

export function useFetch(url: string): { data: any; loading: boolean; error: any } {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // prevent state updates on unmounted component
    setLoading(true);

    fetchFromApi(url)
      .then((res) => {
        if (isMounted) setData(res);
      })
      .catch((err) => {
        if (isMounted) setError(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
