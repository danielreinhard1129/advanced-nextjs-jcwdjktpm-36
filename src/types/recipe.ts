export type Difficulty = "Easy" | "Medium" | "Hard";

export type MealType = "Breakfast" | "Lunch" | "Dinner" | "Snack" | "Dessert";

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: Difficulty;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string; // URL
  rating: number; // e.g., 0–5
  reviewCount: number;
  mealType: MealType[];
}
