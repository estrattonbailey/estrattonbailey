export function createHeadObject({
  title = "estrattonbailey",
  link = [],
  script = [],
} = {}) {
  return {
    title,
    link: [
      { href: "/favicon.png", rel: "icon", type: "image/png" },
      { href: "https://unpkg.com/svbstrate@5.1.0", rel: "stylesheet" },
      { href: "/style.css", rel: "stylesheet" },
      `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap" rel="stylesheet">`,
      ...link,
    ],
    script,
  };
}
