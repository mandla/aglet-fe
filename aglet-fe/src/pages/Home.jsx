import React from "react";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "../component/Slider";

const slides_content = [
  {
    img: require("../assets/home/Thumbnails/download.jpg"),
    vid: require("../assets/home/Videos/1_Grow_up_Stage_Modul_video.mp4"),
  },
  {
    img: require("../assets/home/Thumbnails/download-1.jpg"),
    vid: require("../assets/home/Videos/IAA_Makingof_8Sec_L.mp4"),
  },
  {
    img: require("../assets/home/Thumbnails/download-2.jpg"),
    vid: require("../assets/home/Videos/TimeToLookUpAgain_8Sec_L.mp4"),
  },
  {
    img: require("../assets/home/Thumbnails/download-3.jpg"),
    vid: require("../assets/home/Videos/EasyRider_8Sec_L.mp4"),
  },
  {
    img: require("../assets/home/Thumbnails/download-4.jpg"),
    vid: require("../assets/home/Videos/katjes_stage-1.mp4"),
  },
  {
    img: require("../assets/home/Thumbnails/download-5.jpg"),
    vid: require("../assets/home/Videos/risk_1.mp4"),
  },
  {
    img: require("../assets/home/Thumbnails/download-6.jpg"),
    vid: require("../assets/home/Videos/Mercedes_Leon_stage.mp4"),
  },
  {
    img: require("../assets/home/Thumbnails/download-7.jpg"),
    vid: require("../assets/home/Videos/stage_xmas.mp4"),
  },
  {
    img: require("../assets/home/Thumbnails/download-8.jpg"),
    vid: require("../assets/home/Videos/F1_stage-1.mp4"),
  },
  {
    img: require("../assets/home/Thumbnails/download-9.jpg"),
    vid: require("../assets/home/Videos/bmw_stage_3.mp4"),
  },
  {
    img: require("../assets/home/Thumbnails/download-10.jpg"),
    vid: require("../assets/home/Videos/eq_stage_video.mp4"),
  },
  {
    img: require("../assets/home/Thumbnails/download-11.jpg"),
    vid: require("../assets/home/Videos/stage_g_class_dna.mp4"),
  },
];

export default function Home() {
  const [active_hovered, set_is_hovered] = React.useState(null);

  const handle_on_hover = (i) => {
    set_is_hovered(i);
  };

  return (
    <>
      <div className="slider-container">
        <Swiper
          scrollbar={{ draggable: true, hide: false, dragSize: "100px" }}
          modules={[Scrollbar]}
          slidesPerView={6}
        >
          {slides_content.map((x, index) => (
            <SwiperSlide key={index}>
              <Slider
                active_hovered={active_hovered}
                card_index={index}
                handle_hover_end={() => {
                  set_is_hovered(null);
                }}
                set_on_hover={() => handle_on_hover(index)}
                x={x}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="card-list">
        {slides_content.map((x, index) => (
          <Slider
            key={index}
            active_hovered={active_hovered}
            card_index={index}
            handle_hover_end={() => {
              set_is_hovered(null);
            }}
            set_on_hover={() => handle_on_hover(index)}
            x={x}
          />
        ))}
      </div>
    </>
  );
}
