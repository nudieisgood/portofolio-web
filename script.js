const menuBtn = document.querySelector(".hamber-btn");
const menu = document.querySelector(".hamber-menu");
const menuContainer = document.querySelector(".hamber-header-links");
const btns = [...menuContainer.querySelectorAll("a")];
const header = document.querySelector("header");
const sensor = document.querySelector("#sensor");
const headerHeight = header.getBoundingClientRect().height;

document.body.addEventListener("click", (e) => {
  const hamberBtn = e.target.closest(".hamber-btn");
  if (!hamberBtn) {
    menu.classList.remove("show-menu");
    menuBtn.classList.remove("open");
  }

  if (hamberBtn) {
    menuBtn.classList.toggle("open");
    menu.classList.toggle("show-menu");
    document.body.classList.add("sticky");
  }
});

///////////////////////////
// Sticky nav
///////////////////////////
// const profileSection = document.querySelector("#profile");
const profileSection = document.querySelector("header");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
      menuBtn.classList.remove("open");
      menu.classList.remove("show-menu");
    }
  },
  {
    //In the viewport(null = viewport)
    root: null,
    //observe el is not in the root (viewport)
    threshold: 0,
    rootMargin: `${headerHeight}px`,
  }
);
obs.observe(sensor);

const resumeLinks = [
  ...document.querySelector(".resumes-tabs").querySelectorAll("a"),
];

window.addEventListener("hashchange", () => {
  resumeLinks.forEach((link) => {
    const currentHash = window.location.hash.slice(1);

    if (
      link.classList.contains(currentHash) &&
      !link.classList.contains("current")
    ) {
      link.classList.add("current");
    }
    if (
      !link.classList.contains(currentHash) &&
      link.classList.contains("current")
    ) {
      link.classList.remove("current");
    }
  });
});

const pageOne = document.querySelector(".one");
const pageOneLink = document.querySelector(".page-1");
const pageTwo = document.querySelector(".two");
const pageTwoLink = document.querySelector(".page-2");
const pageThree = document.querySelector(".three");
const pageThreeLink = document.querySelector(".page-3");

const resumePage = document.querySelector(".resume-content");

const pageOneHeight = pageOne.getBoundingClientRect().height;
const pageTwoHeight = pageTwo.getBoundingClientRect().height;
const pageThreeHeight = pageThree.getBoundingClientRect().height;

const obsResume = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting) {
      console.log("interact resume");
    }
    if (!ent.isIntersecting) {
      console.log("not interact resume");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "0px",
  }
);
obsResume.observe(resumePage);

// const obsResumePageOne = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     if (ent.isIntersecting) {
//     }
//     if (!ent.isIntersecting) {
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: "0px",
//   }
// );
// obsResumePageOne.observe(pageOne);

// const obsResumePageTwo = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     if (ent.isIntersecting) {
//     }
//     if (!ent.isIntersecting) {
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: "0px",
//   }
// );
// obsResumePageTwo.observe(pageTwo);

// const obsResumePageThree = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     if (ent.isIntersecting) {
//     }
//     if (!ent.isIntersecting) {
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: "0px",
//   }
// );
// obsResumePageThree.observe(pageThree);

const obsResumePageOne = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting) {
      pageOneLink.classList.add("current");
    }
    if (!ent.isIntersecting) {
      pageOneLink.classList.remove("current");
    }
  },
  {
    root: null,
    threshold: 0.5,
    // rootMargin: `-${pageOneHeight / 2}px`,
  }
);
obsResumePageOne.observe(pageOne);

const obsResumePageTwo = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting) {
      pageTwoLink.classList.add("current");
    }
    if (!ent.isIntersecting) {
      pageTwoLink.classList.remove("current");
    }
  },
  {
    root: null,
    threshold: 0.5,
    // rootMargin: `-${pageTwoHeight / 2}px`,
  }
);
obsResumePageTwo.observe(pageTwo);

const obsResumePageThree = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting) {
      pageThreeLink.classList.add("current");
    }
    if (!ent.isIntersecting) {
      pageThreeLink.classList.remove("current");
    }
  },
  {
    root: null,
    threshold: 0.5,
    // rootMargin: `-${pageThreeHeight / 2}px`,
  }
);
obsResumePageThree.observe(pageThree);

const picDiv = document.querySelector(".pic");
const picDivHeight = picDiv.getBoundingClientRect().height;

const obsPic = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting) {
      picDiv.classList.add("big-size");
    }
    if (!ent.isIntersecting) {
      picDiv.classList.remove("big-size");
    }
  },
  {
    root: null,
    threshold: [0.2, 0.5],
    // rootMargin: `-100px`,
  }
);

obsPic.observe(picDiv);

const projectPage = document.querySelector(".section-content-project");
const project1 = document.querySelector(".project-1");
const project2 = document.querySelector(".project-2");
const project3 = document.querySelector(".project-3");

const obsProjectPage = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting) {
      if (project2.classList.contains("showProject")) {
        project3.classList.add("showProject");
      }
      if (project1.classList.contains("showProject")) {
        project2.classList.add("showProject");
      }
      project1.classList.add("showProject");
    }
    if (!ent.isIntersecting) {
      project1.classList.remove("showProject");
      project2.classList.remove("showProject");
      project3.classList.remove("showProject");
    }
  },
  {
    root: null,
    threshold: [0, 0.25, 0.5, 0.6, 0.75, 1],
    // rootMargin: `100px`,
  }
);

obsProjectPage.observe(projectPage);

const obsProjectTwo = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting) {
      if (project2.classList.contains("showProject")) {
        project3.classList.add("showProject");
      }
    }
    if (!ent.isIntersecting) {
    }
  },
  {
    root: null,
    threshold: [0.6],
    // rootMargin: `100px`,
  }
);

obsProjectTwo.observe(project2);

//modal

const modal = document.querySelector("#myModal");

const openModalBtns = [...document.querySelectorAll(".openModalBtn")];

var closeBtn = document.querySelector(".close-modal-btn");

openModalBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("openModal");
    document.body.style.overflowY = "hidden";
  })
);

closeBtn.addEventListener("click", () => {
  document.body.classList.remove("openModal");
  document.body.style.overflowY = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    document.body.classList.remove("openModal");
    document.body.style.overflowY = "auto";
  }
});
