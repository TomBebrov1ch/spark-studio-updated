import { useEffect } from "react";
import { Meta } from "@shared/index";
import { Header } from "@widgets/Header/ui";
import { Footer } from "@widgets/Footer/ui";
import { Menu } from "@features/index";
import { PortfolioInfo } from "@shared/lib/data/portfolioContent";
import { Fade, Slide } from "react-awesome-reveal";
import { ScrollButton } from "@shared/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

import "./styles.scss";

export const PortfolioDetails: React.FC<PortfolioInfo> = (props) => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Meta
        title={props.metaTitle}
        ogTitle={props.metaTitle}
        description={props.metaDescription}
        ogDescription={props.metaDescription}
      />
      <Header />
      <Menu />
      <main
        className={`w-full !min-h-[80vh] flex flex-col items-center mb-16 mt-10 ${props.backgroundImage} max-[440px]:!min-h-[70vh]`}
        id="upper"
      >
        {/* Main */}
        <section className="flex flex-col items-center mt-20">
          <Slide direction="left">
            <h1 className="text-white text-center">{props.title}</h1>
          </Slide>
          <Slide direction="right">
            <span className="text-md text-white font-[Montserrat]">
              {props.subTitle}
            </span>
          </Slide>
          <Slide direction="left" className="flex justify-center">
            <p className="paragraph !text-white text-center w-[50%] mt-4 max-[440px]:w-[90%]">
              {props.description}
            </p>
          </Slide>
          <img
            src={props.mockUpImage}
            className="mockup_image "
            alt={props.title}
          />
        </section>
      </main>
      {/* Task */}
      <section className="w-[86.6%] m-auto flex items-start justify-between mt-96 portfolio-content max-[440px]:!mt-36 min-[2560px]:!mt-[560px]">
        <Slide direction="left">
          <h2 className="text-6xl text-custom-black max-[440px]:!mt-12">
            {t('portfolioProject')} <span className="orange">{t('portfolioTask')}</span>{" "}
          </h2>
        </Slide>
        <div className="inline-flex flex-col items-start w-[40%] slide">
          <Slide direction="right">
            <p className="paragraph w-[100%]">{props.taskDescription}</p>
            <button
              className="project_btn hoverable"
              onClick={() => window.open(`${props.linkProject}`)}
            >
              {t('link')}
            </button>
          </Slide>
        </div>
      </section>
      {/* Adaptation */}
      <section className="w-[86.6%] m-auto flex items-start justify-between mt-40 portfolio-content">
        <Slide direction="left">
          <img
            src={props.phoneMockup}
            className="phone_mockup"
            alt={props.title}
          />
        </Slide>
        <div className="flex flex-col items-start w-[50%] max-[440px]:w-full mt-10">
          <Slide direction="right" cascade damping={0.2} className="w-full">
            <h3 className="text-6xl text-custom-black max-[440px]:w-full ">
              {t('portfolioAdaptive')} <span className="orange"> {t('portfolioProd')}</span>{" "}
            </h3>
            <p className="paragraph mt-5 w-[100%]">
              {props.adaptiveDescription[0].text}
              <br />
              <br />
            </p>
          </Slide>
        </div>
      </section>
      <section className="w-[100%] m-auto flex items-start justify-between mt-10 portfolio-content">
        <img
          src={props.mainImage}
          className="main_mockup w-full"
          alt={props.title}
        />
      </section>
      {/* Tech Stack */}
      <section className="w-[86.6%] m-auto flex items-center justify-center flex-col mt-20 portfolio-content">
        <Slide direction="left">
          <h2 className="text-6xl text-custom-black max-[440px]:text-4xl">
            {t('portfolioTech')}<span className="orange"> {t('portfolioStack')}</span>{" "}
          </h2>
        </Slide>
        <div className="w-[35%] flex justify-between items-start mt-10 mb-20 max-[440px]:w-full">
          <Fade cascade damping={0.2}>
            {props.options.map((listItem) => (
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  className="text-8xl text-custom-orange degree max-[440px]:text-6xl"
                  icon={listItem.icon}
                />
                <span className="font-[Montserrat] text-2xl mt-4">
                  {listItem.list}
                </span>
              </div>
            ))}
          </Fade>
        </div>
      </section>
      <section className="w-[100%] m-auto flex items-start justify-between  portfolio-content">
        <img
          src={props.mainImage_2}
          className="main_mockup w-full"
          alt={props.title}
        />
      </section>
      <section className="w-[100%] m-auto flex items-start justify-between portfolio-content mt-10">
        <img
          src={props.mainImage_3}
          className="main_mockup w-full"
          alt={props.title}
        />
      </section>
      <div className="flex justify-center mt-10">
        <ScrollButton to={"upper"} text={t('upper')} marginTop="mt-0" />
      </div>
      <Footer />
    </div>
  );
};
