/* eslint-disable react/no-unescaped-entities */
import { StyledContainer } from "../Container/StyledContainer";
import { StyledSection } from "../HowItWorks/StyledHowItWorks";
import { StyledPresentation } from "./StyledPresentation";

export default function Presentation() {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledPresentation>
          <h2 className="gsap-presentation-title">
            Looking for no copyright background music for your project?
          </h2>
          <h3 className="gsap-presentation-subtitle">
            Here you can find everything you need!
          </h3>
          <p className="gsap-presenation-text">
            GrandMusicLibrary it's high-quality no copyright music for content
            creators. As a bonus You can use all my music for your Instagram,
            Facebook stories, Reels, YouTube Shorts, and Tiktok videos for FREE.
            <br />
            (Look for "Ivan Radko" in the music library on these services)
          </p>
        </StyledPresentation>
      </StyledContainer>
    </StyledSection>
  );
}
