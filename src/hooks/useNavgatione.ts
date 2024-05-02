"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useState } from "react";

export const useNavgatione = () => {
  const [open, setopen] = useState<boolean>(false);
  const [active, setactive] = useState<string>("");
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  return {
    open,
    setopen,
    active,
    setactive,
    router,
    params,
    searchParams,
    pathname,
  };
};
