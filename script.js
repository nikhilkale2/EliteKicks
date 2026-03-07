// Initialize Lenis
const lenis = new Lenis();
// For responsiveness
let mm = gsap.matchMedia();

// Function of lenis
function lenisScrolling() {
  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}
lenisScrolling();

// GSAP animation function
function bigScreenAnimation() {
  mm.add("(min-width: 1400px)", () => {
    let hero = gsap.timeline();
    hero.from(
      "#Hero-info",
      {
        x: -40,
        opacity: 0,
        duration: 0.8,
      },
      "hero",
    );
    hero.from(
      "#Hero-img",
      {
        x: 40,
        opacity: 0,
        duration: 0.8,
      },
      "hero",
    );

    // About section
    let about = gsap.timeline({
      scrollTrigger: {
        trigger: "#About",
        scroller: "body",
        start: "top 43%",
        end: "top 30%",
        scrub: true,
      },
    });

    about.from(
      "#about-box",
      {
        x: -20,
        duration: 0.5,
        opacity: 0,
      },
      "about",
    );
    about.from(
      "#about-img",
      {
        x: 20,
        opacity: 0,
        duration: 0.4,
      },
      "about",
    );

    // Popular products section

    let Popular = gsap.timeline();
    Popular.from(".Popular-item", {
      y: -30,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#popular",
        scroller: "body",
        start: "top 50%",
        end: "top 30%",
        scrub: true,
      },
    });

    // Advertisement section
    let ads = gsap.timeline({
      scrollTrigger: {
        trigger: "#ADS",
        scroller: "body",
        start: "top 50%",
        end: "top 30%",
        scrub: true,
      },
    });
    ads.from(
      "#Ads-info",
      {
        x: 20,
        duration: 0.5,
        opacity: 0,
      },
      "ads",
    );
    ads.from(
      "#Ads-img",
      {
        x: -20,
        duration: 0.5,
        opacity: 0,
      },
      "ads",
    );

    // Collection section

    let Collection = gsap.timeline();

    Collection.from(".coll-items", {
      y: -40,
      duration: 0.9,
      opacity: 0,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".coll-items",
        scroller: "body",
        start: "top 50%",
        end: "top 20%",
        scrub: true,
      },
    });
    Collection.from(".coll-item2", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".coll-item2",
        scroller: "body",
        start: "top 55%",
        end: "top 25%",
        scrub: true,
      },
    });

    // Shoes1.html page

    let Shoes1 = gsap.timeline();
    Shoes1.from(
      ".shoes-hero",
      {
        x: -30,
        opacity: 0,
        duration: 0.8,
      },
      "Shoes-hero",
    );
    Shoes1.from(
      ".shoes-info",
      {
        x: 30,
        duration: 0.8,
        opacity: 0,
      },
      "Shoes-hero",
    );

    // Shoes1.html product details

    let shoesp = gsap.timeline({
      scrollTrigger: {
        trigger: "#Shoesdetails1",
        scroller: "body",
        start: "top 56%",
        end: "top 29%",
        scrub: true,
      },
    });
    // First row of shoes product details
    shoesp.from(
      ".shoes-feature1",
      {
        x: -30,
        opacity: 0,
        duration: 0.8,
      },
      "ab",
    );
    shoesp.from(
      ".shoes-featureimg1",
      {
        x: 30,
        opacity: 0,
        duration: 0.8,
      },
      "ab",
    );

    // Second row of shoes product details
    let shoespd = gsap.timeline({
      scrollTrigger: {
        trigger: "#Shoesdetails2",
        scroller: "body",
        start: "top 56%",
        end: "top 29%",
        scrub: true,
      },
    });
    shoespd.from(
      ".shoes-featureimg2",
      {
        x: -30,
        opacity: 0,
        duration: 0.8,
      },
      "feature",
    );
    shoespd.from(
      ".shoes-feature2",
      {
        x: 30,
        duration: 0.8,
        opacity: 0,
      },
      "feature",
    );
  });
}
bigScreenAnimation();

// Navbar functionality
let NavMenu = document.querySelector("#NavMenu");
let NavLink = document.querySelector("#NavLink");

NavMenu.addEventListener("click", () => {
  NavLink.classList.toggle("d-none");
});

// Navlinks scrolling
function navLinksScrolling() {
  let NavLinks = document.querySelectorAll(".NavLinks");
  NavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.dataset.target;

      lenis.scrollTo(`#${id}`);
    });
  });
}
navLinksScrolling();

// Scrollbtn
function scrollButton() {
  let scrollBtn = document.querySelector("#scrollBtn");

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 500) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", (e) => {
    lenis.scrollTo(0);
  });
}
scrollButton();

// Tooltip code
function toolTip() {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]'),
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}
toolTip();

// Theme functionality

function themefunctionality() {
  let ThemeBtn = document.querySelector("#ThemeBtn");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  ThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}
themefunctionality();

// Increment and decrement value option

let Increment = document.querySelector("#Increment");
let Decrement = document.querySelector("#Decrement");
let Count = document.querySelector("#Count");
let countValue = 0;

Increment.addEventListener("click", () => {
  countValue++;
  Count.textContent = countValue;
});

Decrement.addEventListener("click", () => {
  if (countValue > 0) {
    countValue--;
  }
  Count.textContent = countValue;
});

// Login form message modal

let UserLoginForm = document.querySelector("#UserLoginForm");
let messageModal = document.querySelector("#messageModal");
let loginformmodal = document.querySelector("#loginformModal");

UserLoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let loginModal = bootstrap.Modal.getInstance(loginformmodal);

  if (UserLoginForm) {
    loginModal.hide();
    document.querySelector("#UserName").value = "";
    document.querySelector("#Password").value = "";
  }

  if (messageModal) {
    messageModal.classList.remove("d-none");
  }

  setTimeout(() => {
    messageModal.classList.add("d-none");
  }, 1500);
});

// Sign up message modal

let MsgModal = document.querySelector("#signupMsgModal");
let signupformModal = document.querySelector("#signupformModal");
let signupForm = document.querySelector("#signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let signupModal = bootstrap.Modal.getInstance(signupformModal);

  if (signupformModal) {
    signupModal.hide();
    document.querySelector("#inputFirstName4").value = "";
    document.querySelector("#inputLastName4").value = "";
    document.querySelector("#inputEmail4").value = "";
    document.querySelector("#inputPassword4").value = "";
    document.querySelector("#inputCity").value = "";
    document.querySelector("#inputState").value = "";
    document.querySelector("#gridCheck").value = "";
    document.querySelector("#inputGender").value = "";
  }
  if (MsgModal) {
    MsgModal.classList.remove("d-none");
  }
  setTimeout(() => {
    MsgModal.classList.add("d-none");
  }, 1500);
});

// Add to cart Message modal
let AddtoCartMsgModal = document.querySelector("#AddToCartMsgModal");
let AddToCartBtn = document.querySelector("#AddToCartBtn");
let AddCartMsg = document.querySelector("#AddCartMsg");

AddToCartBtn.addEventListener("click", (e) => {
  if (countValue <= 0) {
    return;
  }
  AddtoCartMsgModal.classList.remove("d-none");

  AddCartMsg.innerHTML = `${countValue} Item Add into Cart`;
  // countValue = 0;
  Count.textContent = countValue;

  setTimeout(() => {
    AddtoCartMsgModal.classList.add("d-none");
  }, 1500);
});

console.log(countValue);

// Buy Now button message modal
// let BuyformModal = document.querySelector("#BuyformModal");
// let BuyNowBtn = document.querySelector("#BuyNowBtn");
// let closeBuyform = document.querySelector("#closeBuyform");
// let BuyproductsForm = document.querySelector("#BuyproductsForm");
// let BuyMsgModal = document.querySelector("#BuyMsgModal");

// BuyNowBtn.addEventListener("click", (e) => {
//   if (countValue <= 0) {
//     return;
//   }
//   BuyformModal.classList.remove("d-none");
//   //countValue = 0;
//   Count.textContent = countValue;
// });

// closeBuyform.addEventListener("click", (e) => {
//   BuyformModal.classList.add("d-none");
// });

// BuyproductsForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (BuyMsgModal) {
//     BuyMsgModal.classList.remove("d-none");
//     BuyformModal.classList.add("d-none");
//   }

//   setTimeout(() => {
//     BuyMsgModal.classList.add("d-none");
//   }, 1500);
// });
