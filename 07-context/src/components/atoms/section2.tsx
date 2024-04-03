import { LevelContext } from "@/utilities/context/my_context";
import { useContext } from "react";

export default function Section2({ childern, isFancy }: { 
    childern: any, 
    isFancy: boolean
}) {
    const level = useContext(LevelContext);
    return (
        <section className={'section' + (isFancy ? 'fancy' : '')}>
            <LevelContext.Provider value={level + 1}>
                {childern}
            </LevelContext.Provider>
        </section>
    );
}