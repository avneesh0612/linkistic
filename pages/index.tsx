import Head from "next/head";
import Link from "../components/Link";

export default function Home() {
  return (
    <div className="relative flex flex-col w-screen min-h-screen overflow-x-hidden bg-[#222E50] md:justify-center md:items-center">
      <Head>
        <title>Connect with Avneesh</title>
        <link rel="icon" href="/icon-192x192.png" />
      </Head>
      <div className="!mt-5">
        <img
          className="mx-auto w-[250px] h-[250px] rounded-full"
          src="/icon-512x512.png"
          alt="Avneesh Agarwal"
        />
        <h2 className="mb-3 -mt-5 text-3xl font-bold text-center text-neongreen md:text-4xl">
          Avneesh Agarwal
        </h2>
      </div>
      <div className="w-full max-w-lg p-6">
        <Link
          image="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
          href="https://www.instagram.com/avneesh.codes/"
          Name="Follow me on Instagram"
        />
        <Link
          image="https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress"
          href="https://avneesh0612.hashnode.dev/"
          Name="Checkout my blogs on Hashnode"
        />
        <Link
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          href="https://github.com/avneesh0612"
          Name="Look at my code on Github"
        />
        <Link
          image="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
          href="https://twitter.com/avneesh0612"
          Name="Follow me on Twitter"
        />
        <Link
          image="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png"
          href="https://www.linkedin.com/in/avneesh-agarwal-78312b20a/"
          Name="Connect with me on LinkedIn"
        />
        <Link
          image="https://icons-for-free.com/iconfiles/png/512/suitcase+work+icon-1320165848716624003.png"
          href="https://www.avneesh.tech/"
          Name="Checkout my resume"
        />
      </div>
    </div>
  );
}
