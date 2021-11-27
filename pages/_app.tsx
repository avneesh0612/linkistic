import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
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

      <NextSeo
        title="Connect with Avneesh"
        description="An app with all my social links"
        canonical="https://www.avneesh.tech/"
        openGraph={{
          url: "https://www.avneesh.tech/",
          site_name: "Connect with Avneesh",
          images: [
            {
              url: "/seo-image.png",
              width: 800,
              height: 420,
              alt: "Connect with Avneesh",
            },
          ],
        }}
        twitter={{
          handle: "@avneesh0612",
          site: "@avneesh0612",
          cardType: "summary_large_image",
        }}
      />
    </motion.div>
  );
}

export default MyApp;
