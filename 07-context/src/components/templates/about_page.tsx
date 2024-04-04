import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export default function ProfilePage() {
    return (
        <Section2 isFancy={true}>
            <Heading>Profil saya</Heading>
            <Post 
                title={"Tentang saya"} 
                body={"Cuma manusia biasa yang ingin bisa ngoding"} />
            <AllPosts />
        </Section2>
    );
}