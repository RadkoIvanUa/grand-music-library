// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import NavigationBtn from "../NavigationBtn/NavigationBtn";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../HowItWorks/swiper.css";

// import required modules
import { FreeMode } from "swiper/modules";
import { StyledSection } from "../HowItWorks/StyledHowItWorks";
import { StyledContainer } from "../Container/StyledContainer";

export default function FeaturedPlaylists() {
  return (
    <StyledSection>
      <StyledContainer>
        <h2 className="gsap-playlists-title">Featured Playlist</h2>
        <div style={{ position: "relative" }}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            navigation={true}
            style={{ height: "100%" }}
            grabCursor={true}
            loop="true"
            className="gsap-playlists"
          >
            <SwiperSlide
              style={{
                backgroundImage: `url("https://i.imgur.com/oQs3mlT.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: 300,
              }}
            >
              <h3>New Track</h3>
            </SwiperSlide>
            <SwiperSlide
              style={{
                backgroundImage: `url("https://i.imgur.com/oQs3mlT.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: 300,
              }}
            >
              <h3>Cinematic</h3>
            </SwiperSlide>
            <SwiperSlide
              style={{
                backgroundImage: `url("https://i.imgur.com/oQs3mlT.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: 300,
              }}
            >
              <h3>Piano</h3>
            </SwiperSlide>
            <SwiperSlide
              style={{
                backgroundImage: `url("https://i.imgur.com/oQs3mlT.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: 300,
              }}
            >
              <h3>Corporate</h3>
            </SwiperSlide>
            <SwiperSlide
              style={{
                backgroundImage: `url("https://i.imgur.com/oQs3mlT.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: 300,
              }}
            >
              <h3>Epic</h3>
            </SwiperSlide>
            <SwiperSlide
              style={{
                backgroundImage: `url("https://i.imgur.com/oQs3mlT.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: 300,
              }}
            >
              <h3>Holiday</h3>
            </SwiperSlide>
            <SwiperSlide
              style={{
                backgroundImage: `url("https://i.imgur.com/oQs3mlT.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: 300,
              }}
            >
              <h3>Pop</h3>
            </SwiperSlide>

            <NavigationBtn />
          </Swiper>
        </div>
      </StyledContainer>
    </StyledSection>
  );
}
