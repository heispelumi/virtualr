import { useTranslation } from "react-i18next";
import user1 from "../assets/users/user1.jpg";
import user2 from "../assets/users/user2.jpg";
import user3 from "../assets/users/user3.jpg";
import user4 from "../assets/users/user4.jpg";
import user5 from "../assets/users/user5.jpg";
import user6 from "../assets/users/user6.jpg";


const testimonials = [
  { user: "John Doe", company: "Stellar Solutions", image: user1 },
  { user: "Jane Smith", company: "Blue Horizon Technologies", image: user2 },
  { user: "David Johnson", company: "Quantum Innovations", image: user3 },
  { user: "Ronee Brown", company: "Fusion Dynamics", image: user4 },
  { user: "Michael Wilson", company: "Visionary Creations", image: user5 },
  { user: "Emily Davis", company: "Synergy Systems", image: user6 },
];

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <div className="tracking-wide">
      <div className="text-center">
        <h1 className="text-orange-500 text-center my-10 text-sm font-medium uppercase">
          {t("testimonial_title")}
        </h1>
        <h1 className="text-xl w-full lg:w-full sm:text-3xl lg:text-6xl mt-5 tracking-wide">
          {t("testimonial_subtitle")}
          <span className="md:text-[30px] bg-gradient-to-r from-orange-500 to-orange-800 text-transparent ml-3 bg-clip-text">
            {t("testimonial_subheadingtitle")}
          </span>
        </h1>
      </div>

      <div className="flex flex-wrap mt-12 justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800   ">
              <p>{t(`testimonials_${index}`)}</p> 
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
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
