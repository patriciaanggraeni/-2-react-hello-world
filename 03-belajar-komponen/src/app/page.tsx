import Image from "next/image";

// import komponen profile
import Profile from "../components/profile";

// import komponen gallery
import { Gallery } from "@/components/gallery";

// import komponen bio
import Bio from '../components/jsx-rule'
import TodoList from "@/components/todolist";

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

        {/* <Gallery /> */}
      
        {/* <Bio /> */}
        
        <TodoList />

      </div>
    </main>
  );
}