import React, { useTransition } from "react";
import Image from "next/image";
import Navbar from "@/component/navbar/navbar";
import mainImage from "../../public/Images/mainImage.webp";
import { useTranslation } from "next-i18next";

const Home = () => {
    const {t}= useTranslation();

  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-[#FFF3F4] w-full lg:flex-row">
        <div className="sidebar rounded-2xl  bg-gray-50	m-5 p-5 w-full lg:w-1/3">
          <h2 className="text-[20px] font-medium">
           {t("Submit Your Medical Report")}
          </h2>
          <div className="lg:h-[20rem] p-2">
            <textarea
              className="p-5 w-full lg:h-[20rem] lg:w-96	"
              type="text"
              name=""
              id=""
              placeholder={t(`Write your medical report. We can provide you with explanations regarding the results and observations, whether it is a consultation report, an imaging report, a surgical intervention report, a pathology report, a laboratory report, and much more.`)}
            />
          </div>
          <div className="flex mt-10">
            <label
              htmlFor="acknowledge"
              className="sidebar-label flex items-start gap-3"
            >
              <input
                type="checkbox"
                id="acknowledge"
                className="sidebar-checkbox"
              />
              <span className="checkbox-text">
                <p>
            {t("I acknowledge and accept that the responses provided by Health AI are solely for informational purposes and do not constitute professional medical advice. It is strongly recommended that I consult a doctor or qualified healthcare professional for an accurate and comprehensive interpretation of my medical test results, medical report, or any other relevant medical information.")}
                </p>
              </span>
            </label>
          </div>
          <div className=" flex items-center justify-center">
            <button className="text-white font-medium	mt-10 bg-[#1F5D58] px-5 py-3 rounded-xl">
             {t(`Explain Results`)}
            </button>
          </div>
        </div>
        <div className="w-full  lg:w-2/3 ">
          <div className="flex justify-center items-center">
            <Image src={mainImage} className="p-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;