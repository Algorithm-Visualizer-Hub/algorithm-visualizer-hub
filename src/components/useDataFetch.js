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
    setIsLoading(true);
    setIsError(false);
    
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchData();
  }, [url]);

  return [{data, isLoading, isError}, setUrl];
};