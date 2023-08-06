import { useSwiper } from "swiper/react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Button } from "@mui/material";

export default function NavigationBtn() {
  const swiper = useSwiper();
  return (
    <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
      <Button
        style={{
          backgroundColor: "white",
          width: 50,
          height: 50,
          borderRadius: 20,
        }}
        onClick={() => swiper.slidePrev()}
      >
        <GrPrevious />
      </Button>
      <Button
        style={{
          backgroundColor: "white",
          width: 50,
          height: 50,
          borderRadius: 20,
        }}
        onClick={() => swiper.slideNext()}
      >
        <GrNext />
      </Button>
    </div>
  );
}
