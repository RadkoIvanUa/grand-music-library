import { gsap } from "gsap";

let tl = gsap.timeline();

export const gsapEffect = () => {
  gsap.fromTo(
    ".title",

    { x: -340, opacity: 0 },
    { x: 0, opacity: 1, duration: 2 }
  );

  gsap.fromTo(
    ".gsap-how-title",

    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".gsap-how-title",
      },
    }
  );
  gsap.fromTo(
    ".gsap-how",

    { y: 50 },
    {
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".gsap-how",
      },
    }
  );
  gsap.fromTo(
    ".gsap-subscriptions-title",

    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".gsap-subscriptions-title",
      },
    }
  );
  gsap.fromTo(
    ".gsap-subscriptions",

    { y: 50 },
    {
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".gsap-subscriptions",
      },
    }
  );
  tl.fromTo(
    ".gsap-presentation-title",
    {
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: ".gsap-presentation-title",
      },
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
    }
  );
  tl.fromTo(
    ".gsap-presentation-subtitle",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
    }
  );
  gsap.fromTo(
    ".gsap-presenation-text",

    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".gsap-presenation-text",
      },
    }
  );
};
