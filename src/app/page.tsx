"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import {fadeRiseIn} from "@/api/animations";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <motion.div initial={"initial"} animate={"animate"} variants={fadeRiseIn}>
          <Image
          className="dark:invert"
          src="/signature.svg"
          alt="Jocelyn Baker"
          width={180}
          height={180}
          priority
          />
        </motion.div>
        <p className={"text-md"}>Let&apos;s get 417-ing!</p>
      </main>
    </div>
  );
}
