import { Slide } from "react-awesome-reveal";
import { Button } from "@shared/ui/button";
import { PriceTab } from "@entities/PriceTab/ui";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import FormFeature from "@features/Home/ui/FormFeature";

import seo from "@assets/images/assets/seo.svg";

export const SeoFeature = () => {
  return (
    <>
      <main className="mobile flex flex-col items-center justify-center">
        <Slide direction="left" delay={100}>
          <h1 className="text-center">
            SEO <span className="orange">Оптимизация</span>
          </h1>
        </Slide>
        <Breadcrumbs
          sx={{
            marginTop: "clamp(8px,3.73824vw,32px)",
          }}
        >
          <Link to="/home">Главная</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/services/seo" className="orange">
            SEO Оптимизация
          </Link>
        </Breadcrumbs>
        <Slide direction="right" delay={200}>
          <p className="mt-8 w-[100%]">
            Команда "Spark Studio" - это творческая мастерская, где воплощаются
            самые смелые идеи в веб-разработке. Мы специализируемся на создании
            уникальных и инновационных веб-сайтов, которые не только
            удовлетворяют потребности вашего бизнеса, но и вдохновляют вашу
            аудиторию.
          </p>
        </Slide>
        <Slide direction="left" delay={300}>
          <Button
            text="Заказать"
            marginTop="mt-4"
            onClick={() => console.log("Заказать")}
          />
        </Slide>
        <Slide direction="left" className="mt-20" delay={400}>
          <h2 className="text-center">
            Тарифные <span className="orange">Планы</span>{" "}
          </h2>
        </Slide>
        <Slide direction="right" delay={500}>
          <p className="mt-4">
            Выберите подходящий под вашу задачу тарифный план либо
            воспользуйтесь планом “Exclusive” для нестандартных и кастомных
            решений
          </p>
        </Slide>
        <PriceTab
          marginTop="mt-8"
          tabNaming="Базовый"
          tabDescription="Корпоративный сайт"
          price="550 000 ₸"
          properties={[
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна моб. версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна моб. версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна моб. версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "Value 1",
            },
          ]}
        />
        <PriceTab
          marginTop="mt-8"
          tabNaming="Базовый"
          tabDescription="Корпоративный сайт"
          price="550 000 ₸"
          properties={[
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна моб. версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна моб. версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна моб. версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "Value 1",
            },
          ]}
        />
        <PriceTab
          marginTop="mt-8"
          tabNaming="Базовый"
          tabDescription="Корпоративный сайт"
          price="550 000 ₸"
          properties={[
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна моб. версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна моб. версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна моб. версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "Value 1",
            },
          ]}
        />
        <FormFeature />
      </main>
      <main className="pc flex flex-col items-center">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <Slide direction="left" delay={100}>
              <h1 className="text-left w-[50%]">
                SEO <span className="orange">Оптимизация</span>
              </h1>
            </Slide>
            <Breadcrumbs
              sx={{
                marginTop: "clamp(8px,3.73824vw,32px)",
              }}
            >
              <Link to="/home">Главная</Link>
              <Link to="/services">Услуги</Link>
              <Link to="/services/seo" className="orange">
                SEO Оптимизация
              </Link>
            </Breadcrumbs>
            <Slide direction="right" delay={200}>
              <p className="mt-8 w-[60%]">
                Команда "Spark Studio" - это творческая мастерская, где
                воплощаются самые смелые идеи в веб-разработке. Мы
                специализируемся на создании уникальных и инновационных
                веб-сайтов, которые не только удовлетворяют потребности вашего
                бизнеса, но и вдохновляют вашу аудиторию.
              </p>
            </Slide>
            <Slide direction="left" delay={300}>
              <Button
                text="Заказать"
                marginTop="mt-4"
                onClick={() => console.log("Заказать")}
              />
            </Slide>
          </div>
          <Slide direction="right" className="w-full" delay={300}>
            <img src={seo} alt="seo" className="seo" />
          </Slide>
        </div>
        {/* Prices */}
        <section className="w-full flex flex-col items-start mt-20">
          <Slide direction="left" className="mt-20" delay={400}>
            <h2 className="text-center">
              Тарифные <span className="orange">Планы</span>{" "}
            </h2>
          </Slide>
          <Slide direction="right" delay={500}>
            <p className="mt-4 w-[60%]">
              Выберите подходящий под вашу задачу тарифный план либо
              воспользуйтесь планом “Exclusive” для нестандартных и кастомных
              решений
            </p>
          </Slide>
          <div className="flex items-start justify-between w-full mt-10">
            <Slide direction="right" cascade damping={0.3}>
              <PriceTab
                marginTop="mt-8"
                tabNaming="Базовый"
                tabDescription="Корпоративный сайт"
                price="550 000 ₸"
                properties={[
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна моб. версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна моб. версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна моб. версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                ]}
              />
              <PriceTab
                marginTop="mt-8"
                tabNaming="Базовый"
                tabDescription="Корпоративный сайт"
                price="550 000 ₸"
                properties={[
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна моб. версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна моб. версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна моб. версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                ]}
              />
              <PriceTab
                marginTop="mt-8"
                tabNaming="Базовый"
                tabDescription="Корпоративный сайт"
                price="550 000 ₸"
                properties={[
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна моб. версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна моб. версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна моб. версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                ]}
              />
              <PriceTab
                marginTop="mt-8"
                tabNaming="Базовый"
                tabDescription="Корпоративный сайт"
                price="550 000 ₸"
                properties={[
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна моб. версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна моб. версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна моб. версии",
                    propertyGraph: "Value 1",
                  },
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "Value 1",
                  },
                ]}
              />
            </Slide>
          </div>
        </section>
        <FormFeature />
      </main>
    </>
  );
};
