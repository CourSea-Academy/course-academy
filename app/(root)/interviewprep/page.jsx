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
  BriefcaseBusiness,
  Code,
  GalleryThumbnails,
  Handshake,
  Hash,
  IndianRupee,
  Network,
  PhoneCall,
  Podcast,
  ScrollText,
  Sparkle,
  ThumbsUp,
  User,
  Users,
} from "lucide-react";
import BookCourse from "@/components/shared/BookCourse";
import Courseslist from "@/components/shared/courseslist";
import FeaturesSectionDemo from "@/components/shared/featuers";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const page = () => {
  const features = [
    {
      title: "Resume and Profile Preparation",
      description:
        "Craft a standout resume and professional profile to attract employers.",
      icon: <ScrollText className="size-7 text-neutral-500" />,
    },
    {
      title: "Job Portal",
      description:
        "Access a wide range of job listings and apply directly to companies.",
      icon: <GalleryThumbnails className="size-7 text-neutral-500" />,
    },
    {
      title: "Career Counseling",
      description:
        "Get personalized career advice to guide your professional journey.",
      icon: <Podcast className="size-7 text-neutral-500" />,
    },
    {
      title: "Job Fairs & Coding Challenges",
      description:
        "Participate in job fairs and coding challenges to showcase your skills.",
      icon: <Code className="size-7 text-neutral-500" />,
    },
    {
      title: "1:1 Industry Mentorship",
      description:
        "Receive one-on-one guidance from industry experts to advance your career.",
      icon: <Users className="size-7 text-neutral-500" />,
    },
    {
      title: "Industry Networking Sessions",
      description:
        "Join networking sessions to connect with professionals in your field.",
      icon: <Network className="size-7 text-neutral-500" />,
    },
    {
      title: "Internship Placement",
      description:
        "Secure internships to gain hands-on experience in your industry.",
      icon: <BriefcaseBusiness className="size-7 text-neutral-500" />,
    },
    {
      title: "Personal Branding",
      description:
        "Develop a strong personal brand to stand out in the job market.",
      icon: <User className="size-7 text-neutral-500" />,
    },
  ];

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
                  <span>Interview Prep</span>
                </FancyButton>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug mt-6">
                  Tired of failing interviews?
                  <Highlight>
                    Discover where you&apos;re lacking and improve!
                  </Highlight>
                </h1>
                <p className="leading-7 mt-3 font-medium">
                  Identify the gaps in your interview skills and enhance your
                  performance with our expert guidance. Say goodbye to failed
                  interviews and hello to success!
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  <Button className="" size="lg" asChild>
                    <a href="#">Talk to Counsellor</a>
                  </Button>
                </div>
              </div>
              <div className="relative h-full w-full lg:p-6 bg-white">
                <BookCourse
                  interest="Interview Prep"
                  program="Mentorship and Interview Preparation"
                />
              </div>
            </div>
          </div>
        </HeroHighlight>
      </div>
      <div id="" className="pb-24">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="mt-3">
            <h2 className="text-3xl font-semibold tracking-tight">
              <span className="text-primary">Placement </span>Support
            </h2>
            <p className="mt-3 text-sm">
              Get comprehensive placement support to secure your dream job.
            </p>
          </div>
          <div className="mt-6">
            <FeaturesSectionDemo features={features} />
          </div>
        </div>
      </div>
      <div className="bg-secondary">
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
                        <BookCourse
                          interest="Interview Prep"
                          program="Mentorship and Interview Preparation"
                        />
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
