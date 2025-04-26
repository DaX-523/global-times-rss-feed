import { useState, useEffect } from "react";
import { baseUrl } from "../lib/constants";
import parseContent from "../lib/parseContent";

const useFeedData = (feedUrl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${baseUrl}${feedUrl}`);
        const feed = await response.json();

        if (feed?.status !== "ok") {
          throw new Error("Failed to fetch feed");
        }

        // Process feed items
        feed.items = feed?.items?.map((item) => {
          return {
            ...item,
            description: parseContent(item.description),
          };
        });

        setData(feed);
        setError(null);
      } catch (err) {
        console.error("Error fetching feed data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [feedUrl]);

  return { data, loading, error };
};

export default useFeedData;
