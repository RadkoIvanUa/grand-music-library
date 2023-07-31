import { Swiper, SwiperSlide } from "swiper/react";
import create from "../../img/howItWorks/create.svg";
import one from "../../img/howItWorks/1.svg";
import two from "../../img/howItWorks/2.svg";
import three from "../../img/howItWorks/3.svg";
import { PiMusicNotesLight } from "react-icons/pi";
import { CgPatreon } from "react-icons/cg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { EffectCards, Mousewheel, Navigation } from "swiper/modules";
import { StyledContainer } from "../Container/StyledContainer";
import {
  StyledSection,
  StyledSwiperNumber,
  SwiperText,
} from "./StyledHowItWorks";

export default function HowItWorks() {
  return (
    <StyledSection>
      <StyledContainer>
        <h2 className="gsap-how-title">How it works</h2>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          navigation={true}
          modules={[EffectCards, Navigation, Mousewheel]}
          className="gsap-how"
        >
          <SwiperSlide>
            <StyledSwiperNumber src={one} width={50} alt="" />
            <SwiperText>
              <h3> Subscribe for my Patreon</h3>
              <p>
                I allow my patrons to use these music tracks in their videos or
                other projects. Every month I publish new music tracks
              </p>
            </SwiperText>
            <CgPatreon size={300} />
          </SwiperSlide>
          <SwiperSlide>
            <StyledSwiperNumber src={two} width={50} alt="" />
            <SwiperText>
              <h3>Browse Music</h3>
              <p>Browse high-quality music, with unlimited downloads.</p>
            </SwiperText>
            <PiMusicNotesLight size={300} />
          </SwiperSlide>
          <SwiperSlide>
            <StyledSwiperNumber src={three} width={50} alt="" />
            <SwiperText>
              <h3>Create</h3>
              <p>
                Use the music in all your creations, as long as your
                subscription is active. If you cancel your subscription, your
                previous content is still covered.
              </p>
            </SwiperText>
            <img src={create} width={300} alt="" />
          </SwiperSlide>
        </Swiper>
      </StyledContainer>
    </StyledSection>
  );
}
