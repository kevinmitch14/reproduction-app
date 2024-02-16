import Link from "next/link";
import React from "react";

export default function page({ params }: { params: { num: string } }) {
  const next = Number(params.num) + 1;
  return (
    <div>
      <Link href={`/${next}`}>Page {next}</Link>
      <Link href={`/${params.num}/nested`}>Go to nested</Link>
    </div>
  );
}
