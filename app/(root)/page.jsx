import React from "react";
import Image from "next/image";
import Hero from "@/assets/Hero_bg.png";
import { Button } from "@/components/ui/button";
import {
  Users,
  ClipboardList,
  CircleCheck,
  Sparkles,
  Handshake,
  IndianRupee,
  Laugh,
  Mail,
  MapPin,
  PhoneCall,
  ThumbsUp,
} from "lucide-react";
import { HeroHighlight, Highlight } from "@/components/shared/hero-highlight";
import { FancyButton } from "@/components/shared/moving-border";
import amazon from "@/assets/company/amazon.svg";
import apple from "@/assets/company/apple.svg";
import Capgemini from "@/assets/company/Capgemini.png";
import compviz from "@/assets/company/compviz.svg";
import dell from "@/assets/company/dell.svg";
import flipkart from "@/assets/company/flipkart.svg";
import google from "@/assets/company/google.svg";
import Infosys from "@/assets/company/infosys.svg";
import London from "@/assets/company/London.png";
import Mindtree from "@/assets/company/Mindtree.svg";
import Modefin from "@/assets/company/Modefin.svg";
import samsung from "@/assets/company/samsung.svg";
import tcs from "@/assets/company/tcs.svg";
import Wipro from "@/assets/company/Wipro.png";
import { InfiniteMovingCards } from "@/components/shared/infinite-moving-cards";
import { Badge } from "@/components/ui/badge";
import {
  Cpu,
  Globe,
  PieChart,
  Workflow,
  Cloud,
  MoveRight,
  Clock5,
  LayoutGrid,
  Sparkle,
  Medal,
  Heart,
  Megaphone,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WobbleCard } from "@/components/shared/wobble-card";
import pre from "@/assets/pre2.png";
import { Moving } from "@/components/shared/Moving";
import { HoverEffect } from "@/components/shared/card-hover-effect";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
  GlowingStarsDescription,
} from "@/components/shared/glowing-stars";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import BookNowForm from "@/components/shared/booknowform";
import Footer from "@/components/shared/Footer";
import Contactform from "@/components/shared/Contactform";

const testimonials = [
  {
    quote:
      "Best institution to learn new set of skills and ideas to get into IT professional. Highly recommended to join this institution . Knowledgeable trainers and the method they use to train students are appreciated.",
    name: "Divya shree K",
  },
  {
    quote:
      "It was a great experience at CourSea Academy. The instructors were highly knowledgeable. I took Power Bi course, through-out the course they were very supportive. I highly recommend to choose this institute as a stepping stone, to have a great carrer technically.",
    name: "Likhitha N",
  },
  {
    quote:
      "The instructors were knowledgeable, patient, and made complex concepts easy to understand. The well-structured curriculum allowed for gradual skill development, building a strong foundation before delving into more advanced topics. Overall, my experience was rewarding, and I highly recommend this academy to anyone looking to master Python and SQL.",
    name: "Archana TS",
  },
  {
    quote:
      "I have completed Data Analytical Training from CourSea Academy. I would recommend everyone to join. All trainers are very skilled. They also helped me with placement assistance. Thank you Team.",
    name: "Vinod kumar",
  },
  {
    quote:
      "I had an excellent experience at CourSea Academy. The trainers are highly knowledgeable, interactive and provide practical learning with one-on-one mentorship. The good environment enhanced my learning speed. I highly recommend CourSea Academy for anyone looking to learn in physical mode.",
    name: "Ashutosh Yadav",
  },
  {
    quote:
      "I have completed javascript, react, SQL courses in CourSea academy. It was a great experience. Trainers are really skilled and excellent in their Technical fields. I would highly recommend it to everyone.",
    name: "Muskan Verma",
  },
];

const projects = [
  {
    title: "1",
    heading: "Launch Your Journey - Intro Session",
    description:
      "Begin your transformation in a customized cohort. Meet your dedicated Learning Coordinator, peers and select a mentor for personalized guidance.",
  },
  {
    title: "2",
    heading: "Interactive Learning - Live & Engaging",
    description:
      "Engage with expert instructors in live classroom sessions. Deepen your understanding through real-time, interactive Q&A for immediate doubt resolution.",
  },
  {
    title: "3",
    heading: "Sharpen Your Skills - Training Support",
    description:
      "Put your knowledge into practice with assignments and mock interviews to solidify your learning. Build a powerful, professional resume with personalized guidance from experienced mentors.",
  },
  {
    title: "4",
    heading: "Conquer Your Goals - 1:1 Guidance",
    description:
      "Receive invaluable insights and support through personalized 1:1 sessions with pro mentors. Gain an edge and boost your confidence for career success.",
  },
  {
    title: "5",
    heading: "Master the Game - Mock Interviews",
    description:
      "Apply your acquired skills in simulated interview settings with post-module mock interviews. Hone your interview techniques and gain valuable feedback for real-world success.",
  },
  {
    title: "6",
    heading: "Land Your Dream Job - Placement Support",
    description:
      "Gain access to exclusive job openings within our trusted network. Participate in focused placement training to excel in the technical recruitment process. Receive end-to-end support to secure your dream job.",
  },
];

export const metadata = {
  title: "Full Stack, Data Science, DevOps Training in Bangalore",
  description:
    "CourSea Academy offers training in Full Stack Web Development, Data Science with AI, Software Testing, DevOps, and Data Analytics in Bangalore.",
  keywords: [
    "Full Stack Web Development with AI",
    "Data Science with AI and Generative AI",
    "Data Analytics and Engineering",
    "Machine Learning and AI",
    "DevOps and Cloud Engineering",
    "Digital Marketing with AI",
    "Software Testing and Automations",
    "Python",
    "Java",
    "Nodejs and Expressjs",
    "SQL",
    "HTML and CSS",
    "JavaScript",
    "Reactjs and React Native",
    "Next.js",
    "Angular",
    "Excel and Spreadsheet",
    "Power BI",
    "Tableau",
    "Alteryx",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Manual testing",
    "Automated testing",
    "Selenium",
    "Kubernetes and Docker",
    "Linux",
    "Terraform",
    "Jenkins",
    "Ansible",
    "AWS",
    "Azure",
    "GCP",
    "DSA",
    "Git and Github",
    "Mentorship and Interview Preparation",
  ],
};

const Home = () => {
  return (
    <main>
      <HeroHighlight>
        <div className="relative mx-auto max-w-7xl p-4">
          <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="lg:pr-12">
              <FancyButton className="inline-flex items-center justify-center gap-3 border px-3 py-1 rounded-full text-sm shadow-sm bg-white">
                <span>
                  <Sparkles className="h-4 w-4" />
                </span>
                <span>Start, Learn and Grow</span>
              </FancyButton>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug mt-6">
                Master <Highlight>In-Demand Skills</Highlight> To{" "}
                <Highlight>Advance</Highlight> Your{" "}
                <Highlight>Career</Highlight> Path
              </h1>
              <p className="leading-7 mt-3 font-medium">
                Learn from the industry&apos;s top tech veterans through
                expertly crafted courses, designed for any kind of learners.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Button className="" size="lg" asChild>
                  <a href="#courses">Get Started</a>
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="border-primary"
                      size="lg"
                      variant="outline"
                    >
                      Book Free Demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-left">
                        Book Your Free Demo Class
                      </DialogTitle>
                    </DialogHeader>
                    <BookNowForm />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-9">
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
                    <ClipboardList className="h-6 w-6" />
                  </div>
                  <p className="font-semibold">
                    Mock <br />
                    Interviews
                  </p>
                </div>
                <div className="group flex gap-3 items-center text-sm font-medium leading-none ">
                  <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                    <CircleCheck className="h-6 w-6" />
                  </div>
                  <p className="font-semibold">
                    100% <br />
                    Placement
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full p-6">
              <div className="animate-bounce-1 max-w-[25%] flex flex-col gap-1 border border-primary absolute shadow-sm shadow-primary bg-white rounded-md bottom-[50%] left-0 p-3">
                <div className="space-y-1 lg:flex lg:space-x-1 lg:items-center">
                  <div className="inline-flex bg-primary/90 p-2 rounded-md text-white">
                    <Handshake className="size-4 lg:size-6" />
                  </div>
                  <p className="text-sm lg:text-base font-semibold">300+</p>
                </div>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  Hiring Partners
                </p>
              </div>
              <div className="animate-bounce-2 max-w-[35%] flex flex-col gap-1 border border-primary absolute shadow-sm shadow-primary bg-white rounded-md right-0 top-[0%] md:right-[5%] md:top-[10%] lg:top-[20%] p-3">
                <div className="space-y-1 lg:flex lg:space-x-1 lg:items-center">
                  <div className="inline-flex bg-primary/90 p-2 rounded-md text-white">
                    <IndianRupee className="size-4 lg:size-6" />
                  </div>
                  <p className="text-sm lg:text-base font-semibold">
                    4 - 20 LPA
                  </p>
                </div>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  Salary Range
                </p>
              </div>
              <div className="animate-bounce-3 max-w-[30%] flex flex-col gap-1 border border-primary absolute shadow-sm shadow-primary bg-white rounded-md right-0 -bottom-1 md:right-[10%] md:bottom-[10%] lg:right-[10%] lg:bottom-[10%] p-3">
                <div className="space-y-1 lg:flex lg:space-x-1 lg:items-center">
                  <div className="inline-flex bg-primary/90 p-2 rounded-md text-white">
                    <Laugh className="size-4 lg:size-6" />
                  </div>
                  <p className="text-sm lg:text-base font-semibold">93%</p>
                </div>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  Happy Outcome
                </p>
              </div>
              <Image
                src={Hero}
                alt="Hero"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </HeroHighlight>

      <div className="bg-accent text-black">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
            <p className="lg:col-span-3 lg:text-xl font-bold">
              Our Alumni work at some of the{" "}
              <span className="text-primary">Best companies</span>
            </p>
            <div className="lg:col-span-9">
              <InfiniteMovingCards>
                <Image className="h-9 mx-auto" src={amazon} alt={"amazon"} />
                <Image className="h-9 mx-auto" src={apple} alt={"apple"} />
                <Image
                  className="h-6 mx-auto"
                  src={Capgemini}
                  alt={"Capgemini"}
                />
                <Image className="h-6 mx-auto" src={compviz} alt={"compviz"} />
                <Image className="h-9 mx-auto" src={dell} alt={"dell"} />
                <Image
                  className="h-6 mx-auto"
                  src={flipkart}
                  alt={"flipkart"}
                />
                <Image className="h-9 mx-auto" src={google} alt={"google"} />
                <Image className="h-6 mx-auto" src={Infosys} alt={"Infosys"} />
                <Image className="h-9 mx-auto" src={London} alt={"London"} />
                <Image
                  className="h-6 mx-auto"
                  src={Mindtree}
                  alt={"Mindtree"}
                />
                <Image className="h-6 mx-auto" src={Modefin} alt={"Modefin"} />
                <Image className="h-9 mx-auto" src={samsung} alt={"samsung"} />
                <Image className="h-9 mx-auto" src={tcs} alt={"tcs"} />
                <Image className="h-9 mx-auto" src={Wipro} alt={"Wipro"} />
              </InfiniteMovingCards>
            </div>
          </div>
        </div>
      </div>

      <div className="" id="courses">
        <div className="mx-auto max-w-7xl px-4 py-6 mt-6">
          <FancyButton className="inline-flex items-center justify-center gap-3 border px-3 py-1 rounded-full text-sm shadow-sm bg-white">
            <span>
              <Sparkle className="h-4 w-4" />
            </span>
            <span>Career Programs</span>
          </FancyButton>
          <div className="mt-3">
            <h2 className="text-3xl font-semibold tracking-tight">
              Choose Your <span className="text-primary">Career Path</span>
            </h2>
            <p className="mt-3 text-sm">
              Explore our curated selection of courses designed to teach you
              in-demand skills that meet industry standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <Card className="group cursor-pointer hover:border-primary min-h-[65vh] flex flex-col justify-between gap-1">
              <CardHeader className="bg-secondary rounded-t-md">
                <div className="group-hover:translate-x-2 transition duration-200 border rounded-md p-3 bg-accent bg-white group-hover:text-primary size-12">
                  <Globe className="size-6 group-hover:text-primary" />
                </div>
                <CardTitle className="group-hover:translate-x-2 transition duration-200 text-lg ">
                  Full Stack Web Development with AI
                </CardTitle>
                <CardDescription className="group-hover:translate-x-2 transition duration-200">
                  Learn the art of integrating AI into your web development
                  workflow to create personalized, intelligent and scalable
                  application.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div>
                  <p className="font-semibold">Tools and Technologies</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary">Figma</Badge>
                    <Badge variant="secondary">HTML and CSS</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Reactjs/Angular</Badge>
                    <Badge variant="secondary">Python/Java/Nodejs</Badge>
                    <Badge variant="secondary">Rest API</Badge>
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">DSA</Badge>
                    <Badge variant="secondary">Git & Github</Badge>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between gap-3 mt-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <Clock5 className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">4 Months</span>
                          <span className="text-xs">Duration</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <IndianRupee className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">7 LPA</span>
                          <span className="text-xs">Average pay</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <LayoutGrid className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">6+</span>
                          <span className="text-xs">Live Project</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="">
                <div className="flex flex-wrap gap-3 w-full">
                  <a
                    className="w-full"
                    href="/programs/full-stack-web-development-with-ai"
                  >
                    <Button className="w-full">Enroll Now</Button>
                  </a>
                  <a
                    className="w-full"
                    href="/programs/full-stack-web-development-with-ai"
                  >
                    <Button className="w-full space-x-3" variant="outline">
                      Learn more
                      <MoveRight className="" />
                    </Button>
                  </a>
                </div>
              </CardFooter>
            </Card>
            <Card className="group cursor-pointer hover:border-primary min-h-[65vh] flex flex-col justify-between gap-1">
              <CardHeader className="bg-secondary rounded-t-md">
                <div className="group-hover:translate-x-2 transition duration-200 border rounded-md p-3 bg-accent bg-white group-hover:text-primary size-12">
                  <Cpu className="size-6 group-hover:text-primary" />
                </div>
                <CardTitle className="group-hover:translate-x-2 transition duration-200 text-lg ">
                  Data Science with AI and Generative AI
                </CardTitle>
                <CardDescription className="group-hover:translate-x-2 transition duration-200">
                  Learn to leverage AI and generative models to uncover hidden
                  patterns, predict outcomes, and generate new ideas that
                  transform industries.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div>
                  <p className="font-semibold">Tools and Technologies</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">DSA</Badge>
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">Power BI</Badge>
                    <Badge variant="secondary">Probability & Statistics</Badge>
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">NLP</Badge>
                    <Badge variant="secondary">Deep Learning</Badge>
                    <Badge variant="secondary">Transformers</Badge>
                    <Badge variant="secondary">Git & Github</Badge>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between gap-3 mt-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <Clock5 className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">4 Months</span>
                          <span className="text-xs">Duration</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <IndianRupee className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">5.5 LPA</span>
                          <span className="text-xs">Average pay</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <LayoutGrid className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">7+</span>
                          <span className="text-xs">Live Project</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="">
                <div className="flex flex-wrap gap-3 w-full">
                  <a
                    className="w-full"
                    href="/programs/data-science-with-ai-and-generative-ai"
                  >
                    <Button className="w-full">Enroll Now</Button>
                  </a>
                  <a
                    className="w-full"
                    href="/programs/data-science-with-ai-and-generative-ai"
                  >
                    <Button className="w-full space-x-3" variant="outline">
                      Learn more
                      <MoveRight className="" />
                    </Button>
                  </a>
                </div>
              </CardFooter>
            </Card>
            <Card className="group cursor-pointer hover:border-primary min-h-[65vh] flex flex-col justify-between gap-1">
              <CardHeader className="bg-secondary rounded-t-md">
                <div className="group-hover:translate-x-2 transition duration-200 border rounded-md p-3 bg-accent bg-white group-hover:text-primary size-12">
                  <PieChart className="size-6 group-hover:text-primary" />
                </div>
                <CardTitle className="group-hover:translate-x-2 transition duration-200 text-lg ">
                  Data Analytics and Engineering
                </CardTitle>
                <CardDescription className="group-hover:translate-x-2 transition duration-200">
                  Learn to analyze massive datasets, extract valuable insights,
                  and make data-driven decisions that transform businesses.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div>
                  <p className="font-semibold">Tools and Technologies</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">Excel/Spreadsheet</Badge>
                    <Badge variant="secondary">Power BI/Tableau</Badge>
                    <Badge variant="secondary">Alteryx</Badge>
                    <Badge variant="secondary">Probability & Statistics</Badge>
                    <Badge variant="secondary">DSA</Badge>
                    <Badge variant="secondary">Git & Github</Badge>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between gap-3 mt-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <Clock5 className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">3 Months</span>
                          <span className="text-xs">Duration</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <IndianRupee className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">6 LPA</span>
                          <span className="text-xs">Average pay</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <LayoutGrid className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">5+</span>
                          <span className="text-xs">Live Project</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="">
                <div className="flex flex-wrap gap-3 w-full">
                  <a
                    className="w-full"
                    href="/programs/data-analytics-and-engineering"
                  >
                    <Button className="w-full">Enroll Now</Button>
                  </a>
                  <a
                    className="w-full"
                    href="/programs/data-analytics-and-engineering"
                  >
                    <Button className="w-full space-x-3" variant="outline">
                      Learn more
                      <MoveRight className="" />
                    </Button>
                  </a>
                </div>
              </CardFooter>
            </Card>
            <Card className="group cursor-pointer hover:border-primary min-h-[65vh] flex flex-col justify-between gap-1">
              <CardHeader className="bg-secondary rounded-t-md">
                <div className="group-hover:translate-x-2 transition duration-200 border rounded-md p-3 bg-accent bg-white group-hover:text-primary size-12">
                  <Workflow className="size-6 group-hover:text-primary" />
                </div>
                <CardTitle className="group-hover:translate-x-2 transition duration-200 text-lg ">
                  Software Testing and Automations
                </CardTitle>
                <CardDescription className="group-hover:translate-x-2 transition duration-200">
                  Master the skills to automate testing, improve testing
                  efficiency, and deliver high-quality software products faster.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div>
                  <p className="font-semibold">Tools and Technologies</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">Python/Java</Badge>
                    <Badge variant="secondary">Manual testing</Badge>
                    <Badge variant="secondary">Automated testing</Badge>
                    <Badge variant="secondary">Selenium</Badge>
                    <Badge variant="secondary">CI/CD</Badge>
                    <Badge variant="secondary">API Testing</Badge>
                    <Badge variant="secondary">DSA</Badge>
                    <Badge variant="secondary">Git & Github</Badge>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between gap-3 mt-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <Clock5 className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">3 Months</span>
                          <span className="text-xs">Duration</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <IndianRupee className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">6 LPA</span>
                          <span className="text-xs">Average pay</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <LayoutGrid className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">4+</span>
                          <span className="text-xs">Live Project</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="">
                <div className="flex flex-wrap gap-3 w-full">
                  <a
                    className="w-full"
                    href="/programs/software-testing-and-automations"
                  >
                    <Button className="w-full">Enroll Now</Button>
                  </a>
                  <a
                    className="w-full"
                    href="/programs/software-testing-and-automations"
                  >
                    <Button className="w-full space-x-3" variant="outline">
                      Learn more
                      <MoveRight className="" />
                    </Button>
                  </a>
                </div>
              </CardFooter>
            </Card>
            <Card className="group cursor-pointer hover:border-primary min-h-[65vh] flex flex-col justify-between gap-1">
              <CardHeader className="bg-secondary rounded-t-md">
                <div className="group-hover:translate-x-2 transition duration-200 border rounded-md p-3 bg-accent bg-white group-hover:text-primary size-12">
                  <Cloud className="size-6 group-hover:text-primary" />
                </div>
                <CardTitle className="group-hover:translate-x-2 transition duration-200 text-lg ">
                  DevOps and Cloud Engineering
                </CardTitle>
                <CardDescription className="group-hover:translate-x-2 transition duration-200">
                  Learn to build, deploy, and manage cloud-native applications
                  that drive business innovation, improve efficiency, and reduce
                  costs.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div>
                  <p className="font-semibold">Tools and Technologies</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">DSA</Badge>
                    <Badge variant="secondary">AWS/Azure/GCP</Badge>
                    <Badge variant="secondary">Kubernetes</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Terraform</Badge>
                    <Badge variant="secondary">Jenkins</Badge>
                    <Badge variant="secondary">Ansible</Badge>
                    <Badge variant="secondary">Linux</Badge>
                    <Badge variant="secondary">Git & Github</Badge>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between gap-3 mt-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <Clock5 className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">4 Months</span>
                          <span className="text-xs">Duration</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <IndianRupee className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">6 LPA</span>
                          <span className="text-xs">Average pay</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <LayoutGrid className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">5+</span>
                          <span className="text-xs">Live Project</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="">
                <div className="flex flex-wrap gap-3 w-full">
                  <a
                    className="w-full"
                    href="/programs/devops-and-cloud-engineering"
                  >
                    <Button className="w-full">Enroll Now</Button>
                  </a>
                  <a
                    className="w-full"
                    href="/programs/devops-and-cloud-engineering"
                  >
                    <Button className="w-full space-x-3" variant="outline">
                      Learn more
                      <MoveRight className="" />
                    </Button>
                  </a>
                </div>
              </CardFooter>
            </Card>
            <Card className="group cursor-pointer hover:border-primary min-h-[65vh] flex flex-col justify-between gap-1">
              <CardHeader className="bg-secondary rounded-t-md">
                <div className="group-hover:translate-x-2 transition duration-200 border rounded-md p-3 bg-accent bg-white group-hover:text-primary size-12">
                  <Megaphone className="size-6 group-hover:text-primary" />
                </div>
                <CardTitle className="group-hover:translate-x-2 transition duration-200 text-lg ">
                  Digital Marketing with AI
                </CardTitle>
                <CardDescription className="group-hover:translate-x-2 transition duration-200">
                  Learn to create, execute, and optimize digital marketing
                  strategies that boost brand visibility, engage customers, and
                  drive conversions.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div>
                  <p className="font-semibold">Tools and Technologies</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary">Google Ads</Badge>
                    <Badge variant="secondary">Facebook Ads</Badge>
                    <Badge variant="secondary">SEO</Badge>
                    <Badge variant="secondary">Email Marketing</Badge>
                    <Badge variant="secondary">Google Analytics</Badge>
                    <Badge variant="secondary">HubSpot</Badge>
                    <Badge variant="secondary">Hootsuite</Badge>
                    <Badge variant="secondary">Mailchimp</Badge>
                    <Badge variant="secondary">WordPress</Badge>
                    <Badge variant="secondary">Canva</Badge>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between gap-3 mt-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <Clock5 className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">4 Months</span>
                          <span className="text-xs">Duration</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <IndianRupee className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">6 LPA</span>
                          <span className="text-xs">Average pay</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-start">
                      <LayoutGrid className="size-6" />
                      <div>
                        <p className="flex flex-col text-sm self-center text-secondary-foreground font-medium">
                          <span className="font-semibold">5+</span>
                          <span className="text-xs">Live Project</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="">
                <div className="flex flex-wrap gap-3 w-full">
                  <a className="w-full" href="/programs/digital-marketing">
                    <Button className="w-full">Enroll Now</Button>
                  </a>
                  <a className="w-full" href="/programs/digital-marketing">
                    <Button className="w-full space-x-3" variant="outline">
                      Learn more
                      <MoveRight className="" />
                    </Button>
                  </a>
                </div>
              </CardFooter>
            </Card>
            {/* <WobbleCard containerClassName="min-h-[65vh] h-full cursor-pointer bg-primary">
              <div className="grid grid-rows-2 h-full gap-3">
                <div className="p-6 row-span-1 flex flex-col">
                  <h3 className="text-xl lg:text-2xl text-white font-semibold tracking-tight">
                    Unsure about your path? Book a session with our career
                    expert for personalized guidance.
                  </h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-6" variant="outline">
                        Talk to counsellor
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-left mb-3">
                          Connect with a Career Counselor
                        </DialogTitle>
                      </DialogHeader>
                      <Contactform />
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="h-full row-span-1 p-3 flex items-end justify-center help"></div>
              </div>
            </WobbleCard> */}
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="pt-6 w-full">
            <FancyButton className="inline-flex items-center justify-center gap-3 border px-3 py-1 rounded-full text-sm shadow-sm bg-white">
              <span>
                <Medal className="h-4 w-4" />
              </span>
              <span>Premium learning experience</span>
            </FancyButton>
            <div className="mt-3">
              <h2 className="text-3xl font-semibold tracking-tight">
                Discover Why <span className="text-primary">We Stand Out</span>.
              </h2>
              <p className="mt-3 text-sm">
                Experience hands-on, work-based and project-based learning that
                gets you tech-ready.
              </p>
            </div>
            <div className="self-end">
              <Image
                src={pre}
                className="object-contain size-[100%]"
                alt="pre"
              />
            </div>
          </div>
          <div className="py-6 w-full flex flex-col gap-6 justify-between">
            <div className="relative max-w-sm">
              <div className="absolute z-0">
                <h2 className="text-7xl font-bold text-primary opacity-15">
                  01
                </h2>
              </div>
              <div className="relative z-10 pt-12 pl-6">
                <h3 className="text-xl font-semibold">
                  Engaging Learning Experience
                </h3>
                <p className="text-secondary-background text-sm">
                  Our programs make learning interactive, enjoyable, and highly
                  effective.
                </p>
                <div className="h-1 max-w-[30%] mt-3 bg-primary"></div>
              </div>
            </div>
            <div className="relative max-w-sm md:self-end">
              <div className="absolute z-0">
                <h2 className="text-7xl font-bold text-primary opacity-15">
                  02
                </h2>
              </div>
              <div className="relative z-10 pt-12 pl-6">
                <h3 className="text-xl font-semibold">Expert Mentors</h3>
                <p className="text-secondary-background text-sm">
                  Learn from experienced professionals who offer valuable
                  guidance and support.
                </p>
                <div className="h-1 max-w-[30%] mt-3 bg-primary"></div>
              </div>
            </div>
            <div className="relative max-w-sm">
              <div className="absolute z-0">
                <h2 className="text-7xl font-bold text-primary opacity-15">
                  03
                </h2>
              </div>
              <div className="relative z-10 pt-12 pl-6">
                <h3 className="text-xl font-semibold">Strong Alumni Network</h3>
                <p className="text-secondary-background text-sm">
                  Join a connected and supportive community of successful
                  alumni, helping you grow your career.
                </p>
                <div className="h-1 max-w-[30%] mt-3 bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <div className="">
        <div className="mx-auto max-w-7xl px-4 py-6 mt-6 flex flex-col items-center">
          <FancyButton className="inline-flex items-center justify-center gap-3 border px-3 py-1 rounded-full text-sm shadow-sm bg-white">
            <span>
              <Heart className="h-4 w-4" />
            </span>
            <span>Our happy students</span>
          </FancyButton>
          <div className="mt-3">
            <h2 className="text-3xl font-semibold tracking-tight text-center">
              What Our Alumni Says
              <span className="text-primary"> About Us</span>
            </h2>
          </div>
          <div className="mt-6 w-full">
            <div className=" rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
              <Moving items={testimonials} direction="right" speed="slow" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-6 mt-6 flex flex-col items-center">
          <FancyButton className="inline-flex items-center justify-center gap-3 border px-3 py-1 rounded-full text-sm shadow-sm bg-white">
            <span>
              <Handshake className="h-4 w-4" />
            </span>
            <span>Navigating Success Together</span>
          </FancyButton>
          <div className="mt-3">
            <h2 className="text-3xl text-center font-semibold tracking-tight">
              We lead you through
              <span className="text-primary"> every step</span>.
            </h2>
            <p className="mt-3 text-sm text-center">
              We guide you through every phase of your learning journey,
              providing support and resources to ensure your success.
            </p>
          </div>
          <div className="mt-6 w-full">
            <HoverEffect items={projects} />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-24 mt-3 flex flex-col lg:flex-row justify-center gap-6 lg:gap-12 items-center">
          <div className="flex gap-3 items-center">
            <div>
              <Mail className="size-6" />
            </div>
            <h3 className="text-sm lg:text-xl tracking-tight">
              Looking for help?{" "}
              <a
                href="/contactus"
                className="text-sm lg:text-xl font-semibold tracking-tight underline underline-offset-8"
              >
                Contact us today.
              </a>
            </h3>
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <MapPin className="size-6" />
            </div>
            <h3 className="text-sm lg:text-xl tracking-tight">
              Visit our nearest{" "}
              <a
                href="https://maps.app.goo.gl/Yypk1PTyU8ywLfzD8"
                target="_blank"
                className="text-sm lg:text-xl font-semibold tracking-tight underline underline-offset-8"
              >
                Branch.
              </a>
            </h3>
          </div>
        </div>
      </div>

      <div className="bg-secondary mx-3">
        <div className="mx-auto max-w-7xl px-4 relative flex justify-center w-full">
          <div className="absolute -top-16 w-full max-w-6xl rounded-md">
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>
                <div className="flex flex-wrap text-center items-center justify-center gap-3">
                  <span>Admission is open for the next batch</span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="text-secondary-foreground bg-white z-[100]"
                        variant="outline"
                      >
                        Get Started Now <ThumbsUp className="ml-2 size-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-left">
                          Book Your Free Demo Class
                        </DialogTitle>
                      </DialogHeader>
                      <BookNowForm />
                    </DialogContent>
                  </Dialog>

                  <span className="flex items-center gap-3">
                    <PhoneCall className="size-6" />
                    +91 9632036963
                  </span>
                </div>
              </GlowingStarsTitle>
            </GlowingStarsBackgroundCard>
          </div>
        </div>
      </div>
      <Footer cName={"pt-32"} />
    </main>
  );
};

export default Home;
