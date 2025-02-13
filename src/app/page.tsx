"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import {SetStateAction, useState} from "react";
import {fadeRiseIn} from "../api/animations";
import Button, {style} from "./components/button";

const titles = ["Great Job!", "Amazing click!", "Wow, so proud of you", "You're so good at clicking buttons!", "Okay, maybe that's enough",
    "You've had your fun", "You can stop clicking now", "PLEASE STOP", "I BEG YOU STOP CLICKING", "Fine.", "Whatever.",
    "I'm ignoring you", "  ", " ... ", "     ", "Now you've done it.", "You don't know what's coming for you",
    "You should stop for your own good", "I'm warning you", "You've done it now.", "You're gonna regret this", "Just you wait", "Congratulations!"];


export default function Home() {
    const [title, setTitle] = useState("Click for 417");
    const [secret, setSecret] = useState(false);
    const [start, setStart] = useState(Date.now());

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex row-start-2 items-center sm:items-start">
                <motion.div initial={"initial"} animate={"animate"} className={"flex flex-col gap-4 text-center items-center select-none"}>
                    <motion.div variants={fadeRiseIn}>
                        <Image
                            className="dark:invert"
                            src="/signature.svg"
                            alt="Jocelyn Baker"
                            width={180}
                            height={180}
                            priority
                        />
                    </motion.div>
                    <div className={"flex flex-col space-y-4 items-center"}>
                        <Button onClick={() => setTitle(snarkyTitle(setSecret, setStart))} variant={style.accent} className={"min-w-40"}>{title}</Button>
                        <Button onClick={() => setTitle(snarkyTitle(setSecret, setStart))} variant={style.secondary} className={"min-w-40"}>{title}</Button>
                        <Button onClick={() => setTitle(snarkyTitle(setSecret, setStart))} variant={style.main} className={"min-w-40"}>{title}</Button>
                        <Button onClick={() => setTitle(snarkyTitle(setSecret, setStart))} variant={style.square} className={"min-w-40"}>{title}</Button>
                        {secret &&
                            <motion.div className={"flex"} variants={fadeRiseIn}>
                                <Button>You have just wasted {((Date.now() - start)/1000).toFixed(0)} seconds</Button>
                            </motion.div>
                        }
                    </div>
                </motion.div>
            </main>
        </div>
    );
}

let count = 0;

function snarkyTitle(secretStateHook: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; },
                     timeHook: (value: (((prevState: number) => number) | number)) => void): string {
    if (count == 0) {
        timeHook(Date.now())
    }
    if (count < titles.length - 1) {
        return titles[count++];
    } else {
        secretStateHook(true);
        return titles[titles.length - 1];
    }
}
