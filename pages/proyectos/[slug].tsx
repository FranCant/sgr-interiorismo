import Meta from "../../components/Meta";
import ProjectCard from "../../components/ProjectCard";
import { sanityClient } from "../../lib/client";
import {GetStaticProps} from "next";
import { urlFor } from "../../lib/client";
import { Category } from "../../typing";

interface Props {
  dataCategories: Category
}

function Project({ dataCategories }: Props) {
  return (
    <div className="w-full flex items-center pb-10 pt-28">
      {/* <Meta /> */}
      <div className="layout min-h-main grid grid-cols-1 md:grid-cols-3 items-baseline justify-center gap-3">
        {dataCategories.projects.map((project) => (
          <ProjectCard project={project} key={project._id} />
        ))}
      </div>
    </div>
  );
}

export default Project;

export const getStaticProps: GetStaticProps = async ({params}) => {
  const query = `*[_type == "category" && slug.current == $slug][0]{
    slug {
      current
    },
    "projects": *[ _type == "projects" && ^._id in categories[]._ref ],
  }`;

  const dataCategories = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  return {
    props: { dataCategories },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const query = `*[_type == "category"] {
    _id,
    slug {
      current
    }
  }
  `;

  const categoryPath = await sanityClient.fetch(query);

  const paths = categoryPath.map((category: Category) => ({
    params: {
      slug: category.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
