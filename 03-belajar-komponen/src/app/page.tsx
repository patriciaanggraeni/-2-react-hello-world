import Image from "next/image";

// import komponen profile
import Profile from "../components/profile";

// import komponen gallery
import { Gallery } from "@/components/gallery";

// import komponen bio
import Bio from '../components/jsx-rule'
import TodoList from "@/components/todolist";
import MyGallery from "@/components/mygallery";
import MyProfile from "@/components/myprofiletwo";
import MyProfileV2 from "@/components/myprofilev2";

export default function Home() {
  return (

    <main>
      {/* <p className="mt-5 capitalize text-2xl flex justify-center">
        ilmuwan yang luar biasa
      </p> */}
      <div className="mt-3">
        {/* <Profile /> */}
        {/* <Profile /> */}
        {/* <Profile /> */}
        {/* <Bio /> */}
        {/* <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
        <hr/>
        <Gallery />
        <hr/>
        <TodoList /> */}
        {/* <MyGallery /> */}
        {/* <MyProfile /> */}
        <MyProfileV2 />
      </div>
    </main>
  );
}