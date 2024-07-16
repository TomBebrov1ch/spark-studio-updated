import { CountElement } from "@shared/ui/countElement";
import { useTranslation } from "react-i18next";

import about from "@assets/additional/about.svg";

export const AboutCompanyFeature = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="mobile flex flex-col items-center">
        <h3 className="text-center">
          {t('resultsOur')} <span className="orange">{t('resultsSimp')} </span>
        </h3>
        <p className="paragraph mt-4">
          Идейные соображения высшего порядка, а также консультация с широким
          активом позволяет оценить значение дальнейших направлений развития. Не
          следует, однако забывать, что реализация намеченных плановых заданий
          представляет собой интересный эксперимент проверки дальнейших
          направлений развития.
        </p>
        <CountElement
          end={21}
          direction={"left"}
          duration={4}
          color="orange"
          text="Реализованный проект"
          marginTop="mt-12"
        />
        <CountElement
          end={24}
          direction={"right"}
          duration={3}
          color="orange"
          text="Часа на связи"
          marginTop="mt-12"
        />
        <CountElement
          end={12}
          direction={"left"}
          duration={3}
          color="orange"
          text="Логотипов нарисованно"
          marginTop="mt-12"
        />
        <CountElement
          end={33}
          direction={"left"}
          duration={4}
          color="orange"
          text="Довольных клиента"
          marginTop="mt-12"
        />
      </section>
      <section className="pc w-full flex justify-between items-start mt-20">
        <div className="flex flex-col items-start">
          <h3 className="text-left w-[60%]">
            {t('resultsOur')} <span className="orange">{t('resultsSimp')} </span>
          </h3>
          <p className="paragraph mt-4 w-[60%]">
            {t('resultsParagraph')}
          </p>
        </div>
        <img src={about} alt="about" className="w-1/3" />
      </section>
      <section className="pc w-full flex justify-between items-start mt-20">
        <div className="w-full flex justify-between items-center">
          <span className="flex flex-col items-center justify-center">
            <CountElement
              end={21}
              direction={"left"}
              duration={4}
              color="orange"
              text={t('project')}
              marginTop="mt-12"
            />
          </span>
          <span className="flex flex-col">
            <CountElement
              end={24}
              direction={"left"}
              duration={4}
              color="orange"
              text={t('hours')}
              marginTop="mt-12"
            />
          </span>
          <span className="flex flex-col">
            <CountElement
              end={12}
              direction={"left"}
              duration={4}
              color="orange"
              text={t('logo')}
              marginTop="mt-12"
            />
          </span>
          <span className="flex flex-col">
            <CountElement
              end={33}
              direction={"left"}
              duration={4}
              color="orange"
              text={t('clients')}
              marginTop="mt-12"
            />
          </span>
        </div>
      </section>
    </>
  );
};
