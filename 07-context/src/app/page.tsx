"use client"

import MyApp from "@/components/atoms/my_app";
import MainPage from "@/components/templates/main_page";

export default function Home() {
  return <MyApp Component={MainPage} pageProps={undefined} />;
}