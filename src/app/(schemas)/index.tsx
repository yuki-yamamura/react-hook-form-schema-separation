import { z } from "zod";

const recipeSchema = z.object({
  title: z.string(),
  ingredients: z.array(z.object({ id: z.string() })),
});

type RecipeSchemaType = z.infer<typeof recipeSchema>;

export { recipeSchema, type RecipeSchemaType };
