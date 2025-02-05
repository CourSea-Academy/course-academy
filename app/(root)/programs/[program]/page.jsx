import React from "react";
import { HeroHighlight, Highlight } from "@/components/shared/hero-highlight";
import { Button } from "@/components/ui/button";
import { FancyButton } from "@/components/shared/moving-border";
import BookCourse from "@/components/shared/BookCourse";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import pre1 from "@/assets/pre1.png";
import Image from "next/image";
import Curriculum from "@/components/shared/Curriculum";
import { BentoGrid, BentoGridItem } from "@/components/shared/bento-grid";
import Footer from "@/components/shared/Footer";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
  GlowingStarsDescription,
} from "@/components/shared/glowing-stars";
import FeaturesSectionDemo from "@/components/shared/featuers";
import FrequentlyAskedQuestions from "@/components/shared/FrequentlyAskedQuestions";

import {
  Check,
  CheckCircle,
  Handshake,
  Hash,
  IndianRupee,
  Users,
  ThumbsUp,
  PhoneCall,
  User,
  FilePenLine,
  Split,
  Package,
  ListTodo,
  Sheet,
  Newspaper,
  Monitor,
  BriefcaseBusiness,
  FolderGit2,
} from "lucide-react";

import fswdwai from "@/data/Full Stack Web Development With AI.json";
import dswaiagai from "@/data/Data Science with AI and Generative AI.json";
import daae from "@/data/Data Analytics and Engineering.json";
import dace from "@/data/DevOps and Cloud Engineering.json";
import staa from "@/data/Software Testing and Automations.json";
import dm from "@/data/Digital Marketing.json";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toolsData } from "@/data/toolsData";
import { InfiniteMovingCards } from "@/components/shared/infinite-moving-cards";
import RolesCanBeApplied from "@/components/shared/RolesCanBeApplied";

export function generateMetadata({ params }) {
  if (decodeURI(params.program) === "full-stack-web-development-with-ai") {
    return {
      title: "Full Stack Web Development Course in Bangalore",
      description:
        "Master Full Stack Web Development with AI at CourSea Academy in Bangalore. Learn React.js, Python, REST API, and more with live projects.",
    };
  } else if (
    decodeURI(params.program) === "data-science-with-ai-and-generative-ai"
  ) {
    return {
      title: "Data Science with AI Course in Bangalore",
      description:
        "Enroll in CourSea Academy's Data Science with AI program in Bangalore. Learn AI, machine learning, and generative AI with real-world projects.",
    };
  } else if (decodeURI(params.program) === "data-analytics-and-engineering") {
    return {
      title: "Data Analytics and Engineering in Bangalore | CourSea",
      description:
        "Learn data analytics and engineering at CourSea Academy in Bangalore. Master Python, SQL, Power BI, and more with live projects.",
    };
  } else if (decodeURI(params.program) === "devops-and-cloud-engineering") {
    return {
      title: "DevOps and Cloud Engineering Training in Bangalore",
      description:
        "Master DevOps and cloud skills at CourSea Academy in Bangalore. Learn AWS, Kubernetes, Docker, and more with hands-on projects.",
    };
  } else if (decodeURI(params.program) === "software-testing-and-automations") {
    return {
      title: "Software Testing and Automation Course in Bangalore",
      description:
        "Become an expert in software testing with CourSea Academy's training in Bangalore. Learn manual testing, Selenium, and API testing.",
    };
  } else if (decodeURI(params.program) === "digital-marketing") {
    return {
      title: "Digital Marketing Training in Bangalore | CourSea",
      description:
        "Learn digital marketing at CourSea Academy in Bangalore. Master SEO, Google Ads, and social media with practical learning.",
    };
  }
}

const page = ({ params }) => {
  let data;
  if (decodeURI(params.program) === "full-stack-web-development-with-ai") {
    data = fswdwai;
  } else if (
    decodeURI(params.program) === "data-science-with-ai-and-generative-ai"
  ) {
    data = dswaiagai;
  } else if (decodeURI(params.program) === "data-analytics-and-engineering") {
    data = daae;
  } else if (decodeURI(params.program) === "devops-and-cloud-engineering") {
    data = dace;
  } else if (decodeURI(params.program) === "software-testing-and-automations") {
    data = staa;
  } else if (decodeURI(params.program) === "digital-marketing") {
    data = dm;
  }

  const logos = toolsData[data?.title] || [];

  const features = [
    {
      title: "Expert Instructors",
      description:
        "Learn from industry leaders with years of experience, offering in-depth knowledge and practical insights.",
      icon: <User className="size-7 text-neutral-500" />,
    },
    {
      title: "Practical Learning",
      description:
        "Gain practical skills with hands-on projects and real-world applications.",
      icon: <FilePenLine className="size-7 text-neutral-500" />,
    },
    {
      title: "1:1 Mentorship",
      description:
        "Receive personalized advice and support from our dedicated mentors.",
      icon: <Users className="size-7 text-neutral-500" />,
    },
    {
      title: "Flexible Learning Options",
      description:
        "Enjoy flexible courses with live classes, recordings, and collaborative scheduling.",
      icon: <Split className="size-7 text-neutral-500" />,
    },
    {
      title: "Live Doubt Solving",
      description:
        "Get immediate answers and explanations in our live doubt-solving sessions.",
      icon: <ListTodo className="size-7 text-neutral-500" />,
    },
    {
      title: "Module-Based Mocks",
      description:
        "Prepare with mock tests that simulate real exam environments.",
      icon: <Package className="size-7 text-neutral-500" />,
    },

    {
      title: "Diverse Project Portfolio + Capstone",
      description:
        "Build a diverse project portfolio and complete 3+ capstone project.",
      icon: <FolderGit2 className="size-7 text-neutral-500" />,
    },

    {
      title: "Community Support",
      description:
        "Join a supportive community to share ideas, collaborate, and grow your network.",
      icon: <Handshake className="size-7 text-neutral-500" />,
    },
  ];

  logos.map((logo, index) =>
    console.log("the verification iwdsoxf -> ", logo.src, logo.alt, index)
  );

  return (
    <div>
      <HeroHighlight>
        <div className="relative mx-auto max-w-7xl p-4">
          <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="lg:pr-12">
              <FancyButton className="inline-flex items-center justify-center gap-3 border px-3 py-1 rounded-full text-sm shadow-sm bg-white">
                <span>
                  <Hash className="h-4 w-4" />
                </span>
                <span>{data.hashtag}</span>
              </FancyButton>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug mt-6">
                <Highlight>{data.title}</Highlight>
              </h1>
              <p className="leading-7 mt-3 font-medium">{data.description}</p>
              <p className="flex items-center gap-1 text-2xl font-bold max-w-4xl leading-relaxed lg:leading-snug mt-6">
                <span>Price:</span>
                <IndianRupee />
                <span className="">{data.price}</span>
              </p>
              <p className="text-base leading-7 mt-1 font-medium text-red-700">
                Next Batch Starting Soon!, Enroll Now
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="" size="lg">
                      Enroll Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <BookCourse
                      interest="Career Program"
                      program={data.title}
                    />
                  </DialogContent>
                </Dialog>

                <Button className="border-primary" size="lg" variant="outline">
                  Financial aid available*
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
                <div className="group flex gap-3 items-center text-sm font-medium leading-none ">
                  <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <p className="font-semibold">
                    1:1 <br />
                    Mentorship
                  </p>
                </div>
                <div className="group flex gap-3 items-center text-sm font-medium leading-none ">
                  <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                    <IndianRupee className="h-6 w-6" />
                  </div>
                  <p className="font-semibold">
                    8 LPA <br />
                    Avrage Pay
                  </p>
                </div>
                <div className="group flex gap-3 items-center text-sm font-medium leading-none ">
                  <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                    <Handshake className="h-6 w-6" />
                  </div>
                  <p className="font-semibold">
                    300+ <br />
                    Hiring Partners
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full lg:p-6 bg-white">
              <BookCourse interest="Career Program" program={data.title} />
            </div>
          </div>
        </div>
      </HeroHighlight>

      <div className="mx-auto max-w-7xl py-3">
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-6 items-center justify-between">
              {data.features?.map((p, pIndex) => (
                <div
                  key={pIndex}
                  className={
                    data.features.length - 1 === pIndex
                      ? "text-center grow p-3 border-b sm:border-b-0"
                      : "text-center grow p-3 border-b sm:border-b-0 sm:border-r"
                  }
                >
                  <p className="text-lg font-semibold">{p.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-accent text-black">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="">
            <h3 className="text-3xl font-semibold tracking-tight">
              About <span className="text-primary">{data.title} Course</span>
            </h3>
            <p className="max-w-2xl mt-3 text-sm">{data.about}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 mt-6">
            <div>
              <ul className="grid lg:grid-cols-2 gap-6 mt-3 justify-between">
                {data.highlights?.map((h, hIndex) => (
                  <li key={hIndex}>
                    <div className="flex flex-col lg:flex-row gap-3">
                      <CheckCircle className="h-4 w-4" />
                      <p className="text-base font-semibold">{h.name}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {h.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full h-full p-3">
              <Image
                src={pre1}
                alt="about"
                className="h-full w-full object-contain "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6">
        <h3 className="text-3xl font-semibold tracking-tight">
          Course <span className="text-primary">Curriculum</span>
        </h3>
        <Curriculum data={data.curriculum} />
      </div>

      <div className="bg-accent text-black">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h3 className="text-3xl font-semibold tracking-tight">
            <span className="text-primary">{data.title} Tools</span> Covered
          </h3>
          <div className="lg:col-span-9 mt-10 mb-5">
            <InfiniteMovingCards>
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className="h-12 mx-auto"
                  style={{
                    margin: "0 20px",
                    backgroundColor: "transparent",
                  }}
                />
              ))}
            </InfiniteMovingCards>
          </div>
        </div>
      </div>

      <div className="text-black">
        <RolesCanBeApplied roles={data?.roles} roleName={data?.roleName} />
      </div>
      <div className="text-black">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h3 className="text-3xl font-semibold tracking-tight">
            Why <span className="text-primary">CourSea</span> {data.title}{" "}
            program?
          </h3>

          <div className="mx-auto">
            <FeaturesSectionDemo features={features} />
          </div>

          <div className="mt-3 pb-24 grid lg:grid-cols-4 gap-6 items-start justify-between w-full">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                Get exclusive access to career resources upon completion
              </h3>
            </div>
            <div className="flex flex-col gap-1">
              <Newspaper className="size-7" />
              <h3 className="text-lg font-semibold">Resume review</h3>
              <p className="text-sm text-muted-foreground">
                Improve your resume and LinkedIn with personalized feedback.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <Monitor className="size-7" />
              <h3 className="text-lg font-semibold">Interview prep</h3>
              <p className="text-sm text-muted-foreground">
                Focused training to excel in tech recruitment processes.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <BriefcaseBusiness className="size-7" />
              <h3 className="text-lg font-semibold">Career support</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end assistance to secure your dream job.
              </p>
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
                          Get Connected to our experts and know what&apos;s best
                          for you.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              className="text-secondary-foreground bg-white z-[100]"
                              variant="outline"
                            >
                              Get Connected Now{" "}
                              <ThumbsUp className="ml-2 size-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <BookCourse
                              interest="Career Program"
                              program={data.title}
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
        </div>
        {/* <Footer cName={"pt-28"} /> */}
      </div>
      {data?.faq && (
        <div className="mx-auto max-w-7xl pt-32 pb-8 px-4 sm:px-8">
          <h3 className="text-3xl font-semibold tracking-tight">
            Frequently asked <span className="text-primary">Questions</span>
          </h3>
          <FrequentlyAskedQuestions faqData={data.faq} />
        </div>
      )}
      <Footer cName={"pt-5"} />
    </div>
  );
};

export default page;
