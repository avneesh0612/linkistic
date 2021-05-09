import Head from "next/head";
import Link from "../components/Link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-[5vh]">
      <Head>
        <title>Connect with Avneesh</title>
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/76690419?v=4"
        />
      </Head>

      <img
        className="w-[220px] rounded-full"
        src="https://avatars.githubusercontent.com/u/76690419?v=4"
        alt="Avneesh Agarwal"
      />
      <h2 className="text-2xl font-semibold text-white mb-2">Avneesh Agarwal</h2>
      <Link
        image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620543879/image-removebg-preview_7_mpmgog.png"
        href="https://www.instagram.com/avneesh__agarwal/"
        Name="Follow me on Instagram"
      />
      <Link
        image="https://www.sferalabs.cc/wp-content/uploads/github-logo.png"
        href="https://github.com/avneesh0612"
        Name="Look at my code on Github"
      />
      <Link
        image="https://cdn.icon-icons.com/icons2/2201/PNG/512/linkedin_logo_square_icon_134016.png"
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
  );
}
