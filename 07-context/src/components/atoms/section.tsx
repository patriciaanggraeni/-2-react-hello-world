"use client"
import { levelContext } from "@/utilities/context/my_context";
import { useContext } from "react";

export default function Section({ children }: { children: any }) {
    const level = useContext(levelContext);

    return (
        <section className="section">
            <levelContext.Provider value={level}>
                {children}
            </levelContext.Provider>
        </section>
    );
}