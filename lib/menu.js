export async function getMenu(menuId = 4) {
  const baseUrl = process.env.NEXT_PUBLIC_WP_API_URL;

  if (!baseUrl) {
    throw new Error(
      "Missing NEXT_PUBLIC_WP_API_URL. Configure the WordPress REST API base URL in .env.local."
    );
  }

  const url = `${baseUrl.replace(/\/$/, "")}/menus/v1/menus/${menuId}`;

  const res = await fetch(url, {
    next: {
      revalidate: 3600,
      tags: ["site-menu"],
    },
  });

  if (!res.ok) {
    throw new Error(`Menu API failed (${res.status})`);
  }

  return res.json();
}