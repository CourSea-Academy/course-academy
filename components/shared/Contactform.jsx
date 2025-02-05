"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Send, LoaderCircle } from "lucide-react";
import { db } from "@/lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useToast } from "@/components/ui/use-toast";

const Contactform = () => {
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const validateContact = (lead) => {
    if (!lead.fullName?.trim()) {
      return "Full Name is required";
    }

    if (!lead.email?.trim()) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(lead.email)) {
      return "Email is invalid";
    }

    if (!lead.phone?.trim()) {
      return "Phone number is required";
    }

    if (lead.phone?.trim() && !/^\d{10}$/.test(lead.phone)) {
      return "Phone number should be 10 digits";
    }

    if (!lead.message?.trim()) {
      return "Message is required";
    }
    return "Success";
  };

  const handleForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (validateContact(contact) === "Success") {
      try {
        const docRef = await addDoc(collection(db, "contacts"), contact);
        setContact({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
        toast({
          title: "Thank you. We will reach out to you within 24 hours.",
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
        title: validateContact(contact),
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <div className="grid w-full items-center gap-6">
      <div className="flex flex-col space-y-1.5 w-full">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          placeholder="Name"
          value={contact.fullName}
          onChange={(e) => {
            setContact({ ...contact, fullName: e.target.value });
          }}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-3 w-full">
        <div className="flex flex-col space-y-1.5 w-full">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Email Address"
            value={contact.email}
            onChange={(e) => {
              setContact({ ...contact, email: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col space-y-1.5 w-full">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="Phone Number"
            value={contact.phone}
            onChange={(e) => {
              setContact({ ...contact, phone: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-1.5 w-full">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Message"
          value={contact.message}
          onChange={(e) => {
            setContact({ ...contact, message: e.target.value });
          }}
        />
      </div>
      <div className="flex justify-end">
        <Button
          onClick={handleForm}
          size="lg"
          className="flex justify-end gap-1 items-center"
        >
          <span>Send Message </span>
          {loading ? (
            <LoaderCircle className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Contactform;
