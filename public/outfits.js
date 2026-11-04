"use strict";

// A voluntary, page-local outfit choice. It never adds a product to the bag.
(() => {
  const status = document.querySelector("#look-status");
  if (!status) return;

  document.querySelectorAll(".save-look").forEach((save) => {
    const plan = document.getElementById(save.getAttribute("aria-controls"));
    const remove = plan?.querySelector(".remove-look");
    if (!plan || !remove) return;
    const name =
      save.dataset.look === "streetwear" ? "Streetwear" : "Clean casual";

    save.addEventListener("click", () => {
      plan.hidden = false;
      save.setAttribute("aria-expanded", "true");
      status.textContent = `${name} saved for this page visit. Your checklist is open. Nothing has been added to your demo bag.`;
    });

    remove.addEventListener("click", () => {
      plan.hidden = true;
      save.setAttribute("aria-expanded", "false");
      save.focus();
      status.textContent = `${name} removed from your plans. Your demo bag is unchanged.`;
    });
  });
})();
