async function send(
  url: string,
  method: "GET" | "POST",
  body?: object | null,
) {
  const options: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "text/plain",
    },
  };

  // Add body only for POST requests and if body is provided
  if (method === "POST" && body) {
    options.body = JSON.stringify(body);
  }

  try {
    const res = await fetch(url, options);
    
    // Check if response is OK (status 200-299)
    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
    }
    
    // Parse and return JSON response
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export { send };