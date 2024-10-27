import { z } from "zod";

const recipeSchema = z.object({
  title: z.string(),
  ingredients: z.array(z.object({ id: z.string() })),
});

const lowSodiumRecipeSchema = z
  .object({
    sodiumContent: z
      .string()
      .transform((value) => Number(value))
      .pipe(z.number()),
  })
  .merge(recipeSchema);

type RecipeSchemaType = z.infer<typeof recipeSchema>;
type LowSodiumRecipeSchemaType = z.infer<typeof lowSodiumRecipeSchema>;

export {
  recipeSchema,
  lowSodiumRecipeSchema,
  type RecipeSchemaType,
  type LowSodiumRecipeSchemaType,
};
