const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalReg = document.querySelector(".modal__register");
const previewBtn = document.querySelector(".preview__btn");
// const headerBtn = document.querySelector(".header__button");
const reCallBtns = document.querySelectorAll(".btnrecall");
const modalRecall = document.querySelector(".modal__recall");
// const coursesBtnAll = document.querySelectorAll(".courses__btn");
const modalBuy = document.querySelector(".modal__buy");
const btnBuyCourse = document.querySelector(".btnbuycourse");
reCallBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!body.classList.contains("noscroll")) {
      body.classList.add("noscroll");
    }
    if (!modalRecall.classList.contains("activesubmodal")) {
      modalRecall.classList.add("activesubmodal");
    }
    if (!modal.classList.contains("activemodal")) {
      modal.classList.add("activemodal");
    }
  });
});

previewBtn.addEventListener("click", () => {
  if (!body.classList.contains("noscroll")) {
    body.classList.add("noscroll");
  }
  if (!modalReg.classList.contains("activesubmodal")) {
    modalReg.classList.add("activesubmodal");
  }
  if (!modal.classList.contains("activemodal")) {
    modal.classList.add("activemodal");
  }
});

btnBuyCourse.addEventListener("click", (e) => {
  if (!body.classList.contains("noscroll")) {
    body.classList.add("noscroll");
  }
  if (!modalBuy.classList.contains("activesubmodal")) {
    modalBuy.classList.add("activesubmodal");
  }
  if (!modal.classList.contains("activemodal")) {
    modal.classList.add("activemodal");
  }
  const modalTitle = modalBuy.querySelector(".modal__title");
  if (e.target == document.querySelector(".courseone")) {
    modalTitle.innerText = "Покупка курса “учимся онлайн”";
  }
});
previewBtn.addEventListener("click", () => {
  if (!body.classList.contains("noscroll")) {
    body.classList.add("noscroll");
  }
  if (!modalReg.classList.contains("activesubmodal")) {
    modalReg.classList.add("activesubmodal");
  }
  if (!modal.classList.contains("activemodal")) {
    modal.classList.add("activemodal");
  }
});

const modalTypesBtn = document.querySelector(".modal__typesbuy-btn");
modalTypesBtn.addEventListener("click", () => {
  modalTypesBtn.classList.toggle("activebuybtn");
  const modalTypesBuyList = document.querySelector(".modal__typesbuy-list");
  if (modalTypesBtn.classList.contains("activebuybtn")) {
    modalTypesBuyList.classList.add("activetypebuylist");
  } else {
    modalTypesBuyList.classList.remove("activetypebuylist");
  }
});

const modalTypeBuyBtns = document.querySelectorAll(".modal__typesbuy-type");
modalTypeBuyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!btn.classList.contains("activebuytype")) {
      modalTypeBuyBtns.forEach((btn) => {
        btn.classList.remove("activebuytype");
      });
      btn.classList.add("activebuytype");
    }
  });
});
const modalBtn = document.querySelectorAll(".modal__btn");
modalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    subModals.forEach((sm) => {
      setTimeout(() => {
        sm.classList.remove("activesubmodal");
      }, 1000);
    });
    setTimeout(() => {
      modal.classList.remove("activemodal");
      body.classList.remove("noscroll");
    }, 1000);
  });
});
// close modal
const modalClose = document.querySelectorAll(".modal__close");
const subModals = document.querySelectorAll(".submodal");
modalClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    subModals.forEach((sm) => {
      sm.classList.remove("activesubmodal");
    });

    modal.classList.remove("activemodal");

    body.classList.remove("noscroll");
  });
});

// close modal when click outside the modal

modal.addEventListener("click", function (e) {
  if (modal.classList.contains("activemodal")) {
    if (!e.target.closest(".submodal")) {
      subModals.forEach((sm) => {
        sm.classList.remove("activesubmodal");
      });

      modal.classList.remove("activemodal");

      body.classList.remove("noscroll");
    }
  }
});
