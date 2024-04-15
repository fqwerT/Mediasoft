import React, { useState, useMemo, useRef } from "react";
import axios from "axios";

interface FetchedProps {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}
export const useFirstMountFetch = (url: string) => {
  const [fetched, setFetched] = useState<any>(null);
  const isfirstMounted = useRef(true);

  useMemo(() => {
    if (isfirstMounted.current) {
      axios.get(url).then((res) => setFetched(res.data));
      isfirstMounted.current = false;
    }
  }, [isfirstMounted.current]);

  return fetched;
};
