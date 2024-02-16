import { Metadata } from "next";
import React from "react";
import axios from "axios";
import { unstable_noStore } from "next/cache";

async function getDataAxios() {
  console.log("Calling getDataAxios()");
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.data;
  return data;
}

async function getDataFetch() {
  console.log("getDataFetch()");
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  return data;
}

const cachedFn = React.cache(() => {
  console.log("CACHED axios");
  return getDataAxios();
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await getDataFetch();
  await getDataAxios();
  await cachedFn();
  return {
    title: data.title,
  };
}

export default async function RootLayout({ children }) {
  unstable_noStore();
  await getDataFetch();
  await getDataFetch();
  await getDataFetch();
  await getDataAxios();
  await getDataAxios();
  await getDataAxios();
  await cachedFn();
  await cachedFn();
  await cachedFn();
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
