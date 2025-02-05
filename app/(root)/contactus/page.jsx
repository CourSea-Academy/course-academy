import React from "react";
import { FancyButton } from "@/components/shared/moving-border";
import { Handshake, Mail, Send, MapPin, PhoneCall } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/shared/Footer";

export function generateMetadata({ params }) {
  return {
    title: "Contact CourSea Academy in Bangalore | Get Started",
    description:
      "Get in touch with CourSea Academy in Bangalore for expert training in Full Stack Development, Data Science, DevOps, and more. Start your career today.",
  };
}

const page = () => {
  return (
    <>
      <div className="relative mx-auto max-w-7xl p-4">
        <div className="grid lg:grid-cols-2 h-full w-full gap-3 py-9">
          <div className="">
            <div>
              <FancyButton className="inline-flex items-center justify-center gap-3 border px-3 py-1 rounded-full text-sm shadow-sm bg-white">
                <span>
                  <Handshake className="h-4 w-4" />
                </span>
                <span>Get in touch</span>
              </FancyButton>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug mt-3">
                Contact Us
              </h1>
              <p className="leading-7 mt-3 font-medium">
                Any question? We would be happy to help you
              </p>

              <div className="flex flex-col gap-6 mt-6">
                <div className="group flex gap-3 items-center text-sm font-medium leading-none ">
                  <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                    <PhoneCall className="h-6 w-6" />
                  </div>
                  <p className="text-sm lg:text-base font-semibold">
                    +91 9632036963
                  </p>
                </div>
                <div className="group flex gap-3 items-center text-sm font-medium leading-none ">
                  <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <p className="text-sm lg:text-base font-semibold">
                    <a href="mailto:info@Coursea.in">info@Coursea.in</a>
                  </p>
                </div>
                <div className="group flex gap-3 items-center text-sm font-medium leading-none ">
                  <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <p className="text-sm lg:text-base font-semibold">
                    2nd floor, 67th cross, 12th Main Rd, Bashyam Circle, <br />
                    Rajajinagar, Bengaluru, Karnataka 560010
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="self-end mt-6 px-3 lg:px-6">
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Name" />
              </div>
              <div className="flex flex-col lg:flex-row gap-3 w-full">
                <div className="flex flex-col space-y-1.5 w-full">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Email Address" />
                </div>
                <div className="flex flex-col space-y-1.5 w-full">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Phone Number" />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Message" />
              </div>
              <div className="flex justify-end">
                <Button size="lg">
                  Send Message <Send className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer cName={"pt-3"} />
    </>
  );
};

export default page;
