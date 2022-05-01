import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Hook for data fetching.
 */
export default function useDataFetch(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    async function fetchData() {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch(e) {
        setIsError(true);
        console.log(e);
      }
      setIsLoading(false);
    }

    fetchData();
  }, [url]);

  return [{data, isLoading, isError}, setUrl];
};