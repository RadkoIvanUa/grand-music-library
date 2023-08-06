import { useLayoutEffect } from "react";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Subscriptions from "../../components/Subscriptions/Subscriptions";
import Presentation from "../../components/Presentation/Presentation";
import { gsapEffect } from "../../helpers/gsapEffect";

export default function Home() {
  useLayoutEffect(() => {
    gsapEffect();
  }, []);

  return (
    <>
      <Hero />
      <Presentation />
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
