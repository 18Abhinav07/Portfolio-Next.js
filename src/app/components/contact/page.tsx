"use client";

import SmoothScrolling from "@/app/utils/smoothScrolling";
import { ContactLinks } from "./utils/contact-links";
import TerminalContactForm from "./utils/terminal-contact-form";

export default function Contact() {
    return (
        <>
            <SmoothScrolling />
            <section className="w-[100vw] min-h-[100vh] bg-gradient-to-tr from-zinc-900 via-zinc-700 to-zinc-800">
                <TerminalContactForm />
                <ContactLinks />
            </section>
        </>
    )

}