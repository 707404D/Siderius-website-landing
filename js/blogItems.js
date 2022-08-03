const blogSlider = document.querySelector(".blog__desktop");
const blogItems = blogSlider.querySelectorAll(".blog__item");
const blogCnts = blogSlider.querySelectorAll(".blog__content");
const blogWrapperAll = blogSlider.querySelectorAll(".blog__wrapper");
const blogCntWrappAll = blogSlider.querySelectorAll(".blog__contents");
const blogInnerAll = blogSlider.querySelectorAll(".blog__inner");
blogItems.forEach(blogItemsFn);

function blogItemsFn(item) {
  item.addEventListener("click", function (e) {
    let tabId = item.getAttribute("data-href");
    let currentTab = document.querySelector(tabId);

    const blogWrapper = item.parentNode.parentNode;
    if (!blogWrapper.classList.contains("activeblogwrap")) {
      blogWrapperAll.forEach(function (wrap) {
        wrap.classList.remove("activeblogwrap");
      });
      blogWrapper.classList.add("activeblogwrap");
    }
    const blogInner = item.parentNode;
    if (!blogInner.classList.contains("activebloginner")) {
      blogInnerAll.forEach(function (inner) {
        inner.classList.remove("activebloginner");
      });
      blogInner.classList.add("activebloginner");
    }
    const blogCntWrapp = blogWrapper.querySelector(".blog__contents");
    if (!blogCntWrapp.classList.contains("activeblogcnt")) {
      blogCntWrappAll.forEach(function (cntWrapp) {
        cntWrapp.classList.remove("activeblogcnt");
      });
      blogCntWrapp.classList.add("activeblogcnt");
    }
    if (!item.classList.contains("activeblogitem")) {
      blogItems.forEach(function (item) {
        item.classList.remove("activeblogitem");
      });
      item.classList.add("activeblogitem");

      blogCnts.forEach(function (cnt) {
        cnt.classList.remove("activebloginfo");
      });
      currentTab.classList.add("activebloginfo");
    }
  });
}

const blogMobile = document.querySelector(".blog__mobile");
const blogItemsMobile = blogMobile.querySelectorAll(".blog__item");
blogItemsMobile.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.classList.toggle("activeblogitem");
    tab.nextElementSibling.classList.toggle("activebloginfo");
  });
});
