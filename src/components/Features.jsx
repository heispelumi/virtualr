
import { features } from "./MainData";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  return (
    <div className="relative md:max-w-7xl mx-auto h-full overflow-x-hidden lg:px-6 overflow-y-hidden border-b border-neutral-800">
      {/* Text area */}
      <div className="text-center">
        <h1 className="text-orange-500 text-sm font-medium uppercase">
          {t("features_title")}
        </h1>
        <h1 className="text-xl sm:text-3xl lg:text-6xl mt-8 lg:mt-10 lg:mt-15 tracking-wide">
          {t("features_heading")}
          <span className="text-xl md:text-[30px] bg-gradient-to-r from-orange-500 to-orange-800 text-transparent ml-4 bg-clip-text">
            {t("features_subheading")}
          </span>
        </h1>
      </div>

      <div className="flex  mx-0 md:mx-8 lg:mx-10 flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="grid  p-6 grid-cols-2 sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex lg:mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div className="flex flex-wrap">
                <h5 className="mt-2 w-[500px] lg:w-[350px] mb-6 lg:mb-6 text-[18px] md:text-md">
                  {t(feature.text)}
                </h5>
                <p className="p-2 w-[250px] lg:w-[350px] mb-6 lg:mb-6 text-neutral-500">
                  {t(feature.description)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-6 md:py-12"></div>
    </div>
  );
};

export default Features;
