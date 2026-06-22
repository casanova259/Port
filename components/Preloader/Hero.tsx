"use client";

import { useRef } from "react";

export const Hero = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const footerItemsRef = useRef<HTMLParagraphElement[]>([]);

    return (
        <section
            className="relative w-full overflow-hidden bg-[#111111] text-[#f5f5f5]"
            // style={{ height: "100svh" }}
        >
            

            
        </section>
    );
};