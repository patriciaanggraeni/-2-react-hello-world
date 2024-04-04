import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export default function ProfilePage() {
    return (
        <Section2 isFancy={true}>
            <Heading>Profil saya</Heading>
            <h1>Patria Anggara Susilo Putra</h1>
            <h1>Nim: 2141720058</h1>
            <Post 
                title={"Hello traveller!"} 
                body={"Baca tentang petualangan saya"} />
            <AllPosts />
        </Section2>
    );
}