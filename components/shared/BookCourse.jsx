"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import supabase from "@/lib/supabaseConfig";

const courses = [
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
];

const BookCourse = ({ interest, program = "" }) => {
  const [lead, setLead] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    graduation: "",
    working: "",
    jobDomain: "",
    company: "",
    interest: "",
    course: "",
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const validateLead = (lead) => {
    const currentYear = new Date().getFullYear();
    console.log("****> ", lead, ' !lead.graduation?.trim() is ', !lead.graduation?.trim());
    if (!lead.fullName?.trim()) return "Full Name is required";
    if (!lead.email?.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(lead.email)) return "Invalid email format";
    if (!lead.phone?.trim()) return "Phone number is required";
    if (!/^\d{10}$/.test(lead.phone)) return "Phone number should be 10 digits";
    if (!lead.education?.trim()) return "Education is required";
    if (!lead.graduation?.trim()) return "Graduation details are required";
    if (!/^\d{4}$/.test(lead.graduation))
      return "Graduation year must be a 4-digit number";
    if (parseInt(lead.graduation, 10) > currentYear)
      return `Graduation year must be a valid year (<= ${currentYear})`;
    if (!lead.working?.trim()) return "Working status is required";
    if (lead.working === "Yes") {
      if (!lead.jobDomain?.trim()) return "Job domain is required";
      if (!lead.company?.trim()) return "Company name is required";
    }
    if (!lead.interest?.trim()) return "Interest is required";
    if (!lead.course?.trim()) return "Course selection is required";

    return "Success";
  };

  const handleForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (validateLead(lead) === "Success") {
      try {
        const { data, error } = await supabase.from("leads").insert([lead]);
        if (error) {
          console.error("Supabase Insert Error:", error);
          toast({ title: "Failed to submit, try again!", variant: "destructive" });
        } else {
          setLead({
            fullName: "",
            email: "",
            phone: "",
            education: "",
            graduation: "",
            working: "",
            jobDomain: "",
            company: "",
            interest: "",
            course: "",
          });}
        toast({
          title:
            "Booking Successful. We will reach out to you within 24 hours.",
          variant: "success",
        });
      } catch (e) {
        console.error("Error adding document: ", e);
        toast({
          title: "Uh oh! Something went wrong.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    } else {
      toast({
        title: validateLead(lead),
        variant: "destructive",
      });
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-4 w-full max-h-[70vh] h-full overflow-y-auto p-1 ">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name">Full Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Full Name"
          value={lead.fullName}
          onChange={(e) => setLead({ ...lead, fullName: e.target.value })}
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={lead.email}
          onChange={(e) => setLead({ ...lead, email: e.target.value })}
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          type="text"
          id="phone"
          placeholder="Phone Number"
          value={lead.phone}
          onChange={(e) => setLead({ ...lead, phone: e.target.value })}
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="education">Education Qualification (Eg. BE)</Label>
        <Input
          type="text"
          id="education"
          placeholder="Education Qualification"
          value={lead.education}
          onChange={(e) => setLead({ ...lead, education: e.target.value })}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-3 ">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="gradutaion">Gradutaion Year</Label>
          <Input
            type="text"
            id="gradutaion"
            placeholder="Gradutaion Year"
            value={lead.graduation}
            onChange={(e) => setLead({ ...lead, graduation: e.target.value })}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="working">Are you working?</Label>
          <Select onValueChange={(e) => setLead({ ...lead, working: e })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Are you working?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {lead.working === "Yes" ? (
        <>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="domain">Job Domain</Label>
            <Input
              type="text"
              id="domain"
              placeholder="Job Domain"
              value={lead.jobDomain}
              onChange={(e) => setLead({ ...lead, jobDomain: e.target.value })}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="company">Company</Label>
            <Input
              type="text"
              id="company"
              placeholder="Company"
              value={lead.company}
              onChange={(e) => setLead({ ...lead, company: e.target.value })}
            />
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="interest">Topic of Interest</Label>
        <div className="flex flex-col lg:flex-row gap-3">
          <Button
            className={
              lead.interest === "Career Program"
                ? "w-full border border-primary"
                : "w-full border"
            }
            variant="outline"
            onClick={() =>
              setLead({ ...lead, interest: "Career Program", course: "" })
            }
          >
            Career Program
          </Button>
          <Button
            className={
              lead.interest === "Courses"
                ? "w-full border border-primary"
                : "w-full border"
            }
            variant="outline"
            onClick={() =>
              setLead({ ...lead, interest: "Courses", course: "" })
            }
          >
            Courses
          </Button>
          <Button
            className={
              lead.interest === "Interview Prep"
                ? "w-full border border-primary"
                : "w-full border"
            }
            variant="outline"
            onClick={() =>
              setLead({ ...lead, interest: "Interview Prep", course: "" })
            }
          >
            Interview Prep
          </Button>
        </div>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="course">Course</Label>
        <Select onValueChange={(e) => setLead({ ...lead, course: e })}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Course" />
          </SelectTrigger>
          <SelectContent side="top">
            {lead.interest === "Career Program" ? (
              careerProgram?.map((cp, iCp) => (
                <SelectItem key={iCp} value={cp}>
                  {cp}
                </SelectItem>
              ))
            ) : lead.interest === "Courses" ? (
              courses?.map((c, iC) => (
                <SelectItem key={iC} value={c}>
                  {c}
                </SelectItem>
              ))
            ) : lead.interest === "Interview Prep" ? (
              interviewPrep?.map((ip, iIp) => (
                <SelectItem key={iIp} value={ip}>
                  {ip}
                </SelectItem>
              ))
            ) : (
              <></>
            )}
          </SelectContent>
        </Select>
      </div>
      <div className="sticky grid w-full items-center gap-1.5">
        <Button onClick={handleForm}>
          {loading ? (
            <LoaderCircle className="size-6 animate-spin text-white" />
          ) : (
            "Book Your Free Demo"
          )}
        </Button>
        <p className="text-xs">
          By continuing, I have read and agree to CourSea&apos;s{" "}
          <a href="/termandconditions" className="text-primary">
            Terms
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-primary">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )
};

export default BookCourse;