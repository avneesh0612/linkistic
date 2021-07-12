import Head from "next/head";
import Link from "../components/Link";

export default function Home() {
  return (
    <div className="flex flex-col md:justify-center md:items-center w-screen h-screen bg-indigo-200 relative overflow-x-hidden">
      <Head>
        <title>Connect with Avneesh</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dssvrf9oz/image/upload/v1625825953/Avneesh_Avatar_gukdsk.png"
        />
      </Head>
      <div className="absolute top-[45%] left-[0%] md:left-[20%] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob"></div>
      <div className="absolute top-[50%] left-[50%] w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-2000"></div>
      <div className="absolute top-[75%] md:top-[60%] left-[10%] md:left-[30%] w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-4000"></div>
      <div className="mt-12">
        <img
          className="w-[220px] rounded-full mx-auto"
          src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1625825953/Avneesh_Avatar_gukdsk.png"
          alt="Avneesh Agarwal"
        />
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 my-3 text-center">
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
          image="https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png"
          href="https://avneeshagarwal.medium.com/"
          Name="Checkout my medium blogs"
        />
        <Link
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          href="https://github.com/avneesh0612"
          Name="Look at my code on Github"
        />
        <Link
          image="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
          href="https://twitter.com/AvneeshAgarwa12"
          Name="Follow me on twitter"
        />
        <Link
          image="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png"
          href="https://www.linkedin.com/in/avneesh-agarwal-78312b20a/"
          Name="Connect with me on LinkedIn"
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
