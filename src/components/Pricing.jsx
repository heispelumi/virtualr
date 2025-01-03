import React from 'react';
import { pricing } from './MainData';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="">
        <div className="text-center">
          <h1 className="text-orange-500 text-center my-10 text-sm font-medium uppercase">
            {t('pricing')}
          </h1>
          <h1 className="text-xl w-full lg:w-full sm:text-3xl lg:text-6xl mt-5 tracking-wide">
            {t('explore_our')}
            <span className="md:text-[30px] bg-gradient-to-r from-orange-500 to-orange-800 text-transparent ml-3 bg-clip-text">
              {t('prices')}
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {pricing.map((plan, index) => (
            <div key={index} className="p-2">
              <div className="p-10 border border-neutral-700 rounded-xl">
                <div>
                  <p className="text-lg font-semibold">
                    {t(plan.title)}
                    {plan.title === 'pro' && (
                      <span className="bg-gradient-to-r ml-2 from-orange-500 to-red-400 text-transparent bg-clip-text">
                        {t('most_popular')}
                      </span>
                    )}
                  </p>

                  <p className="mt-8">
                    <span className="text-5xl mt-6 mr-2 ">{plan.price}</span>
                    <span className="text-neutral-400 tracking-tight">/Month</span>

                    <ul>
                      {plan.features.map((feature, index) => (
                        <li key={index} className="mt-8 flex items-center">
                          <FaRegCheckCircle size={22} />
                          <span className="ml-2">{t(feature)}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">
                      {t('subscribe')}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[10px] pb-16 pt-10 text-sm text-center">
          © 2024 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Pricing;
