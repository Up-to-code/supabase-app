import { EmailStatus, email } from "@/types";
import { emit } from "process";
import { useState } from "react";

export const useEmails = () => {
  const [Email, setEmail] = useState<email>({
    title: "a new email",
    content: "",
    emailStatus: EmailStatus[0],
  });
  return{
    emit ,
    setEmail
  }
};
