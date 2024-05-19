export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen w-screen overflow-hidden">
      <div className="h-full grid grid-cols-2 content-center">
        <div className="flex items-center justify-center">
          <img className="w-2/3" src="/hero-img.png" alt="" />
        </div>

        <div className="flex items-center justify-center px-2 py-10 bg-white ">
          {children}
        </div>
      </div>
    </section>
  );
}
