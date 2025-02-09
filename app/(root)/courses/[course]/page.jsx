import React from "react";
import { HeroHighlight, Highlight } from "@/components/shared/hero-highlight";
import { Button } from "@/components/ui/button";
import { FancyButton } from "@/components/shared/moving-border";
import BookCourse from "@/components/shared/BookCourse";
import DownloadSyllabus from "@/components/shared/DownloadSyllabus";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import pre1 from "@/assets/pre1.png";
import pre3 from "@/assets/pre3.png";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RolesCanBeApplied from "@/components/shared/RolesCanBeApplied";
import gitData from "@/data/Git and GitHub.json";
import alteryxData from "@/data/Alteryx.json";
import angularData from "@/data/Angular.json";
import ansibleData from "@/data/Ansible.json";
import automatedTestingData from "@/data/Automated Testing.json";
import awsData from "@/data/AWS.json";
import sqlData from "@/data/SQL.json";
import azureData from "@/data/Azure.json";
import deepLearningData from "@/data/Deep Learning.json";
import dsaData from "@/data/DSA.json";
import excelAndSpreadsheetData from "@/data/Excel and Spreadsheet.json";
import gcpData from "@/data/GCP.json";
import htmlAndCss from "@/data/HTML and CSS.json";
import javaData from "@/data/Java.json";
import javaScriptData from "@/data/JavaScript.json";
import jenkinsData from "@/data/Jenkins.json";
import kubernetesAndDockerData from "@/data/Kubernetes and Docker.json";
import linuxData from "@/data/Linux.json";
import machineLearningData from "@/data/Machine Learning.json";
import manualTestingData from "@/data/Manual Testing.json";
import nextJsData from "@/data/Nextjs.json";
import nlpData from "@/data/NLP.json";
import nodejsAndExpressjsData from "@/data/Nodejs and Expressjs.json";
import powerBIData from "@/data/Power BI.json";
import pythonData from "@/data/Python.json";
import reactjsAndReactNativeData from "@/data/Reactjs and React Native.json";
import tableauData from "@/data/Tableau.json";
import terraformData from "@/data/Terraform.json";
import seleniumData from "@/data/Selenium.json";

export function generateMetadata({ params }) {
  if (decodeURI(params.course) === "python") {
    return {
      title: "Python Training in Bangalore | CourSea Academy",
      description:
        "Learn Python programming at CourSea Academy in Bangalore. Master coding, automation, and data analysis with hands-on projects.",
    };
  } else if (decodeURI(params.course) === "java") {
    return {
      title: "Java Training in Bangalore | CourSea Academy",
      description:
        "Learn Java programming at CourSea Academy in Bangalore. Master object-oriented concepts, advanced Java, and backend development techniques.",
    };
  } else if (decodeURI(params.course) === "nodejs-and-expressjs") {
    return {
      title: "Node.js and Express.js Training in Bangalore",
      description:
        "Learn Node.js and Express.js at CourSea Academy in Bangalore. Build server-side applications and RESTful APIs with hands-on projects.",
    };
  } else if (decodeURI(params.course) === "sql") {
    return {
      title: "SQL Training in Bangalore | CourSea Academy",
      description:
        "Master SQL with CourSea Academy in Bangalore. Learn database management, queries, and optimization techniques with real-world applications.",
    };
  } else if (decodeURI(params.course) === "html-and-css") {
    return {
      title: "HTML and CSS Training in Bangalore | CourSea Academy",
      description:
        "Learn web design fundamentals with HTML and CSS at CourSea Academy in Bangalore. Build responsive and visually appealing websites.",
    };
  } else if (decodeURI(params.course) === "javascript") {
    return {
      title: "JavaScript Training in Bangalore | CourSea Academy",
      description:
        "Master JavaScript at CourSea Academy in Bangalore. Learn dynamic programming, DOM manipulation, and web app development.",
    };
  } else if (decodeURI(params.course) === "reactjs-and-react-native") {
    return {
      title: "ReactJS and React Native Training in Bangalore",
      description:
        "Learn ReactJS and React Native at CourSea Academy in Bangalore. Build dynamic web and mobile applications with real-world projects.",
    };
  } else if (decodeURI(params.course) === "nextjs") {
    return {
      title: "Next.js Training in Bangalore | CourSea Academy",
      description:
        "Advance your skills with Next.js training at CourSea Academy in Bangalore. Build modern web applications with hands-on learning.",
    };
  } else if (decodeURI(params.course) === "angular") {
    return {
      title: "Angular Course in Bangalore | CourSea Academy",
      description:
        "Learn Angular development at CourSea Academy in Bangalore. Master front-end skills with expert trainers and practical projects.",
    };
  } else if (decodeURI(params.course) === "excel") {
    return {
      title: "Advanced Excel Training in Bangalore | CourSea Academy",
      description:
        "Gain expertise in Advanced Excel at CourSea Academy in Bangalore. Learn formulas, pivot tables, and data analysis techniques with practical learning.",
    };
  } else if (decodeURI(params.course) === "powerbi") {
    return {
      title: "Power BI Training in Bangalore | CourSea Academy",
      description:
        "Master Power BI with CourSea Academy in Bangalore. Learn to create dynamic dashboards, reports, and data visualizations with expert trainers.",
    };
  } else if (decodeURI(params.course) === "tableau") {
    return {
      title: "Tableau",
      description:
        "Master Tableau for data visualization and creating insightful, interactive reports and dashboards.",
    };
  } else if (decodeURI(params.course) === "alteryx") {
    return {
      title: "Alteryx Training in Bangalore | CourSea Academy",
      description:
        "Master data analytics and automation with Alteryx at CourSea Academy in Bangalore. Learn data blending, preparation, and reporting.",
    };
  } else if (decodeURI(params.course) === "machine-learning") {
    return {
      title: "Machine Learning Training in Bangalore | CourSea Academy",
      description:
        "Learn machine learning concepts and algorithms at CourSea Academy in Bangalore. Gain expertise with Python, regression, and classification projects.",
    };
  } else if (decodeURI(params.course) === "deep-learning") {
    return {
      title: "Deep Learning Training in Bangalore | CourSea Academy",
      description:
        "Master deep learning techniques at CourSea Academy in Bangalore. Learn neural networks, TensorFlow, and PyTorch with real-world projects.",
    };
  } else if (decodeURI(params.course) === "nlp") {
    return {
      title: "NLP Training in Bangalore | CourSea Academy",
      description:
        "Master deep learning techniques at CourSea Academy in Bangalore. Learn neural networks, TensorFlow, and PyTorch with real-world projects.",
    };
  } else if (decodeURI(params.course) === "manual-testing") {
    return {
      title: "Manual Testing Course in Bangalore | CourSea Academy",
      description:
        "Learn manual testing techniques at CourSea Academy in Bangalore. Master test case writing, bug reporting, and QA fundamentals with expert trainers.",
    };
  } else if (decodeURI(params.course) === "selenium") {
    return {
      title: "Selenium Training in Bangalore | CourSea Academy",
      description:
        "Learn Selenium at CourSea Academy in Bangalore. Master automation testing, test scripts, and frameworks with hands-on projects.",
    };
  } else if (decodeURI(params.course) === "kubernetes-and-docker") {
    return {
      title: "Kubernetes and Docker Training in Bangalore | CourSea",
      description:
        "Master Kubernetes and Docker at CourSea Academy in Bangalore. Learn container orchestration, deployment, and management techniques.",
    };
  } else if (decodeURI(params.course) === "linux") {
    return {
      title: "Linux Training in Bangalore | CourSea Academy",
      description:
        "Learn Linux administration at CourSea Academy in Bangalore. Master shell scripting, system configuration, and server management.",
    };
  } else if (decodeURI(params.course) === "terraform") {
    return {
      title: "Terraform Training in Bangalore | CourSea Academy",
      description:
        "Learn Terraform at CourSea Academy in Bangalore. Master infrastructure automation, configuration management, and deployment processes.",
    };
  } else if (decodeURI(params.course) === "jenkins") {
    return {
      title: "Jenkins Training in Bangalore | CourSea Academy",
      description:
        "Master Jenkins at CourSea Academy in Bangalore. Learn continuous integration and delivery (CI/CD) with hands-on experience in real-world projects.",
    };
  } else if (decodeURI(params.course) === "ansible") {
    return {
      title: "Ansible Training in Bangalore | CourSea Academy",
      description:
        "Learn Ansible at CourSea Academy in Bangalore. Master automation, configuration management, and deployment with live projects.",
    };
  } else if (decodeURI(params.course) === "aws") {
    return {
      title: "AWS Training in Bangalore | CourSea Academy",
      description:
        "Learn AWS at CourSea Academy in Bangalore. Master cloud computing, deployment, and storage solutions with hands-on projects.",
    };
  } else if (decodeURI(params.course) === "azure") {
    return {
      title: "Azure Training in Bangalore | CourSea Academy",
      description:
        "Learn Azure cloud services at CourSea Academy in Bangalore. Master deployment, automation, and security solutions with live projects.",
    };
  } else if (decodeURI(params.course) === "gcp") {
    return {
      title: "GCP Training in Bangalore | CourSea Academy",
      description:
        "Learn Google Cloud Platform at CourSea Academy in Bangalore. Master cloud solutions, machine learning, and deployment tools with live projects.",
    };
  } else if (decodeURI(params.course) === "dsa") {
    return {
      title: "DSA Training in Bangalore | CourSea Academy",
      description:
        "Master Data Structures and Algorithms (DSA) at CourSea Academy in Bangalore. Learn problem-solving techniques to excel in coding interviews.",
    };
  } else if (decodeURI(params.course) === "git-and-github") {
    return {
      title: "Git and GitHub Course in Bangalore | CourSea Academy",
      description:
        "Learn Git and GitHub in Bangalore with CourSea Academy. Master version control and collaborative coding with hands-on projects and expert guidance.",
    };
  }
}

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

const page = ({ params }) => {
  let data;
  if (decodeURI(params.course) === "python") {
    data = pythonData;
  } else if (decodeURI(params.course) === "java") {
    data = javaData;
  } else if (decodeURI(params.course) === "nodejs-and-expressjs") {
    data = nodejsAndExpressjsData;
  } else if (decodeURI(params.course) === "sql") {
    data = sqlData;
  } else if (decodeURI(params.course) === "html-and-css") {
    data = htmlAndCss;
  } else if (decodeURI(params.course) === "javascript") {
    data = javaScriptData;
  } else if (decodeURI(params.course) === "reactjs-and-react-native") {
    data = reactjsAndReactNativeData;
  } else if (decodeURI(params.course) === "nextjs") {
    data = nextJsData;
  } else if (decodeURI(params.course) === "angular") {
    data = angularData;
  } else if (decodeURI(params.course) === "excel") {
    data = excelAndSpreadsheetData;
  } else if (decodeURI(params.course) === "powerbi") {
    data = powerBIData;
  } else if (decodeURI(params.course) === "tableau") {
    data = tableauData;
  } else if (decodeURI(params.course) === "alteryx") {
    data = alteryxData;
  } else if (decodeURI(params.course) === "machine-learning") {
    data = machineLearningData;
  } else if (decodeURI(params.course) === "deep-learning") {
    data = deepLearningData;
  } else if (decodeURI(params.course) === "nlp") {
    data = nlpData;
  } else if (decodeURI(params.course) === "manual-testing") {
    data = manualTestingData;
  } else if (decodeURI(params.course) === "selenium") {
    data = seleniumData;
  } else if (decodeURI(params.course) === "kubernetes-and-docker") {
    data = kubernetesAndDockerData;
  } else if (decodeURI(params.course) === "linux") {
    data = linuxData;
  } else if (decodeURI(params.course) === "terraform") {
    data = terraformData;
  } else if (decodeURI(params.course) === "jenkins") {
    data = jenkinsData;
  } else if (decodeURI(params.course) === "ansible") {
    data = ansibleData;
  } else if (decodeURI(params.course) === "aws") {
    data = awsData;
  } else if (decodeURI(params.course) === "azure") {
    data = azureData;
  } else if (decodeURI(params.course) === "gcp") {
    data = gcpData;
  } else if (decodeURI(params.course) === "dsa") {
    data = dsaData;
  } else if (decodeURI(params.course) === "reactjs-and-react-native") {
    data = reactjsAndReactNativeData;
  } else if (decodeURI(params.course) === "deep-learning") {
    data = deepLearningData;
  } else if (decodeURI(params.course) === "automated-testing") {
    data = automatedTestingData;
  } else {
    data = gitData;
  }

  return (
    <div>
      <div id="recaptcha-container"></div>
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
              {/* <p className="flex items-center gap-1 text-2xl font-bold max-w-4xl leading-relaxed lg:leading-snug mt-6">
                <span>Price:</span>
                <IndianRupee />
                <span className="">{data.price}</span>
              </p> */}
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

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="border-primary"
                      size="lg"
                      variant="outline"
                    >
                      Download Syllabus
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="min-w-[725px] min-h-[425px]">
                    <DownloadSyllabus syllabusName={decodeURI(params.course)}/>
                  </DialogContent>
                </Dialog>
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
            <div className="w-full h-full p-3 hidden lg:block">
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

      <div className="bg-accent text-black max-w-full min-h-[4rem] flex items-center">
        <div className="mx-auto flex max-w-7xl">
          <div className="w-1/2  justify-center items-center sm:block hidden">
            <Image
              src={pre3}
              alt="download-curriculum"
              className="max-h-60 w-auto object-fill"
            />
          </div>
          <div id="recaptcha-container"></div>

          <div className="w-full sm:w-0.75/2 flex flex-col justify-center mt-12 sm:mt-0 sm:items-start items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="border-primary" size="lg">
                  Download Curriculum
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[400px] min-h-[425px] p-0">
                <DownloadSyllabus syllabusName={decodeURI(params.course)}/>
              </DialogContent>
            </Dialog>
            <div className="sm:px-3 py-3">
              <p className="mt-2 text-sm text-gray-700 max-w-md">
                Discover everything you need to know about our program. The
                curriculum includes in-depth course details, key learning
                outcomes, and how it can accelerate your career growth. Download
                now and take the first step toward achieving your goals!
              </p>
            </div>
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
