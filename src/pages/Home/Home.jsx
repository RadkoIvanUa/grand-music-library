import { useLayoutEffect } from "react";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Subscriptions from "../../components/Subscriptions/Subscriptions";
import Presentation from "../../components/Presentation/Presentation";
import { gsapEffect } from "../../helpers/gsapEffect";
import FeaturedPlaylists from "../../components/FeaturedPlaylists/FeaturedPlaylists";

export default function Home() {
  useLayoutEffect(() => {
    gsapEffect();
  }, []);

  return (
    <>
      <Hero />
      <Presentation />
      <HowItWorks />
      <FeaturedPlaylists />
      <Subscriptions />
    </>
  );
}
