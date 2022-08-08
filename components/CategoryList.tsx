import { Category } from "../typing";
import CategoryCard from "./CategoryCard";

interface Props {
  categories: Category[];
}

function CategoryList({ categories }: Props) {
  return (
    <>
      <div className="bg-backgroundSec py-20 w-full flex flex-col items-center justify-center">
        {categories.map((category) => (
          <CategoryCard category={category} key={category._id} />
        ))}
        <hr className="border border-main/30 mt-8 mb-[2rem] layout" />
      </div>
    </>
  );
}

export default CategoryList;
