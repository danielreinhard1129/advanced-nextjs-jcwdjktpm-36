import { macondo } from "@/app/layout";
import { Recipe } from "@/types/recipe";
import { notFound } from "next/navigation";

interface RecipeDetailProps {
  params: Promise<{ id: string }>;
}

const RecipeDetail = async ({ params }: RecipeDetailProps) => {
  const id = (await params).id;

  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const result: Recipe = await response.json();

  if (!response.ok) {
    return notFound();
  }

  return (
    <div>
      <h1>RecipeDetail</h1>
      <p>ini id recipe : {id}</p>
      <p className={`${macondo.className}`}>{result.name}</p>
      <img
        src={result.image}
        alt="image recipe"
        className="w-[300px] h-[300px]"
      />

      <h2 className="mt-10">Ingredients : </h2>
      <ol>
        {result.ingredients.map((ingredient, index) => {
          return (
            <li key={index} className="ml-4 list-decimal">
              {ingredient}
            </li>
          );
        })}
      </ol>

      <h2 className="mt-10">How to cook : </h2>
      <ol>
        {result.instructions.map((instruction, index) => {
          return (
            <li key={index} className="ml-4 list-decimal">
              {instruction}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default RecipeDetail;
