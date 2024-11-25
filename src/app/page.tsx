"use client";

import { useEffect } from "react";
import AppTable from "./table";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log(data);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     console.log(await res.json());
  //   })();
  // }, []);
  return (
    <div className="mt-2">
      <AppTable></AppTable>
    </div>
  );
}
