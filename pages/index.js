import Head from "next/head";
import Link from "../components/Link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-indigo-200">
      <Head>
        <title>Connect with Avneesh</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dssvrf9oz/image/upload/v1625825953/Avneesh_Avatar_gukdsk.png"
        />
      </Head>

      <div>
        <img
          className="w-[220px] rounded-full mx-auto"
          src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1625825953/Avneesh_Avatar_gukdsk.png"
          alt="Avneesh Agarwal"
        />
        <h2 className="text-2xl font-semibold text-indigo-900 mb-2">
          Avneesh Agarwal
        </h2>
      </div>
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-2000"></div>
        <div className="absolute left-20 -bottom-8 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-4000"></div>

        <Link
          image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620543879/image-removebg-preview_7_mpmgog.png"
          href="https://www.instagram.com/avneesh__agarwal/"
          Name="Follow me on Instagram"
        />
        <Link
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          href="https://github.com/avneesh0612"
          Name="Look at my code on Github"
        />
        <Link
          image="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png"
          href="https://www.linkedin.com/in/avneesh-agarwal-78312b20a/"
          Name="Connect with me on LinkedIn"
        />
        <Link
          image="https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png"
          href="https://avneeshagarwal.medium.com/"
          Name="Checkout my medium blogs"
        />
        <Link
          image="https://icons-for-free.com/iconfiles/png/512/suitcase+work+icon-1320165848716624003.png"
          href="https://avneeshresume.netlify.app/"
          Name="Checkout my resume"
        />
      </div>
    </div>
  );
}
