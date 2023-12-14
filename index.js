// preloader event
let loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  let preloadertimeLine = gsap.timeline();
  preloadertimeLine
    .to(".blinder", {
      yPercent: -100,
      stagger: {
        amount: 0.5,
      },
    })
    .to(
      "svg",
      {
        opacity: 0,
        display: "none",
      },
      "<"
    )
    .to(".blinder-container", {
      display: "none",
    })
    .to(".loader", {
      display: "none",
    })
    .from(
      ".hero-left-col",
      {
        y: 200,
        opacity: 0,
      },
      "<"
    )
    .from(
      ".hero-right-col",
      {
        y: 200,
        opacity: 0,
      },
      "<"
    );
});

const menuBtn = document.querySelector(".menu-btn");
const menuConatiner = document.querySelector(".menu-container");
// !gsap lines hamburger
gsap.set(".line-1", {
  y: -5,
});
gsap.set(".line-2", {
  y: 5,
});

menuBtn.addEventListener("click", () => {
  menuConatiner.classList.toggle("active");

  removeActive();
});

const links = document.querySelectorAll(".links");
links.forEach((links) => {
  links.addEventListener("click", () => {
    menuConatiner.classList.remove("active");
    removeActive();
  });
});

// ! remove active class function

function removeActive() {
  if (menuConatiner.classList.contains("active")) {
    const timeLine = gsap.timeline({ defaults: { duration: 0.3 } });
    timeLine
      .to(".line-1", {
        y: 0,
        rotation: 45,
      })
      .to(
        ".line-2",
        {
          y: 0,
          rotation: -45,
        },
        "<"
      )
      .from(".sliders", {
        xPercent: 100,
        stagger: {
          amount: 1,
        },
      })
      .from(".navlinks", {
        y: 100,
        opacity: 0,
      })
      .from(".links", {
        y: 30,
        opacity: 0,
        stagger: {
          amount: 1,
        },
      });
  } else {
    const timeLine = gsap.timeline();
    timeLine
      .to(".line-1", {
        y: -5,
        rotation: 0,
      })
      .to(
        ".line-2",
        {
          y: 5,
          rotation: 0,
        },
        "<"
      );
  }
}

// ! gallery slideshow
function gallery(selector, objectArray) {
  const grid = document.querySelector(selector);
  let imageArray = objectArray;
  let index = 0;
  let length = objectArray.length;
  function slider() {
    if (index == length) {
      index = 0;
    }
    grid.style.background = `url("images/${imageArray[index]}.jfif") no-repeat center center / cover `;
    index++;
  }
  setInterval(() => {
    slider();
  }, 2000);
}

const imageObject = {
  imagearray1: [
    "grid-1-image-1",
    "grid-1-image-2",
    "grid-1-image-3",
    "grid-1-image-4",
    "grid-1-image-5",
  ],
  imagearray2: [
    "grid-2-image-1",
    "grid-2-image-2",
    "grid-2-image-3",
    "grid-2-image-4",
    "grid-2-image-5",
  ],
  imagearray3: [
    "grid-3-image-1",
    "grid-3-image-2",
    "grid-3-image-3",
    "grid-3-image-4",
  ],
  imagearray4: ["grid-4-image-1", "grid-4-image-2", "grid-4-image-3"],
  imagearray5: ["grid-5-image-1", "grid-5-image-2", "grid-5-image-3"],
  imagearray6: [
    "grid-6-image-1",
    "grid-6-image-2",
    "grid-6-image-3",
    "grid-6-image-4",
  ],
  imagearray7: [
    "grid-7-image-1",
    "grid-7-image-2",
    "grid-7-image-3",
    "grid-7-image-4",
    "grid-7-image-5",
  ],
  imagearray8: ["grid-8-image-1", "grid-8-image-2", "grid-8-image-3"],
  imagearray9: ["grid-9-image-1", "grid-9-image-2", "grid-9-image-3"],
  imagearray10: [
    "grid-10-image-1",
    "grid-10-image-2",
    "grid-10-image-3",
    "grid-10-image-4",
  ],
};

gallery(".grid-item-1", imageObject.imagearray1);
gallery(".grid-item-2", imageObject.imagearray2);
gallery(".grid-item-3", imageObject.imagearray3);
gallery(".grid-item-4", imageObject.imagearray4);
gallery(".grid-item-5", imageObject.imagearray5);
gallery(".grid-item-6", imageObject.imagearray6);
gallery(".grid-item-7", imageObject.imagearray7);
gallery(".grid-item-8", imageObject.imagearray8);
gallery(".grid-item-9", imageObject.imagearray9);
gallery(".grid-item-10", imageObject.imagearray10);

// scroll trigger
let timeLine = gsap.timeline();

timeLine.from(".title-cards", {
  scrollTrigger: {
    trigger: ".artWorks",
    start: "top 500",
    end: "top 300",
    scrub: 2,
  },
  stagger: {
    amount: 0.5,
  },
  opacity: 0,
  y: -50,
  duration: 1,
});
timeLine.from(".grid-container-1", {
  scrollTrigger: {
    trigger: ".grid-container-1",
    start: "top 500",
    end: "top 300",
    scrub: 2,
  },
  opacity: 0,
  y: -50,
  duration: 1,
});
timeLine.from(".grid-item", {
  scrollTrigger: {
    trigger: ".grid-container-1",
    start: "top bottom",
    end: "bottom center",
    scrub: 4,
  },
  opacity: 0,
  scale: 0,
  stagger: {
    amount: 0.7,
  },
});
timeLine.from(".image-showcase", {
  scrollTrigger: {
    trigger: ".every-art-speaks",
    start: "top center",
    end: "bottom 300",
    scrub: 4,
  },
  opacity: 0,
  scale: 0,
});
timeLine.from(".testimonial-grid", {
  scrollTrigger: {
    trigger: ".testimonial-grid-container",
    start: "top bottom",
    end: "top center",
    scrub: 5,
  },
  opacity: 0,
  scale: 0,
});
