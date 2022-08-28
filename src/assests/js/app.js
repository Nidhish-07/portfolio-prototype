import gsap from "gsap";

const bar = document.querySelector(".loading__bar--inner");
const counter = document.querySelector(".loading__counter--number");
let c = 0;

let barInterval = setInterval(() => {
  bar.style.width = c + "%";
  counter.innerText = c + "%";
  c++;

  if (c == 101) {
    clearInterval(barInterval);
    gsap.to(".loading__counter,.loading__text", {
      duration: 1,
      opacity: 0,
    });

    gsap.to(".loading__bar", {
      duration: 5,
      rotate: "90deg",
      left: "1000%",
    });
    gsap.to(".loading__box", {
      duration: 1,
      height: "500px",
      borderRadius: "50%",
    });

    gsap.to(".loading__svg", {
      opacity: 1,
      duration: 5,
      background: "transparent",
    });

    gsap.to(".loading__box", {
      border: "none",
      delay: 2,
      duration: 1,
    });

    gsap.to(".loading", {
      delay: 2,
      duration: 1,
      background: "transparent",
      ease:"circ.out"
    });
  }
}, 25);
