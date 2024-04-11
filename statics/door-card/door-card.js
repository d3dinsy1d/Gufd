export const doorCard = () => {
  if (document.querySelector(".door-card__tabs")) {
    const tabsButtons = document.querySelectorAll(".door-card__tab-button");

    tabsButtons.forEach((button) => {
      button.addEventListener("click", () => {
        tabsButtons.forEach((btn) => {
          btn.classList.remove("--active");
        });

        button.classList.add("--active");
      });
    });
  }
}