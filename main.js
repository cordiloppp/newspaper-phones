// Mobile menu: open and close the navigation, close it after choosing a section.
const button = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

button.addEventListener("click", () => {
  const open = menu.classList.toggle("show");
  button.setAttribute("aria-expanded", String(open));
  button.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});

menu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    button.setAttribute("aria-expanded", "false");
  }),
);
