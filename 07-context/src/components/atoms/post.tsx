import Heading from "@/components/atoms/heading";
import Section2 from "@/components/atoms/section2";

export default function Post({ title, body }: {
    title: string,
    body: string
}) {
    return (
        <div>
            <Section2 isFancy={true}>
                <Heading>
                    {title}
                </Heading>
                <p><i>{body}</i></p>
            </Section2>
        </div>
    );
}
