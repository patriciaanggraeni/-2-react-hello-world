"use client"

import Tombol_1, { Tombol_2, Tombol_3 } from "@/component/button";
import Gallery from "@/component/gallery";
import Form from "@/component/form";

export default function Home() {
  return (
      <div>
          <div className="container mx-auto">
              <h2>Kuis Kota</h2>
              <Tombol_1/>
              <hr/>
              <hr/>
              <Tombol_2 isiPesan={"Ini pesanku"} namaTombol={"pesan"}/>
          </div>
          <br/><br/>
          <div className="bg-red-300" onClick={() => alert('Parent Element : Div')}>
              <Tombol_3 isiPesan={"Child Element : Tombol-1"} namaTombol={"Tombol-1"}/>
              <Tombol_3 isiPesan={"Child Element : Tombol-2"} namaTombol={"Tombol-2"}/>
          </div>
          <br/><br/>
          <Gallery/>
          <br/><br/>
          <Form />
      </div>
  );
}
