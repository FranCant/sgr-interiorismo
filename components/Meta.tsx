import Head from "next/head";
import { HeadData } from "../typing";

const Meta = ({ title, description, keywords }: HeadData) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/images/fav.ico" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "SGR Interiorismo",
  keywords: "interiorismo, proyectos, casas",
  description: "Bienvenido a Sgr Interiorismo.",
};

export default Meta;
