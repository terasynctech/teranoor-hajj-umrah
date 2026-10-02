document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  menu?.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll(".main-nav a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });

  document.querySelectorAll("[data-package]").forEach(link => {
    link.addEventListener("click", () => {
      const selected = link.dataset.package;
      const select = document.getElementById("package");
      if (select && selected) {
        [...select.options].forEach(o => {
          if (o.textContent.toLowerCase().includes(selected.toLowerCase())) {
            select.value = o.value;
          }
        });
      }
    });
  });

  document.getElementById("enquiryForm")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const city = document.getElementById("city").value.trim();
    const packageName = document.getElementById("package").value;
    const travellers = document.getElementById("travellers").value.trim();
    const month = document.getElementById("month").value;
    const message = document.getElementById("message").value.trim();

    const text =
`Assalamu Alaikum,
I would like to enquire about TeraNoor Hajj & Umrah.

Name: ${name}
Mobile: ${mobile}
City: ${city || "Not provided"}
Package: ${packageName}
Travellers: ${travellers || "Not provided"}
Preferred Month: ${month || "Not provided"}
Message: ${message || "Not provided"}

Please share the suitable package details.`;

    window.open("https://wa.me/917633801161?text=" + encodeURIComponent(text), "_blank");
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
