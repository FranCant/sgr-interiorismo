import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Projects } from "../typing";
import { urlFor } from "../lib/client";

interface Props {
    project: Projects
}

function ProjectCard({ project }: Props) {
  return (
    <>
      {project && (
        <div
          key={project._id}
          className="group w-full rounded-lg border overflow-hidden border-gray-200 transition-all ease-in-out duration-200 shadow-sm hover:shadow-lg bg-fill"
        >
          <div className="relative overflow-hidden ">
            <img
              className="h-72 w-full object-cover transition-all ease-in-out duration-200 group-hover:scale-105"
              src={urlFor(project?.image).url()!}
              alt={project?.title}
            />
          </div>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {project.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project.description}
            </p>

            <Link href={`/proyecto/${project?.slug?.current}`} key={project._id}>
              <a className="space-x-2 inline-flex items-center py-2 px-3 text-sm font-medium text-main rounded-lg transition-all ease-in-out duration-200 bg-backgroundSec/95 hover:bg-backgroundSec focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                <span>Conocer</span>
                <BsArrowRight />
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
