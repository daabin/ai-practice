import Image from "next/image";
import LoginLink from "@/components/LoginLink";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <header className="px-4 py-2 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Image src="/logo.svg" alt="logo" width={60} height={60}></Image>
            <span className="text-2xl font-bold ml-2 font-serif">AiPractice</span>
          </div>
          <LoginLink></LoginLink>
        </div>
      </header>

      <section className="py-10 px-4 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-2 gap-12">
          <div className="mb-4">
            <p className="text-2xl font-semibold tracking-wider text-green-600">面向海外地区汉语学习者</p>
            <h1 className="mt-4 text-6xl font-bold text-black leading-normal">AI 驱动<br />个性化练习平台</h1>
            <p className="mt-4 text-xl text-black mb-6">旅游、贸易、文化交流 ...</p>
            <LoginLink></LoginLink>
          </div>
          <div>
            <img className="w-full" src="hero-img.png" alt="" />
          </div>
        </div>
      </section>

    </main>
  );
}
