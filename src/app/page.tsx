"use client";

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

  if (!data) {
    return <>div.loading...</>;
  }

  console.log(data);
  return (
    <div className="mt-2">
      <AppTable blogs={data}></AppTable>
    </div>
  );
}
