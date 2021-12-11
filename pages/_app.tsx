import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Connect with Avneesh"
        titleTemplate="Connect with Avneesh"
        defaultTitle="Connect with Avneesh"
        description="An app with all my social links"
        canonical="https://www.avneesh.tech/"
        openGraph={{
          url: "https://www.avneesh.tech/",
          title: "Connect with Avneesh",
          description: "An app with all my social links",
          images: [
            {
              url: "/og-image.png",
              width: 800,
              height: 420,
              alt: "Connect with Avneesh",
            },
          ],
          profile: {
            firstName: "Avneesh",
            gender: "Male",
            lastName: "Agarwal",
            username: "avneesh0612",
          },
        }}
        twitter={{
          handle: "@avneesh0612",
          site: "@avneesh0612",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
