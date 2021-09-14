import SEO from "@bradgarropy/next-seo";
import { motion } from "framer-motion";
import { AppProps } from "next/app";
import "../styles/globals.css";


function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <Component {...pageProps} />
      <SEO
        title="Connect with Avneesh"
        description="An app with all my social links"
        keywords={["Connect", "links", "PWA"]}
        icon="/Avneesh192x192.png"
        facebook={{
          image:
            "https://res.cloudinary.com/dssvrf9oz/image/upload/v1625825953/Avneesh_Avatar_gukdsk.png",
          url: "https://avneesh-links.vercel.app/",
          type: "website",
        }}
        twitter={{
          image:
            "https://res.cloudinary.com/dssvrf9oz/image/upload/v1625825953/Avneesh_Avatar_gukdsk.png",
          site: "https://avneesh-links.vercel.app/",
          card: "summary",
        }}
      />
    </motion.div>
  );
}

export default MyApp;
