import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { MapPin, PhoneCall, Mail } from "lucide-react";
import { Button } from "../ui/button";
import facebook from "@/assets/social/facebook.png";
import github from "@/assets/social/github.png";
import twitter from "@/assets/social/twitter.png";
import instagram from "@/assets/social/instagram.png";
import Linkedin from "@/assets/social/linkedin.png";
import youtube from "@/assets/social/youtube.png";
import whatsapp from "@/assets/social/whatsapp.png";
import pinterest from "@/assets/social/pinterest.png";

const Footer = ({ cName }) => {
  return (
    <footer className="bg-gray-100 pb-6">
      <div className={`mx-auto max-w-7xl px-4  ${cName}`}>
        <div className="my-6">
          <a href="/" className="flex gap-3 items-center">
            <Image src={Logo} alt="CourSea Academy" className="h-auto w-12" />
            <h3 className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-[#00c6fb] via-[#005bea] to-[#005bea] inline-block text-transparent bg-clip-text">
                CourSea
              </span>{" "}
              <span className="text-sm font-medium tracking-widest">
                Academy
              </span>
            </h3>
          </a>
          <p className="mt-3 text-xs sm:text-sm ml-3">
            Proudly Powered by <span className="font-bold">Passion</span>
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-6 my-6">
          <div className="">
            <h3 className="text-lg font-semibold tracking-tight">
              Career Programs
            </h3>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2"
                  href="/programs/full-stack-web-development-with-ai"
                >
                  Full Stack Web Development with AI
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2"
                  href="/programs/data-science-with-ai-and-generative-ai"
                >
                  Data Science with AI and Generative AI
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2"
                  href="/programs/data-analytics-and-engineering"
                >
                  Data Analytics and Engineering
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2"
                  href="/programs/software-testing-and-automations"
                >
                  Software Testing and Automations
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2"
                  href="/programs/devops-and-cloud-engineering"
                >
                  DevOps and Cloud Engineering
                </a>
              </p>
            </div>
          </div>

          <div className="">
            <h3 className="text-lg font-semibold tracking-tight">Company</h3>
            <div className="mt-3 grid space-y-3 text-sm">
              {/* <p>
                <a className="inline-flex gap-x-2" href="#">
                  About us
                </a>
              </p>
              <p>
                <a className="inline-flex gap-x-2" href="">
                  Blog
                </a>
              </p> */}
              <p>
                <a className="inline-flex gap-x-2" href="/contactus">
                  Careers
                </a>{" "}
                <span className="inline text-blue-600">
                  — We&apos;re hiring
                </span>
              </p>
              <p>
                <a className="inline-flex gap-x-2" href="/contactus">
                  Help & Support
                </a>
              </p>
              <p>
                <a className="inline-flex gap-x-2" href="/termandconditions">
                  Terms of Use
                </a>
              </p>
              <p>
                <a className="inline-flex gap-x-2" href="/privacy">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold tracking-tight">
              For Business
            </h3>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a className="inline-flex gap-x-2" href="/contactus">
                  Hire from us
                </a>
              </p>
              <p>
                <a className="inline-flex gap-x-2" href="/contactus">
                  Corporate training
                </a>
              </p>
            </div>
          </div>

          <div className="">
            <h3 className="text-lg font-semibold tracking-tight">Contact Us</h3>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2"
                  href="https://maps.app.goo.gl/WCk3e7xTUnPKJsLWA"
                  target="_blank"
                >
                  <MapPin className="size-6" />
                  278, Dr Rajkumar Road, 12th Main, Near-67th Cross,
                  <br />
                  Rajaji Nagar 5th Block, Bengaluru, Karnataka 560010
                </a>
              </p>
              <p>
                <a className="inline-flex gap-x-2" href="tel:+919632036963">
                  <PhoneCall className="size-6" />
                  +91 9632036963
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2"
                  href="mailto:info@coursea.in"
                >
                  <Mail className="size-6" />
                  info@coursea.in
                </a>
              </p>
            </div>
          </div>
        </div>
        <Separator className="my-3" />
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          <div className="col-span-2">
            <h3 className="text-lg font-semibold tracking-tight">Courses</h3>
            <div className="flex flex-wrap max-w-3xl items-center gap-3 mt-3">
              <a
                href="/courses/python"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Python
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/java"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Java
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/nodejs-and-expressjs"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Nodejs and Expressjs
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/sql"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                SQL
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/html-and-css"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                HTML and CSS
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/javascript"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                JavaScript
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/reactjs-and-react-native"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Reactjs and React Native
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/angular"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Angular
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/nextjs"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Nextjs
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/powerbi"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Power BI
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/excel"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Excel
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/alteryx"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Alteryx
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/machine-learning"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Machine Learning
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/deep-learning"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Deep Learning
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/nlp"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                NLP
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/manual-testing"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Manual testing
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/automated-testing"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Automated testing
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/selenium"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Selenium
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/kubernetes-and-docker"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Kubernetes and Docker
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/linux"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Linux
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/terraform"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Terraform
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/jenkins"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Jenkins
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/ansible"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Ansible
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/aws"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                AWS
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/azure"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Azure
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/gcp"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                GCP
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/dsa"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                DSA
              </a>
              <Separator className="h-5" orientation="vertical" />
              <a
                href="/courses/git-and-github"
                className="text-xs lg:text-sm font-medium leading-none"
              >
                Git and Github
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight">Follow us</h3>
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <a
                href="https://www.facebook.com/people/CourSea-Academy/61561932874054/"
                className="p-2 rounded-md h-9 w-9"
                target="_blank"
              >
                <Image src={facebook} className="h-4 w-4" alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/CourSea/"
                className="p-2 rounded-md h-9 w-9"
                target="_blank"
              >
                <Image src={instagram} className="h-4 w-4" alt="instagram" />
              </a>
              <a
                href="https://wa.me/9632036963"
                target="_blank"
                className="p-2 rounded-md h-9 w-9"
              >
                <Image src={whatsapp} className="h-4 w-4" alt="whatsapp" />
              </a>
              <a href="" className="p-2 rounded-md h-9 w-9">
                <Image src={twitter} className="h-4 w-4" alt="twitter" />
              </a>
              <a href="" className="p-2 rounded-md h-9 w-9">
                <Image src={Linkedin} className="h-4 w-4" alt="Linkedin" />
              </a>
              <a
                href="https://www.youtube.com/@CourSeaAcademy"
                target="_blank"
                className="p-2 rounded-md h-9 w-9"
              >
                <Image src={youtube} className="h-4 w-4" alt="youtube" />
              </a>
            </div>
            <h3 className="text-sm mt-6">
              © 2024 CourSea Academy is Proudly Powered by{" "}
              <span className="font-bold">Passion</span>
            </h3>
          </div>
        </div>
        <div className="flex justify-end mt-3 text-sm"></div>
      </div>
    </footer>
  );
};

export default Footer;
