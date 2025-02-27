"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/frontend.svg"
            alt="Frontend icon"
            width={16}
            height={16}
          />
          Front-End Developer
        </a>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/arrow-back.svg"
            alt="Back icon"
            width={16}
            height={16}
          />
          Back
        </Link>
      </footer>
    </div>
  );
}
