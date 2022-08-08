import type { GetStaticProps, NextPage } from "next";
// import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Marcas from "../components/Marcas";
import Meta from "../components/Meta";
import CategoryList from "../components/CategoryList";
import Section from "../components/Section";
import { sanityClient } from "../lib/client";
import { Category } from "../typing";

interface Props {
  categories: Category[];
}
export default function Home({ categories }: Props) {
  return (
    <div className="">
      <Meta />
      <Hero />
      <Section />
      <Marcas />
      <CategoryList categories={categories} />
      <div className="bg-gradient-to-br from-fill via-fill/90 to-fill/70">
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryCategory = `*[ _type == "category" ]{
    ...,
    "projects": *[ _type == "projects" && ^._id in categories[]._ref ],
  }
  `;

  const categories = await sanityClient.fetch(queryCategory);

  return {
    props: {
      categories,
    },
  };
};
