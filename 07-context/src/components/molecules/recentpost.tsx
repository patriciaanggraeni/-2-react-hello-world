import Section2 from "@/components/atoms/section2";
import Heading from "@/components/atoms/heading";
import Post from "@/components/atoms/post";

export default function RecentPosts() {
    return (
        <Section2 isFancy={true}>
            <Heading>Postingan Terbaru</Heading>
            <Post title={"Cita rasa libon"}
                  body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
            <Post title={"Buenos Aires dalam irama tango"}
                  body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
        </Section2>
    );
}