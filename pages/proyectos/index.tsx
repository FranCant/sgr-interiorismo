import {GetStaticProps} from "next";
import CategoryList from "../../components/CategoryList";
import Meta from "../../components/Meta";
import { sanityClient } from "../../lib/client";
import { Category } from "../../typing";

interface Props {
  categories: Category[]
}

function index({ categories }: Props) {

  return (
    <div className="w-full min-h-screen flex items-center ">
      <Meta title="Proyectos" />
      <CategoryList categories={categories} />
    </div>
  );
}

export default index;

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
      revalidate: 60,
    },
  };
};
