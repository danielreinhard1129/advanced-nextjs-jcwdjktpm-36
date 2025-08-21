"use client";

import { Recipe } from "@/types/recipe";
import axios from "axios";
import { useEffect, useState } from "react";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const getRecipes = async () => {
    try {
      const result = await axios.get("https://dummyjson.com/recipes");
      setRecipes(result.data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <h1>RecipesPage</h1>

      {recipes.map((recipe) => {
        return (
          <div key={recipe.id} className="flex items-center gap-4">
            <img
              src={recipe.image}
              alt="image recipe"
              className="w-[300px] h-[300px]"
            />
            <p>{recipe.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecipesPage;
