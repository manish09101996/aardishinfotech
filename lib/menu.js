export async function getMenu(menuId = 4) {
  const url = `${process.env.NEXT_PUBLIC_WP_API}/menus/v1/menus/${menuId}`;

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