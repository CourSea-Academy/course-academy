"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import supabase from "@/lib/supabaseConfig";
import emailjs from "emailjs-com";

const DownloadSyllabus = ({syllabusName}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const { toast } = useToast();

  const isValidPhoneNumber = (number) => {
    return /^[6-9]\d{9}$/.test(number);
  };

  const sendEmail = async () => {
    const templateParams = {
      user_name: name,
      user_phone: phoneNumber,
      time: new Date().toLocaleString(),
      to_email: "harishkumar.lks@gmail.com",
    };

    try {
      await emailjs.send(
        "service_o326kpb",
        "template_ezom04k",
        templateParams,
        "yrMD7uyDMa48tNM9L"
      );
      console.log("Email sent successfully");
      toast({ title: "Email sent successfully" });
    } catch (error) {
      console.error("Email sending failed", error);
    }
  };

  const downloadPdf = async () => {
    try {
     const { data } = supabase.storage
      .from("curriculum")
      .getPublicUrl(`${syllabusName}.pdf`);

      if (!data.publicUrl) {
        throw new Error("Failed to retrieve PDF URL");
      }

      const link = document.createElement("a");
      link.href = data.publicUrl;
      link.download = "syllabus.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // sendEmail();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Download failed",
        description: error.message,
      });
    }
  };

  const handleDownload = async () => {
    if (!name) {
      toast({
        variant: "destructive",
        title: "Invalid Input",
        description: "Please enter a valid name.",
      });
      return;
    }
    if (!isValidPhoneNumber(phoneNumber)) {
      setPhoneError("Please enter a valid phone number.");
      return;
    } else {
      setPhoneError("");
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from("syllabusDownloadedLeads")
        .insert([{ name, phone_number: phoneNumber }]);

      if (error) throw error;

      toast({ title: "Download started!" });
      downloadPdf();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[350px] flex flex-col justify-center font-semibold p-10">
      <h1 className="text-xl font-bold mb-4">Enter your details to download the syllabus</h1>
      <Input
        className="mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <Input
        className="mb-2"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
      />
      {phoneError && <p className="text-red-500 text-sm mb-4">{phoneError}</p>}
      <Button onClick={handleDownload} disabled={loading}>
        {loading ? "Processing..." : "Download Syllabus"}
      </Button>
    </div>
  );
};

export default DownloadSyllabus;
