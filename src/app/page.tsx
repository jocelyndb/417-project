"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import {fadeRiseIn} from "@/api/animations";
import {SetStateAction, useState} from "react";

const titles = ["Great Job!", "Wow, so proud of you", "You're so good at clicking buttons!", "Okay, maybe that's enough",
    "Ok, you've had your fun", "You can stop clicking now", "PLEASE STOP", "I BEG YOU STOP CLICKING", "Fine.", "Whatever.",
    "I'm ignoring you", "  ", "  ", "     ", "Now you've done it.", "You don't know what's coming for you",
    "You should stop for your own good", "I'm warning you", "You've done it now.", ""];


export default function Home() {
    const [title, setTitle] = useState("Click for 417");
    const [secret, setSecret] = useState(false);

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className={"flex flex-col text-center items-center space-y-4"}>
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
                    <h2 className={"p-4 min-w-24 min-h max-w-md text-wrap text-lg rounded-lg border-2 border-neutral-500"}
                        onClick={() => setTitle(snarkyTitle(setSecret))}>{title}&#8203;</h2>
                    {secret &&
                        <h2 className={"p-4 min-w-3 max-w-md text-wrap text-lg rounded-lg border-2 border-black bg-neutral-900 text-white dark:invert"}>
                            Anticlimax
                        </h2>
                    }
                </div>
            </main>
        </div>
    );
}

let count = 0;

function snarkyTitle(secretStateHook: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }): string {
    if (count < titles.length) {
        return titles[count++];
    } else {
        secretStateHook(true);
        return titles[titles.length - 1];
    }
}