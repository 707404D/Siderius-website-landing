// const preview = document.querySelector(".preview");
// const previewHeight = preview.offsetHeight;
// preview.style.top = previewHeight + "px";
// const features = document.querySelector(".features");
// const featuresH = features.offsetHeight;
// const he1 = previewHeight + "px";
// const he2 = featuresH + "px";
// features.style.top = he1 + he2;
// function scrollBanner() {
//   var scrollPos;
//   var headerText = document.querySelector("header .container");
//   scrollPos = window.scrollY;
//   const headerHeight = document.querySelector("header").offsetHeight;

//   if (scrollPos <= headerHeight) {
//     headerText.style.transform = "translateY(" + -scrollPos / 3 + "px" + ")";
//     headerText.style.opacity = 1 - scrollPos / headerHeight;
//   }

//   const preview = document.querySelector(".preview");
//   const previewHeight = preview.offsetHeight;
//   preview.style.top = previewHeight;
//   if (scrollPos <= previewHeight) {
//     preview.style.transform = "translateY(" + -scrollPos / 3 + "px" + ")";
//     preview.style.opacity = 1 - scrollPos / previewHeight;
//   }
// }
// window.addEventListener("scroll", scrollBanner);

// const headerGranFn = () => {
//const header = document.querySelector(".header");
//   let scrollPos = window.pageYOffset;

//   if (scrollPos > 250) {
//     header.classList.add("headergrad");
//   } else {
//     header.classList.remove("headergrad");
//   }
// };
// window.addEventListener("scroll", headerGranFn);
const main = document.querySelector(".main");
const header = document.querySelector(".header");
const headerH = header.offsetHeight;
main.style.paddingTop = headerH + "px";
window.addEventListener("scroll", () => {
  main.style.paddingTop = headerH + "px";
  let scrollPos = window.scrollY;

  if (scrollPos > 550) {
    header.classList.add("headergrad");
  } else {
    header.classList.remove("headergrad");
  }

  const preview = document.querySelector(".preview");
  const previewHeight = preview.offsetHeight;

  const prevFn = () => {
    let scrollPos = window.scrollY;
    if (scrollPos > previewHeight - 100) {
      preview.classList.add("off");
    } else {
      preview.classList.remove("off");
    }
  };

  const features = document.querySelector(".features");
  const featuresH = features.offsetHeight;
  prevFn();
  const featFn = () => {
    let scrollPos = window.scrollY;
    if (scrollPos > featuresH + previewHeight - 100) {
      features.classList.add("off");
    } else {
      features.classList.remove("off");
    }
  };
  featFn();

  const reviews = document.querySelector(".reviews");
  const reviewsH = reviews.offsetHeight;

  const reviewFn = () => {
    let scrollPos = window.scrollY;
    if (scrollPos > reviewsH + featuresH + previewHeight - 100) {
      reviews.classList.add("off");
    } else {
      reviews.classList.remove("off");
    }
  };
  reviewFn();

  const courses = document.querySelector(".courses");
  const coursesH = courses.offsetHeight;

  const coursesFn = () => {
    let scrollPos = window.scrollY;
    if (scrollPos > coursesH + reviewsH + featuresH + previewHeight + 100) {
      courses.classList.add("off");
    } else {
      courses.classList.remove("off");
    }
  };
  coursesFn();

  //   const blog = document.querySelector(".blog");
  //   const blogH = blog.offsetHeight;

  //   const blogFn = () => {
  //     let scrollPos = window.scrollY;
  //     if (
  //       scrollPos >
  //       blogH + coursesH + reviewsH + featuresH + previewHeight + 100
  //     ) {
  //       blog.classList.add("off");
  //     } else {
  //       blog.classList.remove("off");
  //     }
  //   };
  //   blogFn();
});
