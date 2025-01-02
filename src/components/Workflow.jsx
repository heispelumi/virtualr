import code from "../assets/code.jpg";
import { workflow } from "./MainData";
import { FaRegCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Workflow = () => {
    const { t } = useTranslation();
  return (
    <div className="">
      {/* Title Section */}
      <div className="text-center ">
        <h1 className="text-orange-500 text-sm my-10 font-medium uppercase">{t('workflow_title')}</h1>
        <h1 className="text-xl  w-full lg:w-full sm:text-3xl lg:text-6xl mt-5 tracking-wide">
        {t("workflow_heading")}
          <span className="  md:text-[30px] bg-gradient-to-r from-orange-500 to-orange-800 text-transparent ml-3  bg-clip-text">
          {t("workflow_subheading")}
          </span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-wrap lg:flex-nowrap gap-x-2 justify-center items-center mt-12">
        {/* Image Section */}
        <div className="p-6 md:w-1/2 lg:w-1/2 flex justify-center ">
          <img
            className="w-[300px]   md:w-[550px]"
            src={code}
            alt="Coding"
          />
        </div>

        {/* Text Section */}
        <div className="w-full p-6  md:w-1/2">
          {workflow.map((workflow, index) => (
            <div key={index} className="flex  col-span-2 items-start mb-8">
              <div className="text-green-400 flex-shrink-0 h-10 w-10 p-1 flex justify-center items-center">
                <FaRegCheckCircle size={22} />
              </div>
              <div className="flex flex-wrap">
                <h1 className="mt-2 w-[500px] lg:w-[350px] mb-6  text-[15px]  lg:mb-2 md:text-md">{t(workflow.text)}</h1>
                <p className="p-2 w-[250px] text-[15px] lg:w-[600px] mb-6  lg:mb-2 text-neutral-500">{t(workflow.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
