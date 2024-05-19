import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <header className="px-4 py-2 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Image src="/logo.svg" alt="logo" width={60} height={60}></Image>
            <span className="text-2xl font-bold ml-2 font-serif">AiPractice</span>
          </div>

          <a href="#" title="" className="inline-flex items-center px-6 py-4 font-semibold text-black transition-all duration-200 rounded-full bg-green-300 hover:bg-green-400 focus:bg-green-400" role="button">
            登录
            <svg className="w-6 h-6 ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </div>
      </header>

      <section className="py-10 px-4 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-2 gap-12">
          <div>
            <p className="text-2xl font-semibold tracking-wider text-green-600">面向海外地区汉语学习者</p>
            <h1 className="mt-4 text-6xl font-bold text-black leading-normal">AI 驱动<br />个性化练习平台</h1>
            <p className="mt-4 text-xl text-black">旅游、贸易、文化交流 ...</p>

            <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 rounded-full bg-green-300 hover:bg-green-400 focus:bg-green-400" role="button">
              登录
              <svg className="w-6 h-6 ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>

          <div>
            <img className="w-full" src="hero-img.png" alt="" />
          </div>
        </div>
      </section>

    </main>
  );
}
