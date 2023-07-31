import styled from "@emotion/styled";

import backgroundImg from "../../img/heroBackground.jpg";

export const StyledHero = styled.div`
  background-image: radial-gradient(
      80.99% 71.93% at 74.58% 0%,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${backgroundImg});
  height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 150px;
`;

export const StyledHeroTitle = styled.div({
  width: 550,
  paddingTop: 80,
  h1: {
    fontSize: 60,
    lineHeight: "115%",
    letterSpacing: -2,
  },
});

export const StyledHeroBtn = styled.button({
  a: {
    padding: "0.6em 1.2em",
    color: "#fff",
  },
});
