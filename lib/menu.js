const DEFAULT_WP_API_URL = "https://wordpress.aardishinfotech.in/wp-json";

export async function getMenu(menuId = 4) {
  const baseUrl = process.env.NEXT_PUBLIC_WP_API_URL || DEFAULT_WP_API_URL;

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