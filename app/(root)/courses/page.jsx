import React from "react";
import Footer from "@/components/shared/Footer";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
  GlowingStarsDescription,
} from "@/components/shared/glowing-stars";
import { HeroHighlight, Highlight } from "@/components/shared/hero-highlight";
import { Button } from "@/components/ui/button";
import { FancyButton } from "@/components/shared/moving-border";
import {
  Handshake,
  Hash,
  IndianRupee,
  PhoneCall,
  Sparkle,
  ThumbsUp,
  Users,
} from "lucide-react";
import BookCourse from "@/components/shared/BookCourse";
import Courseslist from "@/components/shared/courseslist";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export function generateMetadata({}) {
  return {
    title: "IT Training: Full Stack, Data Science, DevOps in Bangalore",
    description:
      "Explore IT training programs in Full Stack Web Development, Data Science with AI, Software Testing, DevOps, and Data Analytics at CourSea Academy.",
  };
}

const page = ({ params }) => {
  return (
    <div>
      <div>
        <HeroHighlight>
          <div className="relative mx-auto max-w-7xl p-4">
            <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="lg:pr-12">
                <FancyButton className="inline-flex items-center justify-center gap-3 border px-3 py-1 rounded-full text-sm shadow-sm bg-white">
                  <span>
                    <Hash className="h-4 w-4" />
                  </span>
                  <span>In-Demand Skills</span>
                </FancyButton>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug mt-6">
                  <Highlight>Looking for Individual Courses?</Highlight>
                </h1>
                <p className="leading-7 mt-3 font-medium">
                  Unlock your potential with our tailored individual courses!
                  Designed to meet your specific learning needs and career
                  goals, our courses provide in-depth knowledge and practical
                  skills. Benefit from personalized attention, flexible
                  scheduling, and expert instruction to accelerate your growth
                  and achieve success. Start your journey with us today and
                  transform your career path!
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  <Button className="" size="lg" asChild>
                    <a href="/courses">Explore Courses</a>
                  </Button>
                  <Button
                    className="border-primary"
                    size="lg"
                    variant="outline"
                  >
                    Financial aid available*
                  </Button>
                </div>
              </div>
              <div className="relative h-full w-full lg:p-6 bg-white">
                <BookCourse interest="Courses" />
              </div>
            </div>
          </div>
        </HeroHighlight>
      </div>
      <div id="courses" className="pb-24">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <FancyButton className="inline-flex items-center justify-center gap-3 border px-3 py-1 rounded-full text-sm shadow-sm bg-white">
            <span>
              <Sparkle className="h-4 w-4" />
            </span>
            <span>Individual Courses</span>
          </FancyButton>
          <div className="mt-3">
            <h2 className="text-3xl font-semibold tracking-tight">
              Explore <span className="text-primary">Courses</span>
            </h2>
            <p className="mt-3 text-sm">
              Explore our curated selection of courses designed to teach you
              in-demand skills that meet industry standards.
            </p>
          </div>
          <div className="mt-6">
            <Courseslist />
          </div>
        </div>
      </div>
      <div className="bg-secondary mt-5">
        <div className="mx-auto max-w-7xl relative flex justify-center w-full">
          <div className="absolute -top-16 w-full max-w-7xl rounded-md">
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>
                <div className="flex flex-wrap text-center items-center justify-center gap-6">
                  <div className="text-left space-y-3">
                    <span>Still Confused?</span>
                    <p className="text-base">
                      Get Connected to our experts and know what&apos;s best for
                      you.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="text-secondary-foreground bg-white z-[100]"
                          variant="outline"
                        >
                          Get Connected Now <ThumbsUp className="ml-2 size-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <BookCourse interest="Courses" />
                      </DialogContent>
                    </Dialog>

                    <span className="text-xl flex items-center gap-3">
                      <PhoneCall className="size-6" />
                      +91 9632036963
                    </span>
                  </div>
                </div>
              </GlowingStarsTitle>
            </GlowingStarsBackgroundCard>
          </div>
        </div>
      </div>
      <Footer cName={"pt-32"} />
    </div>
  );
};

export default page;
