export async function fetchAPI(endpoint) {
  const url = `${process.env.NEXT_PUBLIC_WP_API}${endpoint}`;

  console.log("=================================");
  console.log("WP API REQUEST:", url);

  const res = await fetch(url, {
    next: {
      revalidate: 3600,
      tags: ["wordpress-api"],
    },
  });

  console.log("WP API STATUS:", res.status);
  console.log("WP API URL:", url);

  if (!res.ok) {
    const error = await res.text();

    console.error("WP API ERROR:", {
      status: res.status,
      url,
      response: error,
    });

    throw new Error(`Failed to fetch API: ${res.status}`);
  }

  return res.json();
}

