import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
