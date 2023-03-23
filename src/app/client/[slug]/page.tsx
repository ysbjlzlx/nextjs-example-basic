"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface Params {
  slug: string;
}

const Page = ({ params }: { params: Params }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    console.log(router);
    console.log(searchParams);
    console.log(params);
  }, [router, searchParams, params]);
  return <>client</>;
};

export default Page;
