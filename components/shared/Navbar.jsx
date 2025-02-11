import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cpu, Globe, PieChart, Workflow, Cloud, Megaphone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BookNowForm from "./booknowform";
// import Banner from "./banner";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-[500] bg-white w-full border-b">
      {/* <Banner /> */}
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex justify-between items-center">
          <div>
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
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center gap-2 text-sm font-medium leading-none text-foreground">
              <div>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        Career Programs
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[400px] gap-1 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          <a
                            href="/programs/full-stack-web-development-with-ai"
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex gap-3 items-center text-sm font-medium leading-none ">
                              <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                                <Globe className="h-6 w-6 " />
                              </div>
                              <div>
                                <p>Full Stack Web Development with AI</p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/programs/data-science-with-ai-and-generative-ai"
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex gap-3 items-center text-sm font-medium leading-none ">
                              <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                                <Cpu className="h-6 w-6" />
                              </div>
                              <div>
                                <p>Data Science with AI and Generative AI</p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/programs/data-analytics-and-engineering"
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex gap-3 items-center text-sm font-medium leading-none ">
                              <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                                <PieChart className="h-6 w-6" />
                              </div>
                              <div>
                                <p>Data Analytics and Engineering</p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/programs/software-testing-and-automations"
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex gap-3 items-center text-sm font-medium leading-none ">
                              <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                                <Workflow className="h-6 w-6" />
                              </div>
                              <div>
                                <p>Software Testing and Automations</p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/programs/devops-and-cloud-engineering"
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex gap-3 items-center text-sm font-medium leading-none ">
                              <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                                <Cloud className="h-6 w-6" />
                              </div>
                              <div>
                                <p>DevOps and Cloud Engineering</p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/programs/digital-marketing"
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex gap-3 items-center text-sm font-medium leading-none ">
                              <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                                <Megaphone className="h-6 w-6" />
                              </div>
                              <div>
                                <p>Digital Marketing with AI</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                <a href="/courses">Courses</a>
              </div>
              <div className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                <a href="/interviewprep">Interview Prep</a>
              </div>
              <div className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                <a href="/blogs">Blogs</a>
              </div>

              <div className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                <a href="/contactus">Contact Us</a>
              </div>
              <Separator orientation="vertical" className="h-5" />
              <div className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                <a href="/login">Login</a>
              </div>
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="border-primary" size="lg">
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
            </div>
          </div>
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <HamburgerMenuIcon className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="z-[600] sm:max-w-screen min-h-screen h-full w-full p-4">
                <SheetHeader>
                  <SheetTitle>
                    <SheetClose asChild>
                      <a href="/" className="flex gap-3 items-center">
                        <Image
                          src={Logo}
                          alt="CourSea Academy"
                          className="h-auto w-12"
                        />
                        <h3 className="flex flex-col">
                          <span className="text-xl font-bold bg-gradient-to-r from-[#00c6fb] via-[#005bea] to-[#005bea] inline-block text-transparent bg-clip-text">
                            CourSea
                          </span>{" "}
                          <span className="text-sm font-medium tracking-widest">
                            Academy
                          </span>
                        </h3>
                      </a>
                    </SheetClose>
                  </SheetTitle>
                  <div className="text-left pt-4">
                    <div className="flex flex-col text-foreground text-sm font-medium leading-none">
                      <div>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-foreground text-sm font-medium leading-none">
                              Career Programs
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col gap-1 max-h-[35vh] h-full overflow-y-auto">
                                <SheetClose asChild>
                                  <a
                                    href="/programs/full-stack-web-development-with-ai"
                                    className="group text-sm flex gap-3 items-center hover:bg-accent p-1 rounded-md cursor-pointer"
                                  >
                                    <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                                      <Globe className="h-6 w-6" />
                                    </div>
                                    <div>
                                      <p>Full Stack Web Development with AI</p>
                                    </div>
                                  </a>
                                </SheetClose>
                                <SheetClose asChild>
                                  <a
                                    href="/programs/data-science-with-ai-and-generative-ai"
                                    className="group text-sm flex gap-3 items-center hover:bg-accent p-1 rounded-md cursor-pointer"
                                  >
                                    <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                                      <Cpu className="h-6 w-6" />
                                    </div>
                                    <div>
                                      <p>
                                        Data Science with AI and Generative AI
                                      </p>
                                    </div>
                                  </a>
                                </SheetClose>

                                <SheetClose asChild>
                                  <a
                                    href="/programs/Data Analytics and Engineering"
                                    className="group text-sm flex gap-3 items-center hover:bg-accent p-1 rounded-md cursor-pointer"
                                  >
                                    <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                                      <PieChart className="h-6 w-6" />
                                    </div>
                                    <div>
                                      <p>Data Analytics and Engineering</p>
                                    </div>
                                  </a>
                                </SheetClose>

                                <SheetClose asChild>
                                  <a
                                    href="/programs/software-testing-and-automations"
                                    className="group text-sm flex gap-3 items-center hover:bg-accent p-1 rounded-md cursor-pointer"
                                  >
                                    <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                                      <Workflow className="h-6 w-6" />
                                    </div>
                                    <div>
                                      <p>Software Testing and Automations</p>
                                    </div>
                                  </a>
                                </SheetClose>

                                <SheetClose asChild>
                                  <a
                                    href="/programs/devops-and-cloud-engineering"
                                    className="group text-sm flex gap-3 items-center hover:bg-accent p-1 rounded-md cursor-pointer"
                                  >
                                    <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                                      <Cloud className="h-6 w-6" />
                                    </div>
                                    <div>
                                      <p>DevOps and Cloud Engineering</p>
                                    </div>
                                  </a>
                                </SheetClose>

                                <SheetClose asChild>
                                  <a
                                    href="/programs/devops-and-cloud-engineering"
                                    className="group text-sm flex gap-3 items-center hover:bg-accent p-1 rounded-md cursor-pointer"
                                  >
                                    <div className="border rounded-md p-3 bg-accent group-hover:bg-white group-hover:text-primary">
                                      <Megaphone className="h-6 w-6" />
                                    </div>
                                    <div>
                                      <p>Digital Marketing with AI</p>
                                    </div>
                                  </a>
                                </SheetClose>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>

                      <div className="py-4 border-b">
                        <SheetClose asChild>
                          <a href="/courses">Courses</a>
                        </SheetClose>
                      </div>

                      <div className="py-4 border-b">
                        <SheetClose asChild>
                          <a href="/interviewprep">Interview Prep</a>
                        </SheetClose>
                      </div>

                      <div className="py-4 border-b">
                        <SheetClose asChild>
                          <a href="/blogs">Blogs</a>
                        </SheetClose>
                      </div>

                      <div className="py-4 border-b">
                        <SheetClose asChild>
                          <a href="/contactus">Contact Us</a>
                        </SheetClose>
                      </div>

                      <div className="py-4">
                        <SheetClose asChild>
                          <a href="/login">Login</a>
                        </SheetClose>
                      </div>
                      <div className="py-2">
                        <SheetClose asChild>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="border-primary" size="lg">
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
                        </SheetClose>
                      </div>
                    </div>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
