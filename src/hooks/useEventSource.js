import { useState, useEffect } from "react";

export default function useEventSource(url, headers = {}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource(url, { headers });

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData([...data, newData]);
    };

    return () => {
      eventSource.close();
    };
  }, [url, headers, data]);

  return data;
}
