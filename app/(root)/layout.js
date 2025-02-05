import React from "react";
import Navbar from "@/components/shared/Navbar";
import { MessageSquareMore } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Contactform from "@/components/shared/Contactform";
import Banner from "@/components/shared/banner";

const layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Dialog>
        <DialogTrigger asChild>
          <div className="m-3 z-[700] lg:m-6 fixed bottom-0 right-0 cursor-pointer">
            <div className="p-3 bg-primary text-white shadow-md rounded-md">
              <MessageSquareMore />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-left">Request a callback!</DialogTitle>
          </DialogHeader>
          <Contactform />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default layout;
