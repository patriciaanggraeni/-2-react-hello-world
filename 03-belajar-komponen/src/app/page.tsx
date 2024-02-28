import Image from "next/image";

// import komponen profile
import Profile from "../components/profile";

export default function Home() {
  return (

    // jawaban soal 1
    <main>
      <p className="mt-5 capitalize text-2xl flex justify-center">
        ilmuwan yang luar biasa
      </p>
      <div className="mt-3 flex justify-evenly items-center">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </main>
  );
}