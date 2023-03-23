"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    console.log(router);
    console.log(searchParams);
  }, [router, searchParams]);
  return <>client</>;
};

export default Page;
