import { useTranslation } from "react-i18next"; 
import { testimonials } from "./MainData";

const Testimonials = () => {
  const { t } = useTranslation(); 

  return (
    <div className="tracking-wide">
      <div className="text-center">
        <h1 className="text-orange-500 text-center my-10 text-sm font-medium uppercase">
          {t("testimonial_title")} {/* Translated Testimonial Title */}
        </h1>
        <h1 className="text-xl w-full lg:w-full sm:text-3xl lg:text-6xl mt-5 tracking-wide">
          {t("testimonial_subtitle")} {/* Translated Sub-title */}
          <span className="md:text-[30px] bg-gradient-to-r from-orange-500 to-orange-800 text-transparent ml-3 bg-clip-text">
            ?
          </span>
        </h1>
      </div>

      <div className="flex flex-wrap mt-12 justify-center">
        { testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{t(testimonial.text)}</p> {/* Translated Testimonial Text */}
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6> {/* User Name */}
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company} {/* Company Name */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
