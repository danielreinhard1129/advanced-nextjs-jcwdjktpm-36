"use client";

import { Recipe } from "@/types/recipe";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RecipesPage = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const getRecipes = async () => {
    try {
      const result = await axios.get("https://dummyjson.com/recipes");
      setRecipes(result.data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    router.push("/static");
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <h1>RecipesPage</h1>

      <button onClick={handleClick}>go to static page using use router</button>
      <Link href="/static">go to static page using link component</Link>

      {recipes.map((recipe) => {
        return (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
            <div className="flex items-center gap-4">
              <img
                src={recipe.image}
                alt="image recipe"
                className="w-[300px] h-[300px]"
              />

              <p>{recipe.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesPage;
