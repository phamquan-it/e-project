import Image from "next/image";
import { Inter } from "next/font/google";
import ExampleListContainer from "@/components/example/list/example-list.container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="  text-red-400">
        <ExampleListContainer/>
    </main>
  );
}
