import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import BookCourse from "@/components/shared/BookCourse";
import { WobbleCard } from "./wobble-card";
import Image from "next/image";

const Courseslist = ({}) => {
  const careerProgram = [
  "All Courses",
  "Full Stack Web Development with AI",
  "Data Science with AI and Generative AI",
  "Data Analytics and Engineering",
  "Machine Learning and AI",
  "DevOps and Cloud Engineering",
  "Software Testing and Automations",
  "Others",
];

const courses = [
  {
    name: "Python",
    description:
      "A high-level, versatile programming language known for its readability and broad applicability in web development, data analysis, artificial intelligence, and more.",
    imageURL: { src: "/tools/python.png", alt: "Python" },
    urlPath: "python"
  },
  {
    name: "Java",
    description:
      "A robust, object-oriented programming language widely used for building enterprise-scale applications and Android development.",
    imageURL: { src: "/tools/java-icon.png", alt: "Java" },
    urlPath: "java"
  },
  {
    name: "Node.js and Express.js",
    description:
      "A runtime environment and framework for building fast, scalable network applications, particularly for server-side scripting and API development.",
    imageURL: { src: "/tools/node-express.png", alt: "Node and Express Js" },
    urlPath: "nodejs-and-expressjs"
  },
  {
    name: "SQL",
    description:
      "A domain-specific language used for managing and manipulating relational databases.",
    imageURL:  { src: "/tools/sql.png", alt: "SQL" },
    urlPath: "sql"
  },
  {
    name: "HTML and CSS",
    description:
      "The foundational technologies for creating and designing web pages, providing structure (HTML) and style (CSS).",
    imageURL: { src: "/tools/html-css.png", alt: "HTML and CSS" },
    urlPath: "html-and-css"
    },
  {
    name: "JavaScript",
    description:
      "A powerful scripting language that enables dynamic content on websites, widely used in both front-end and back-end development.",
    imageURL: { src: "/tools/js.png", alt: "JavaScript" },
    urlPath: "javascript"
  },
  {
    name: "React.js and React Native",
    description:
      "JavaScript libraries for building user interfaces, with React.js focused on web applications and React Native on mobile applications.",
    imageURL: { src: "/tools/react.png", alt: "React and React Native" },
    urlPath: "reactjs-and-react-native"
  },
  {
    name: "Next.js",
    description:
      "A React framework that enables server-side rendering and static site generation for fast, SEO-friendly web applications.",
    imageURL: { src: "/tools/nextjs.png", alt: "Python" },
    urlPath: "nextjs"
    },
  {
    name: "Angular",
    description:
      "A TypeScript-based framework for building dynamic single-page applications with a modular architecture.",
    imageURL: { src: "/tools/angular.png", alt: "Angular" },
    urlPath: "angular"
  },
  {
    name: "Excel and Spreadsheet",
    description:
      "Essential tools for data organization, analysis, and visualization, widely used in business and research.",
    imageURL: { src: "/tools/excel.png", alt: "Excel" },
    urlPath: "excel-and-spreadsheet"
  },
  {
    name: "Power BI",
    description:
      "A business analytics service by Microsoft for visualizing data and sharing insights across an organization.",
    imageURL: { src: "/tools/powerbi.png", alt: "Power BI" },
    urlPath: "power-bi"
  },
  {
    name: "Tableau",
    description:
      "A powerful data visualization tool used for converting raw data into an understandable format with graphs and dashboards.",
    imageURL: { src: "/tools/Tableau-symbol.png", alt: "Tableau" },
    urlPath: "tableau"
  },
  {
    name: "Alteryx",
    description:
      "A data analytics platform that offers data preparation, blending, and advanced analytics through a user-friendly interface.",
    imageURL: { src: "/tools/alteryx.png", alt: "Alteryx" },
    urlPath: "alteryx"
    },
  {
    name: "Machine Learning",
    description:
      "A subset of artificial intelligence focused on building systems that learn from and make decisions based on data.",
    imageURL: { src: "/tools/ml-icon.png", alt: "Machine Learning" },
    urlPath: "machine-learning"
  },
  {
    name: "Deep Learning",
    description:
      "An advanced form of machine learning that uses neural networks with many layers to model complex patterns in data.",
    imageURL: { src: "/tools/dl-icon.png", alt: "Deep Learning" },
    urlPath: "deep-learning"
  },
  {
    name: "NLP (Natural Language Processing)",
    description:
      "A field of AI that focuses on the interaction between computers and human language, enabling machines to understand and respond to text or speech inputs.",
    imageURL: { src: "/tools/nlp.png", alt: "Deep Learning" },
    urlPath: "nlp"
  },
  {
    name: "Manual Testing",
    description:
      "The process of manually testing software for defects without the use of automation tools.",
    imageURL: { src: "/tools/mt.png", alt: "Manual Testing" },
    urlPath: "manual-testing"
  },
  {
    name: "Automated Testing",
    description:
      "The use of specialized software tools to execute tests and compare actual outcomes with expected results.",
    imageURL: { src: "/tools/at.png", alt: "Automated Testing" },
    urlPath: "automated-testing"
    },
  {
    name: "Selenium",
    description:
      "A framework for automating web applications for testing purposes, supporting multiple browsers and platforms.",
    imageURL: { src: "/tools/selenium.png", alt: "Selenium" },
    urlPath: "selenium"
  },
  {
    name: "Kubernetes and Docker",
    description:
      "Tools for containerization and orchestration, enabling efficient deployment, scaling, and management of applications.",
    imageURL: { src: "/tools/docker-kubernetes.png", alt: "Docker and Kubernetes" },
    urlPath: "kubernetes-and-docker"
  },
  {
    name: "Linux",
    description:
      "An open-source operating system known for its stability, security, and flexibility, widely used in servers and development environments.",
    imageURL: { src: "/tools/linux.png", alt: "Linux" },
    urlPath: "linux"
  },
  {
    name: "Terraform",
    description:
      "An infrastructure as code tool that allows for safe and predictable creation, change, and versioning of infrastructure.",
    imageURL: { src: "/tools/terraform-icon.png", alt: "Terraform" },
    urlPath: "terraform"
  },
  {
    name: "Jenkins",
    description:
      "An open-source automation server that facilitates continuous integration and continuous delivery (CI/CD).",
    imageURL: { src: "/tools/jenkins-icon.png", alt: "Jenkins" },
    urlPath: "jenkins"
  },
  {
    name: "Ansible",
    description:
      "An open-source automation tool for IT tasks such as configuration management, application deployment, and task automation.",
    imageURL: { src: "/tools/ansible-icon.png", alt: "Ansible" },
    urlPath: "ansible"
  },
  {
    name: "AWS (Amazon Web Services)",
    description:
      "A comprehensive cloud platform offering a wide range of services for computing, storage, and networking.",
    imageURL: { src: "/tools/aws-icon.png", alt: "AWS" },
    urlPath: "aws"
  },
  {
    name: "Azure",
    description:
      "Microsoft's cloud computing platform providing a wide array of services including computing, analytics, storage, and networking.",
    imageURL: { src: "/tools/azure-icon.png", alt: "Azure" },
    urlPath: "azure"
  },
  {
    name: "GCP (Google Cloud Platform)",
    description:
      "A suite of cloud computing services offered by Google, including computing, data storage, and machine learning.",
    imageURL: { src: "/tools/gc-icon.png", alt: "GCP" },
    urlPath: "gcp"
  },
  {
    name: "DSA (Data Structures and Algorithms)",
    description:
      "Fundamental concepts in computer science focusing on the organization and manipulation of data for efficient processing.",
    imageURL: { src: "/tools/dsa.png", alt: "DSA" },
    urlPath: "dsa"
  },
  {
    name: "Git and GitHub",
    description:
      "Version control systems for tracking changes in source code and collaborating on software development projects.",
    imageURL: { src: "/tools/git.png", alt: "Git and Github" },
    urlPath: "git-and-github"
  },
];

  return (
    <div className="mt-6 grid lg:grid-cols-4 gap-6">
      {courses.map((c, cIndex) => (
        <WobbleCard
          key={cIndex}
          className="min-h-[45vh] h-full cursor-pointer bg-gray-100 flex flex-col items-center justify-between gap-4 p-6"
        >
          <div className="flex items-center justify-center h-20 w-20">
            <Image
              src={c.imageURL.src}
              alt={c.imageURL.alt}
              width={72}
              height={72}
              className="object-contain"
            />
          </div>

          <h3 className="text-lg font-semibold text-center h-12 flex items-center justify-center">
            {c.name}
          </h3>

          <p className="text-sm text-center h-24 overflow-hidden line-clamp-3">
            {c.description}
          </p>

          <div className="flex flex-col gap-2 w-full mt-auto">
            <a href={`/courses/${c.urlPath}`} className="w-full">
              <Button className="w-full h-10 border-primary" variant="outline">
                View Details
              </Button>
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full h-10">Enroll Now</Button>
              </DialogTrigger>
              <DialogContent>
                <BookCourse interest="Courses" />
              </DialogContent>
            </Dialog>
          </div>
        </WobbleCard>
      ))}
    </div>
  );
};

export default Courseslist;

