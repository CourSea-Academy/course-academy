"use client";
import React, { useState } from "react";
import { FancyButton } from "@/components/shared/moving-border";
import { Handshake, Mail, Send, MapPin, PhoneCall } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/shared/Footer";
import supabase from "@/lib/supabaseConfig";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    if (!contact.fullName.trim()) return "Full Name is required";
    if (!contact.email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(contact.email)) return "Invalid email format";
    if (!contact.phone.trim()) return "Phone number is required";
    if (!/^[0-9]{10}$/.test(contact.phone)) return "Phone number must be 10 digits";
    if (!contact.message.trim()) return "Message is required";
    return "Success";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const validationMessage = validateForm();
    
    if (validationMessage !== "Success") {
      toast({ title: validationMessage, variant: "destructive" });
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.from("contacts").insert([contact]);
      if (error) {
        console.error("Supabase Insert Error:", error);
        toast({ title: "Failed to submit, try again!", variant: "destructive" });
      } else {
        setContact({ fullName: "", email: "", phone: "", message: "" });
        toast({ title: "Message sent successfully!", variant: "success" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({ title: "Uh oh! Something went wrong.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative mx-auto max-w-7xl p-4">
        <div className="grid lg:grid-cols-2 h-full w-full gap-3 py-9">
          <div>
            <FancyButton className="inline-flex items-center justify-center gap-3 border px-3 py-1 rounded-full text-sm shadow-sm bg-white">
              <Handshake className="h-4 w-4" />
              <span>Get in touch</span>
            </FancyButton>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-3">Contact Us</h1>
            <p className="mt-3 font-medium">Any question? We would be happy to help you</p>

            <div className="flex flex-col gap-6 mt-6">
              <div className="flex gap-3 items-center text-sm font-medium">
                <PhoneCall className="h-6 w-6" />
                <p className="text-base font-semibold">+91 9632036963</p>
              </div>
              <div className="flex gap-3 items-center text-sm font-medium">
                <Mail className="h-6 w-6" />
                <p className="text-base font-semibold">
                  <a href="mailto:info@Coursea.in">info@Coursea.in</a>
                </p>
              </div>
              <div className="flex gap-3 items-center text-sm font-medium">
                <MapPin className="h-6 w-6" />
                <p className="text-base font-semibold">
                  2nd floor, 67th cross, 12th Main Rd, Bashyam Circle, Rajajinagar, Bengaluru, Karnataka 560010
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 px-3 lg:px-6">
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Name" value={contact.fullName} onChange={(e) => setContact({ ...contact, fullName: e.target.value })} />
              </div>
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="w-full">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
                </div>
                <div className="w-full">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Phone Number" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Message" value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })} />
              </div>
              <div className="flex justify-end">
                <Button type="submit" size="lg" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"} <Send className="size-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer cName="pt-3" />
    </>
  );
};

export default ContactPage;
