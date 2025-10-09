// hamburguesa
const btn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".header-inner nav");

btn.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "72px";
    nav.style.right = "20px";
    nav.style.background = "rgba(30,35,38,0.95)";
    nav.style.padding = "12px";
    nav.style.borderRadius = "8px";
    nav.style.zIndex = "200";
  }
});

// Proyectos (ejemplo dinámico)
const proyectos = [
  {
    titulo: "Iguana Page",
    desc: "Sitio responsive con CSS Flex",
    img: "assets/img/Proyecto1.jpg",
    link: "#",
  },
  {
    titulo: "Tienda Demo",
    desc: "Grid y Bootstrap",
    img: "assets/img/Proyecto2.jpg",
    link: "#",
  },
  {
    titulo: "Landing",
    desc: "Landing con animaciones",
    img: "assets/img/Proyecto3.jpg",
    link: "#",
  },
];

const cont = document.getElementById("proyectos-list");

proyectos.forEach((p) => {
  const el = document.createElement("div");
  el.className = "proyecto-card";
  el.innerHTML = `
    <img src="${p.img}" alt="${p.titulo}">
    <h4>${p.titulo}</h4>
    <p>${p.desc}</p>
    <a href="${p.link}" target="_blank">Ver proyecto</a>
  `;
  cont.appendChild(el);
});

// Formulario (simulación)
document.getElementById("form-contacto").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Gracias — mensaje enviado (simulado).");
  e.target.reset();
});
