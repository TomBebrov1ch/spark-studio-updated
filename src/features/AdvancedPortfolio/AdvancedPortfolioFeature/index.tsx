import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Parallax, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./styles.scss";

export const AdvancedPortfolioFeature = () => {
  const { t } = useTranslation();
  const [bgImage, setBgImage] = useState("one");
  const navigate = useNavigate();

  const backgrounds: { [key: number]: string } = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
  };

  const slidesData = [
    {
      id: 0,
      title: "AS & Partners",
      description: `${t('develop')}`,
      navigation: "as_partners",
    },
    {
      id: 1,
      title: "Cargo Express PV",
      description: `${t('develop')}`,
      navigation: "cargo",
    },
    {
      id: 2,
      title: "Sharbakty Bidai",
      description: `${t('develop')}`,
      navigation: "sharbakty",
    },
    {
      id: 3,
      title: "Special Solutions",
      description: `${t('develop')}`,
      navigation: "special_solutions",
    },
    {
      id: 4,
      title: "AGRO PARTNERS PV",
      description: `${t('develop')}`,
      navigation: "agro",
    },
    {
      id: 5,
      title: "China Drive",
      description: `${t('develop')}`,
      navigation: "china_drive",
    },
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    const newBgImage = backgrounds[swiper.activeIndex];
    setBgImage(newBgImage);
  };

  return (
    <>
      <Slide direction="left">
        <h4 className="w-[90%] mt-20 m-auto text-center">
          {t('portfolioOur')} <span className="orange">{t('portfolioSecond')}</span>
        </h4>
      </Slide>
      <Slide direction="right">
        <p className="mt-4 w-[90%] m-auto min-[1024px]:text-center min-[1024px]:w-[40%]">
          {t('secondPortfolioParagraph')}
        </p>
      </Slide>
      <Slide direction="left" className="mt-10">
        {/* <PortfolioSwitch /> */}
      </Slide>
      <Swiper
        modules={[Parallax, Autoplay, Navigation]}
        parallax
        spaceBetween={50}
        speed={600}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        centeredSlides={true}
        onSlideChange={handleSlideChange}
        className="parallax-slider mt-12 w-100"
        style={{
          "--swiper-pagination-color": "#FF5722",
          "--swiper-navigation-color": "#FF5722",
        }}
      >
        <div
          slot="container-start"
          data-swiper-parallax="0%"
          className={`${bgImage}`}
        ></div>
        {slidesData.map((slide) => (
          <SwiperSlide
            key={slide.id}
            onClick={() => navigate(`${slide.navigation}`)}
            className="parallax-slider__slide hoverable"
          >
            <div>
              <Slide
                direction="left"
                className="w-full flex flex-col items-center text-center justify-center"
                delay={150}
              >
                <span className="parallax-slider__slide__text">
                  {slide.title}
                </span>
              </Slide>
              <Slide
                direction="right"
                className="w-full flex flex-col items-center text-center justify-center"
                delay={250}
              >
                <span className="parallax-slider__slide__sub-text">
                  {slide.description}
                </span>
              </Slide>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
