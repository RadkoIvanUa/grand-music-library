import { useLayoutEffect } from "react";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Subscriptions from "../../components/Subscriptions/Subscriptions";
import { gsap } from "gsap";

export default function Home() {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".hero",

      { y: 0 },
      {
        y: "-100%",
        duration: 2,
        scrollTrigger: {
          trigger: ".gsap-how-title",
          scrub: true,
          // start: "top center",
          // toggleActions: "restart none none none",
        },
      }
    );

    gsap.fromTo(
      ".title",

      { x: -540, color: "transparent" },
      { x: 0, color: "#fff", duration: 1 }
    );

    gsap.fromTo(
      ".gsap-how-title",

      { x: -550, color: "transparent" },
      {
        x: 0,
        color: "#fff",
        duration: 2,
        scrollTrigger: {
          trigger: ".gsap-how-title",
          scrub: true,
          // start: "top center",
          // toggleActions: "restart none none none",
        },
      }
    );

    gsap.fromTo(
      ".gsap-how",
      { x: 550, y: 550, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".gsap-how-title",
          scrub: true,
          // start: "top center",
          // toggleActions: "restart none none none",
        },
      }
    );

    gsap.fromTo(
      ".gsap-subscriptions-title",

      {
        x: -550,
        color: "transparent",
      },
      {
        x: 0,
        color: "#fff",
        duration: 1,
        scrollTrigger: {
          trigger: ".gsap-subscriptions-title",
          scrub: true,
          // start: "top center",

          // toggleActions: "restart none none none",
        },
      }
    );

    gsap.fromTo(
      ".gsap-subscriptions",
      { y: 550 },
      {
        y: 0,

        duration: 2,
        scrollTrigger: {
          trigger: ".gsap-subscriptions-title",
          // start: "top center",
          scrub: true,
          // toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <Hero />
      <HowItWorks />
      <Subscriptions />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
