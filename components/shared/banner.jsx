import React from "react";
import { Button } from "../ui/button";
const Banner = () => {
  return (
    <div className="">
      <div className="bg-blue-600 h-full bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center text-center">
        <div className="mx-auto max-w-7xl h-full flex items-center justify-center flex-wrap gap-1 lg:gap-3  p-1">
          <p className="inline-block text-white text-sm lg:text-base">
            Python 2 Months Course for <span className="font-bold">Free</span>
          </p>
          <Button className="h-6" size="sm" variant="outline" asChild>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfsLiOmt2d4Q_Jqlxwm_iNdvfEfFBb8L22J9tcr-QeK5nJoiw/viewform?usp=sf_link"
              target="_blank"
            >
              {" "}
              Register Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
