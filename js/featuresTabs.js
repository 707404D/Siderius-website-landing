const featuresBtns = document.querySelectorAll(".features__tab");
const featuresCnt = document.querySelectorAll(".features__tabs-content");

featuresBtns.forEach(featuresCntFn);

function featuresCntFn(item) {
  item.addEventListener("click", function (e) {
    let tabId = item.getAttribute("data-href");
    let currentTab = document.querySelector(tabId);

    if (!item.classList.contains("activetab")) {
      featuresBtns.forEach(function (item) {
        item.classList.remove("activetab");
      });
      item.classList.add("activetab");

      featuresCnt.forEach(function (cnt) {
        cnt.classList.remove("activetabcnt");
      });
      currentTab.classList.add("activetabcnt");
    }
  });
}
document.querySelector(".features__tab").click();
