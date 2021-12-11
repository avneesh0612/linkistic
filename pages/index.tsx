import Head from "next/head";
import Image from "next/image";
import Link from "../components/Link";
import links from "../public/links.json";

export default function Home() {
  return (
    <div className="relative flex flex-col w-screen min-h-screen overflow-x-hidden bg-bgblue md:justify-center md:items-center">
      <Head>
        <title>Connect with Avneesh</title>
        <link rel="icon" href="/icon-192x192.png" />
      </Head>
      <div className="!mt-5">
        <Image
          width={250}
          height={250}
          className="mx-auto border-[1px] rounded-full border-neongreen"
          src="/icon-512x512.png"
          alt="Avneesh Agarwal"
        />
        <h2 className="mb-3 -mt-5 text-3xl font-bold text-center text-neongreen md:text-4xl">
          Avneesh Agarwal
        </h2>
      </div>
      <div className="w-full max-w-lg p-6">
        {links.map((link, i) => (
          <Link
            key={i}
            image={link.image}
            href={link.href}
            title={link.title}
          />
        ))}
      </div>
    </div>
  );
}
