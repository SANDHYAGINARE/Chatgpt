import React from "react";
import Image from "next/image";
import beats from "../../../public/Images/Beats.svg";
import circle from "../../../public/Images/circle.svg";
import bottom from "../../../public/Images/bottom.svg";
import star from "../../../public/Images/star.svg";
import starFilled from "../../../public/Images/star-fill.svg";
import multiCircle from "../../../public/Images/multi-circle.svg";
import AIhand from "../../../public/Images/AI-hand.svg";
import arrow from "../../../public/Images/arrow.svg";
import T from "../../../public/Images/T.svg";
import Tcontainer from "../../../public/Images/Tcontainer.svg";

import Navbar from "@/component/navbar/navbar";
import Link from "next/link";

const home = () => {
  return (
    <>
      <div
        className="bg-[#FFF3F4
] w-full"
      >
        <Navbar />
        <div className=" flex flex-col-reverse justify-center items-center lg:flex-row ">
          <div className="w-full   lg:w-1/2 ">
            <div className="md:w-[700px] p-9">
              <h2 className="text-[30px] font-bold leading-normal lg:text-[60px]">
                Unleashing the Power of AI in Healthcare: A Future Full of
                Promise
              </h2>
              <p className="mb-5 md:leading-7	">
                Experience the awe-inspiring potential as our cutting-edge
                AI-powered app harnesses the power of advanced image recognition
                technology. It effortlessly deciphers doctor prescription
                images, presenting patients with comprehensive insights into
                their medication and treatment plans, fostering clarity and
                empowerment.
              </p>
              <Link
                href="/home"
                className="bg-[#1F5D58] text-white p-3 rounded-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="w-full align-baseline lg:w-1/2 overflow-hidden">
            <Image src={star} className="mt-10" />
            <div className="relative">
              <Image src={multiCircle} className="absolute" />
              <Image src={AIhand} className="relative left-20 top-24" />
            </div>
            <div className="md:ml-80 flex gap-[8rem]">
              <div className="ml-5">
                <div className="mb-10">
                  <div className="border-l-2 border-[#FF6961] gap-2">
                    <div className="ml-5 ">
                      <h2 className="text-[40px] font-medium">20k+</h2>
                      <p>Patients</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-2 border-[#FF6961] gap-2">
                  <div className="ml-5 ">
                    <h2 className="text-[40px] font-medium">99%</h2>
                    <p>Accuracy</p>
                  </div>
                </div>
              </div>
              <div className="mt-[5rem]">
                <Image src={starFilled} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[70%] transform -translate-y-12 mt-10 lg:mt-0">
          <div className="relative bg">
            <div className="relative bottom-0 top-[15rem]  hidden lg:block">
              <Image src={bottom} className="md:absolute md:w-full" />
            </div>

            <div className="flex mt-10 flex-col md:flex-row gap-5 absolute md:mt-0">
              <div className="card1 bg-white w-full md:w-1/4 ml-5 rounded-xl pb-5 relative z-10 mr-5 md:mr-0">
                <p className="p-5 font-bold text-[24px]">
                  Gain Clarity on Your Medication and Treatment Plans
                </p>
                <div className="flex gap-5">
                  <div className="flex">
                    <Image src={beats} />
                    <Image src={circle} />
                  </div>
                  <Image src={circle} className="w-16" />
                </div>
              </div>
              <div className="card2 bg-white w-full md:w-1/4 ml-5 rounded-xl p-5 relative z-10 mr-5 md:mr-0">
                <div className="flex mb-2">
                  <Link href="/home">
                    <button className="bg-[#1F5D58] px-4 py-2 text-white font-semibold rounded-2xl">
                      Start Now
                    </button>
                  </Link>
                  <div className="bg-[#1F5D58] rounded-3xl ml-auto">
                    <Image src={arrow} className="w-10 h-10 p-3" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[#1F5D58] text-[24px] font-normal">
                    Unlock the full potential of your well-being.
                  </h3>
                  <p className="text-gray-500 font-normal text-sm">
                    Immerse yourself in the world of our AI-based virtual
                    assistance, designed to optimize your health at every level.
                  </p>
                </div>
              </div>
              <div className="card3 bg-white w-full md:w-1/4 ml-5 rounded-xl pb-5 p-5 relative z-10 mr-5 md:mr-0">
                <div>
                  <span className="bg-[#FF6961] rounded-3xl inline-block p-3 mb-2">
                    {" "}
                    <Image src={Tcontainer} className="" />
                  </span>
                </div>
                <h3 className="text-[#FF6961] text-[28px] font-normal">
                  Empowering Wellness
                </h3>
                <p className="text-gray-500 font-normal text-sm">
                  Experience the seamless fusion of cutting-edge medical
                  expertise and artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;