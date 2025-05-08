import dns from "dns/promises";

const resolve = await dns
  .lookup("api.weatherapi.com")
  .catch((e) => console.error("DNS lookup failed:", e));
console.log("DNS resolved:", resolve);

export async function GET(req) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  try {
    const url = new URL(req.url);
    const endpoint = url.searchParams.get("endpoint");

    if (!endpoint) {
      return new Response(
        JSON.stringify({ error: "Missing required parameter: endpoint" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    const apiKey =
      process.env.WEATHER_API_KEY || process.env.REACT_APP_WEATHER_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API key not configured" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // Build query string
    const queryParams = new URLSearchParams({ key: apiKey });
    url.searchParams.forEach((value, key) => {
      if (key !== "endpoint") {
        queryParams.append(key, value);
      }
    });

    const apiUrl = `https://api.weatherapi.com/v1/${endpoint}?${queryParams.toString()}`;
    console.log(apiUrl);
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "User-Agent": "MyApp/1.0",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(
        JSON.stringify({
          error: `Weather API responded with status ${response.status}`,
          details: errorText,
        }),
        {
          status: response.status,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Weather API proxy error:", error);

    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
