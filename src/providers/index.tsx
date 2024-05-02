"use client";

import { user } from "@/types";
import { createClient } from "@supabase/supabase-js";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const Appcontext = createContext<any>(undefined);

export function AppWripeer({ children }: { children: ReactNode }) {
  const [user, setuser] = useState<user | undefined>(undefined);
  const [loading, setloading] = useState<boolean>(false);
  const supabse = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
  useEffect(() => {
    const FechContextUser = async () => {
      try {
        setloading(true);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };
    FechContextUser();
  }, []);

  if (loading) {
    return <p>loading....</p>;
  }
  return <Appcontext.Provider value={{ user ,supabse}}>{children}</Appcontext.Provider>;
}

export const useAppContext = () => {
  return useContext(Appcontext);
};
