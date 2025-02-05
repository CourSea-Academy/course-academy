"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Curriculum = ({ data }) => {
  const [module, setModule] = useState(data[0]);
  const [subModule, setSubModule] = useState(data[0].submodule[0]);

  return (
    <div className="mt-6">
      <div className="mx-auto max-w-7xl flex overflow-x-auto gap-3">
        {data?.map((m, mIndex) => (
          <Button
            key={mIndex}
            size="lg"
            variant={module.module === m.module ? "" : "outline"}
            onClick={() => {
              setModule(m);
              setSubModule(m.submodule[0]);
            }}
          >
            {m.module}
          </Button>
        ))}
      </div>
      <div className="mt-6">
        <div className="grid lg:grid-cols-6 min-h-[70vh] gap-3">
          <div className="lg:col-span-2 flex flex-col gap-3 border rounded-md ">
            <h3 className="px-3 text-lg font-semibold bg-secondary p-3 rounded-t-md">
              Tools and Technologies
            </h3>
            <div className="p-3 flex flex-col gap-3 ">
              {module.submodule?.map((m, mIndex) => (
                <div
                  key={mIndex}
                  className={
                    m.name === subModule.name
                      ? "cursor-pointer flex flex-col space-y-1.5 p-6 bg-secondary-foreground text-white rounded-md "
                      : "cursor-pointer flex flex-col space-y-1.5 p-6  rounded-md border"
                  }
                  onClick={() => setSubModule(m)}
                >
                  <div>
                    <h3 className="font-semibold leading-none tracking-tight">
                      {m.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 rounded-md  relative flex flex-col gap-3 h-[70vh] overflow-y-scroll border">
            <h3 className="text-lg font-semibold sticky top-0 z-[100] bg-secondary py-3 px-6  ">
              Modules
            </h3>

            <div className=" flex flex-col gap-3  px-6">
              <Accordion type="single" collapsible className="w-full">
                {subModule.chapters?.map((c, cIndex) => (
                  <AccordionItem key={cIndex} value={c}>
                    <AccordionTrigger>{c.module}</AccordionTrigger>
                    {c.description?.map((cd, cdIndex) => (
                      <AccordionContent key={cdIndex}>
                        <span className="flex items-center gap-1 ml-3">
                          <span className="inline-block h-1 w-1 rounded-full bg-black"></span>
                          <span>{cd}</span>
                        </span>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
