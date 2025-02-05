// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { useToast } from "../ui/use-toast";
// import { auth, db } from "@/lib/firebaseConfig";
// import {
//   getAuth,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   PhoneAuthProvider,
// } from "firebase/auth";
// import { doc, setDoc, addDoc, collection } from "firebase/firestore";
// import supabase from "@/lib/supabaseConfig";

// const DownloadSyllabus = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [name, setName] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [timer, setTimer] = useState(60);
//   const { toast } = useToast();
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [recaptchaVerifier, setRecaptchaVerifier] = useState(null); // State for reCAPTCHA

//   useEffect(() => {
//     let countdown;
//     if (otpSent && timer > 0) {
//       countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
//     }
//     return () => clearInterval(countdown);
//   }, [otpSent, timer]);

//   useEffect(() => {
//     // Initialize reCAPTCHA only once when the component mounts
//     if (!recaptchaVerifier) {
//       const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
//         size: "invisible",
//         callback: (response) => {
//           // reCAPTCHA solved, proceed with phone authentication
//           // ...
//         },
//         "expired-callback": () => {
//           // reCAPTCHA expired, ask the user to solve it again
//           // ...
//         },
//       });
//       setRecaptchaVerifier(appVerifier);
//     }
//   }, []); // Run this effect only once
//   console.log("the confirmation result is ", confirmationResult);

//   const downloadPdf = async () => {
//     // Fetch the PDF file
//     const pdfUrl =
//       "https://uw9k7wcxtntqbfzn.public.blob.vercel-storage.com/c-curriculum-2gsznstir7o8F8fkwcbM1uJhb25IbS.df"; // Replace with your actual URL
//     const response = await fetch(pdfUrl);

//     if (!response.ok) {
//       throw new Error("Failed to fetch the PDF");
//     }

//     const blob = await response.blob();
//     const downloadUrl = URL.createObjectURL(blob);

//     // Trigger the download
//     const link = document.createElement("a");
//     link.href = downloadUrl;
//     link.download = "syllabus.pdf"; // Replace with the desired file name
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);

//     // Revoke the URL to free up memory
//     URL.revokeObjectURL(downloadUrl);
//   };

//   const dbTest = async () => {
//     const payload = {
//       name: name,
//       phone_number: phoneNumber,
//     };

//     const { data, error } = await supabase
//       .from("syllabusDownloadedLeads")
//       .insert([payload]);
//     console.log("the data while inserting is ", data, " the error is ", error);
//     if (error) {
//       toast({
//         variant: "destructive",
//         title: "Please try again later",
//         description: error.message,
//       });
//     }
//   };

//   const handlePhoneAuth = async () => {
//     try {
//       let payload = {
//         name: name,
//         phoneNumber: phoneNumber,
//       };
//       // await addDoc(collection(db, "syllabusDownloadedLeads"), payload);
//       // downloadPdf();
//       // toast({ title: "Download Successful!", description: "The syllabus PDF has been downloaded." });
//       dbTest();

//       // const phoneAuthProvider = new PhoneAuthProvider();
//       // const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
//       // setConfirmationResult(confirmationResult);
//       // setOtpSent(true);
//       // setTimer(60);
//       // toast({ title: "OTP sent successfully!", description: "Please check your phone." });
//     } catch (error) {
//       console.error("Error during phone authentication:", error);
//       toast({
//         variant: "destructive",
//         title: "Error sending OTP",
//         description: error.message,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOtpSubmit = async () => {
//     try {
//       if (!confirmationResult)
//         throw new Error("No confirmation result available");

//       const result = await confirmationResult.confirm(otp);
//       toast({
//         title: "OTP Verified!",
//         description: "You can now download the syllabus.",
//       });

//       // Save phone number and name to Firestore
//       await setDoc(doc(db, "syllabus-downloaded-leads"), {
//         name: name,
//         phoneNumber: phoneNumber,
//       });

//       // Logic to download the PDF
//       const link = document.createElement("a");
//       link.href = "/path/to/syllabus.pdf"; // Replace with the actual URL
//       link.download = "syllabus.pdf";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       toast({
//         variant: "destructive",
//         title: "Invalid OTP",
//         description: "Please try again.",
//       });
//     }
//   };

//   const handleEditPhoneNumber = () => {
//     setOtpSent(false);
//     setOtp("");
//   };

//   const handleResendOTP = async () => {
//     setLoading(true);
//     try {
//       if (!auth || !window.recaptchaVerifier)
//         throw new Error("Firebase or reCAPTCHA not initialized");

//       const formattedPhone = `+91${phoneNumber}`;
//       const result = await signInWithPhoneNumber(
//         auth,
//         formattedPhone,
//         window.recaptchaVerifier
//       );
//       setConfirmationResult(result);
//       setOtpSent(true);
//       setTimer(60);
//       toast({
//         title: "OTP resent successfully!",
//         description: "Please check your phone.",
//       });
//     } catch (error) {
//       console.error("Error resending OTP:", error);
//       toast({
//         variant: "destructive",
//         title: "Error resending OTP",
//         description: error.message,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-[425px] flex flex-col justify-center font-semibold p-10">
//       {!otpSent ? (
//         <div className="flex flex-col h-full justify-between">
//           <div className="gap-6">
//             <h1 className="text-xl font-bold mb-4">
//               Enter your details to download the syllabus
//             </h1>
//             <Input
//               className="mb-4"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Name"
//             />
//             <Input
//               className="mb-4"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               placeholder="Phone Number"
//             />
//           </div>
//           <div
//             id="recaptcha-container"
//             className="flex justify-center mb-4"
//           ></div>
//           <div className="w-full flex justify-center items-center">
//             <Button
//               onClick={handlePhoneAuth}
//               disabled={!name || !phoneNumber || loading}
//             >
//               {loading ? "Sending..." : "Send OTP"}
//             </Button>
//           </div>
//         </div>
//       ) : (
//         <div className="flex flex-col gap-4 items-center">
//           <h1 className="text-2xl font-bold">
//             We&apos;ve sent an OTP to +91 {phoneNumber}
//           </h1>
//           <InputOTP maxLength={6} value={otp} onChange={setOtp}>
//             <InputOTPGroup>
//               {[...Array(6)].map((_, i) => (
//                 <InputOTPSlot key={i} index={i} />
//               ))}
//             </InputOTPGroup>
//           </InputOTP>
//           {timer > 0 ? (
//             <p>Time remaining: {timer}s</p>
//           ) : (
//             <Button onClick={handleResendOTP}>Resend OTP</Button>
//           )}
//           <Button onClick={handleOtpSubmit} disabled={otp.length < 6}>
//             Verify OTP
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DownloadSyllabus;














"use client";
import React, { useState, useEffect } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import supabase from "@/lib/supabaseConfig";

const DownloadSyllabus = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const { toast } = useToast();

  useEffect(() => {
    let countdown;
    if (otpSent && timer > 0) {
      countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(countdown);
  }, [otpSent, timer]);

  const downloadPdf = async () => {
    const pdfUrl = "https://example.com/path/to/syllabus.pdf"; // Replace with your actual URL
    const response = await fetch(pdfUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch the PDF");
    }

    const blob = await response.blob();
    const downloadUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "syllabus.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(downloadUrl);
  };

  const dbTest = async () => {
    const payload = {
      name: name,
      phone_number: phoneNumber,
    };

    const { data, error } = await supabase
      .from("syllabusDownloadedLeads")
      .insert([payload]);

    if (error) {
      toast({
        variant: "destructive",
        title: "Please try again later",
        description: error.message,
      });
    }
  };

  const handleSendOTP = async () => {
    try {
      setLoading(true);
      const formattedPhone = `+91${phoneNumber}`;
      const { data, error } = await supabase.auth.signInWithOtp({
        phone: formattedPhone,
      });
      console.log("the data is ==> ", data, " the error is ", error);
      if (error) {
        toast({
          variant: "destructive",
          title: "Error sending OTP",
          description: error.message,
        });
        return;
      }
      setOtpSent(true);
      setTimer(60);
      toast({
        title: "OTP sent successfully!",
        description: "Please check your phone.",
      });
    } catch (error) {
      console.error("Error during OTP sending:", error);
      toast({
        variant: "destructive",
        title: "Error sending OTP",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      setLoading(true);
      const formattedPhone = `+91${phoneNumber}`;
      const { data, error } = await supabase.auth.verifyOtp({
        phone: formattedPhone,
        token: otp,
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Invalid OTP",
          description: error.message,
        });
        return;
      }

      toast({
        title: "OTP Verified!",
        description: "You can now download the syllabus.",
      });

      await dbTest();
      downloadPdf();
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast({
        variant: "destructive",
        title: "Invalid OTP",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEditPhoneNumber = () => {
    setOtpSent(false);
    setOtp("");
  };

  return (
    <div className="h-[425px] flex flex-col justify-center font-semibold p-10">
      {!otpSent ? (
        <div className="flex flex-col h-full justify-between">
          <div className="gap-6">
            <h1 className="text-xl font-bold mb-4">
              Enter your details to download the syllabus
            </h1>
            <Input
              className="mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <Input
              className="mb-4"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <Button
              onClick={handleSendOTP}
              disabled={!name || !phoneNumber || loading}
            >
              {loading ? "Sending..." : "Send OTP"}
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-2xl font-bold">
            We&apos;ve sent an OTP to +91 {phoneNumber}
          </h1>
          <InputOTP maxLength={6} value={otp} onChange={setOtp}>
            <InputOTPGroup>
              {[...Array(6)].map((_, i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
          {timer > 0 ? (
            <p>Time remaining: {timer}s</p>
          ) : (
            <Button onClick={handleSendOTP}>Resend OTP</Button>
          )}
          <Button onClick={handleVerifyOTP} disabled={otp.length < 6}>
            Verify OTP
          </Button>
        </div>
      )}
    </div>
  );
};

export default DownloadSyllabus;