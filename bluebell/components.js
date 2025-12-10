const navLinks = [
  { href: "index.html", label: "Overview" },
  { href: "insulation-heating.html", label: "Heating & Insulation" },
  { href: "flooring.html", label: "Flooring" },
  { href: "bathrooms.html", label: "Bathrooms" },
  { href: "kitchen-utility.html", label: "Kitchen & Utility" },
  { href: "cleaning-repair.html", label: "Cleaning & Repair" },
  { href: "stretch-goals.html", label: "Stretch Goals" }
];

document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav[data-component='site-nav']").forEach((nav) => {
    const navMarkup = `
      <ul>
        ${navLinks
          .map(({ href, label }) => {
            const isActive = href === currentPath;
            return `<li><a href="${href}"${isActive ? " class='active'" : ""}>${label}</a></li>`;
          })
          .join("")}
      </ul>
    `;

    nav.innerHTML = navMarkup;
  });
});
