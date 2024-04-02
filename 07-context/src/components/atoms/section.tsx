"use client"
import { levelContext } from "@/utilities/context/my_context";

export default function Section({ level, children }: { level: number; children: any }) {
    return (
        <section className="section">
            <levelContext.Provider value={level}>
                {children}
            </levelContext.Provider>
        </section>
    );
}