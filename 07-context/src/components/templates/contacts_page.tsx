import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export default function ProfilePage() {
    return (
        <Section2 isFancy={true}>
            <Heading>Kontak saya</Heading>
            <Post 
                title={"Nomor Telepon"} 
                body={"089544466332"} />
            <AllPosts />
        </Section2>
    );
}