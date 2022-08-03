document
  .querySelectorAll(".nav__link")
  .forEach(
    (link) =>
      (link.innerHTML =
        "<div><span>" +
        link.textContent.trim().split("").join("</span><span>") +
        "</span></div>")
  );
