import { Metadata } from "next";
import React from "react";

function getTime() {
  return new Date().getTime().toString();
}

async function getImage() {
  const t1 = performance.now();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const t2 = performance.now();
  console.log(t2 - t1);
  return "https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8";
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: getTime(),
    icons: [{ url: await getImage(), rel: "icon" }],
  };
}

export default async function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body style={{ border: "1px solid red" }}>
        Root layout
        {/* <img
          src="https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
          alt="Image"
        /> */}
        {children}
      </body>
    </html>
  );
}
