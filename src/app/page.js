"use client";
import { useRouter } from "next/navigation";
import Welcome from './components/Welcome';

export default function Home() {
   const router = useRouter();

   function passWelcomeView() {
      router.push("./about");
   }
   
  return (
   <main>
      <Welcome passWelcomeView={passWelcomeView}/>
   </main>
  )
}
