import { sanityClient, urlFor } from "../../lib/client";
import { PortableText } from "@portabletext/react";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import Meta from "../../components/Meta";
import { GetStaticProps } from "next";
import { Category } from "../../typing";

interface Props{
    projects: any
}
function Project({ projects }: Props) {
  return (
    <div className="w-full flex items-center flex-col pt-14 ">
      <Meta title={projects.title} />
      <div className="layout py-20 flex flex-col items-center justify-center">
        <div className="flex flex-col space-y-2">
          <h1 className="text-5xl">{projects.title}</h1>
          <PortableText value={projects.body} />
        </div>

        <div className="grid grid-cols-1 gap-4 mt-5">
          {projects.imagesGallery.map((imagen: any) => (
            <div className="relative" key={imagen._key}>
              <img
                className="h-full w-full"
                src={urlFor(imagen).url()!}
                key={imagen._key}
              />
            </div>
          ))}
        </div>
        <Link href={`/proyectos/`}>
          <a className="ml-auto mt-5 rounded px-5 py-2.5 overflow-hidden group bg-fill relative hover:bg-gradient-to-r hover:from-fill hover:to-fill/70 text-white hover:ring-2 hover:ring-offset-2 hover:ring-fill/70 transition-all ease-in-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="flex items-center">
              <BsArrowLeft className="h-5 w-5 mr-2" />
              Volver
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Project;

export const getStaticPaths = async () => {
  const query = `*[_type == "projects"] {
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "projects" && slug.current == $slug][0]`;
  
    const projects = await sanityClient.fetch(query, {
        slug: params?.slug,
    });
  
    if (!projects) {
        return {
          notFound: true,
        };
      }

    return {
      props: { projects },
      revalidate: 60,
    };
  };