import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Category } from "../typing";

interface Props {
  category: Category
}
function CategoryCard({ category }: Props) {

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        key={category._id}
        className="group w-full py-10 flex flex-col items-center"
      >
        <hr className="border border-main/30 mb-[4rem] layout" />
        <p className="text-sm">{category.shortDescription}</p>

        <h3 className="pt-1 text-4xl md:text-6xl uppercase font-serif font-light">
          {category.title}
        </h3>
        <Link href={`proyectos/${category.slug.current}`} key={category._id}>
          <a>
            <div className="flex items-center space-x-4 justify-center mt-5 cursor-pointer">
              <p className="group-hover:text-main/50 ease-in-out transition-all durantion-300">
                Explorar
              </p>
              <BsArrowLeft className="h-5 w-5 font-light ease-in-out transition duration-300 group-hover:rotate-180" />
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}

export default CategoryCard;
